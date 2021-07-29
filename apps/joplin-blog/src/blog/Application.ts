import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { config, noteApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { diffBy, uniqueBy } from '@liuli-util/array'
import { PromiseUtil } from '../util/PromiseUtil'
import {
  copyFile,
  mkdirp,
  pathExists,
  readJson,
  remove,
  writeFile,
  writeJson,
} from 'fs-extra'

export interface BaseIntegrated {
  /**
   * 解析笔记，得到一个替换后的笔记文本和一些资源
   * @param note
   */
  parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): Promise<string> | string

  /**
   * 初始化操作
   * 例如清空自动生成的目录
   */
  init?(): Promise<void>

  /**
   * 笔记写入的相对位置
   */
  readonly notePath: string
  /**
   * 复制资源的相对位置
   */
  readonly resourcePath: string
}

export interface ApplicationConfig {
  token: string
  port?: number
  joplinProfilePath: string
  tag: string
}

export type ProcessInfo = {
  rate: number
  all: number
  title: string
}
export type ProcessHook = (options: ProcessInfo) => void

type ProcessEvents = {
  process: ProcessHook
}

export interface GeneratorEvents {
  copyResources: ProcessHook
  parseAndWriteNotes: ProcessHook
  writeNote: ProcessHook
  readNoteAttachmentsAndTags: ProcessHook
}

/**
 * 入口程序
 */
export class Application {
  constructor(
    readonly config: ApplicationConfig,
    readonly handler: BaseIntegrated,
  ) {}

  async filter() {
    const list = await PageUtil.pageToAllList((pageParam) =>
      searchApi.search({
        ...(pageParam as any),
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
        ],
        type: TypeEnum.Note,
        query: `tag:${this.config.tag}`,
      }),
    )
    return list.map(
      ({ id, title, body, user_created_time, user_updated_time }) =>
        ({
          id,
          title,
          body,
          createdTime: user_created_time,
          updatedTime: user_updated_time,
        } as CommonNote),
    )
  }

  async check(): Promise<Error | true> {
    try {
      config.token = this.config.token
      config.port = this.config.port || 41184
      await noteApi.list({ fields: ['id'], limit: 1 })
      return true
    } catch (e) {
      return e
    }
  }

  /**
   * 初始化资源目录
   */
  async initDir() {
    await remove(this.handler.resourcePath)
    await Promise.all([
      mkdirp(this.handler.notePath),
      mkdirp(this.handler.resourcePath),
    ])
  }

  async cache<T extends CommonNote>(allNoteList: T[]) {
    const cachePath = path.resolve(__dirname, '.joplin-cache.json')
    const cacheList: CacheNote[] = (await pathExists(cachePath))
      ? await readJson(cachePath)
      : []
    const { left: removeNoteList, common: existNoteList } = diffBy(
      cacheList,
      allNoteList,
      (item) => item.id,
    )
    const existNoteIdSet = new Set(existNoteList.map((item) => item.id))
    const { common: noChangeNoteList } = diffBy(
      cacheList.filter((item) => existNoteIdSet.has(item.id)),
      allNoteList.filter((item) => existNoteIdSet.has(item.id)),
      (item) => item.updatedTime,
    )
    await AsyncArray.forEach(removeNoteList, async (item) => {
      await remove(path.resolve(this.handler.notePath, item.id + '.md'))
    })
    const noChangeNoteIdSet = new Set(noChangeNoteList.map((item) => item.id))
    const noteList = allNoteList.filter(
      (item) => !noChangeNoteIdSet.has(item.id),
    )
    return {
      noteList,
      async updateCache() {
        await writeJson(cachePath, allNoteList)
      },
    }
  }

  gen() {
    return PromiseUtil.warpOnEvent(async (events: GeneratorEvents) => {
      await this.check()
      //获取所有笔记及其相关的资源和标签
      const arr = await this.filter()
      console.log(`一共有 ${arr.length} 个笔记需要处理`)
      //读取笔记附件与标签
      const allNoteList = await this.readNoteAttachmentsAndTags(arr).on(
        'process',
        events.readNoteAttachmentsAndTags,
      )
      //初始化
      await this.initDir()
      await this.handler.init?.()
      const { noteList, updateCache } = await this.cache(allNoteList)
      //解析并写入笔记
      const replaceContentNoteList = await this.parseAndWriteNotes(noteList).on(
        'process',
        events.parseAndWriteNotes,
      )
      await this.writeNote(replaceContentNoteList).on(
        'process',
        events.writeNote,
      )
      //复制资源
      await this.copyResources(noteList).on('process', events.copyResources)
      await updateCache()
    })
  }

  copyResources(
    noteList: (CommonNote & {
      resources: CommonResource[]
      tags: CommonTag[]
    })[],
  ) {
    return PromiseUtil.warpOnEvent(async (events: ProcessEvents) => {
      let i = 0
      const resourceList = uniqueBy(
        noteList.flatMap((item) => item.resources),
        (resource) => resource.id,
      )
      await AsyncArray.forEach(
        resourceList,
        asyncLimiting(async (resource: CommonResource) => {
          i++
          events.process({
            rate: i,
            all: resourceList.length,
            title: resource.title,
          })
          const fileName = resource.id + '.' + resource.file_extension
          await copyFile(
            path.resolve(this.config.joplinProfilePath, 'resources', fileName),
            path.resolve(this.handler.resourcePath, fileName),
          )
        }, 10),
      )
    })
  }

  parseAndWriteNotes(
    noteList: (CommonNote & {
      resources: CommonResource[]
      tags: CommonTag[]
    })[],
  ) {
    return PromiseUtil.warpOnEvent(async (events: ProcessEvents) =>
      AsyncArray.map(
        noteList,
        asyncLimiting(async (note, i) => {
          events.process({ rate: i, all: noteList.length, title: note.title })
          return {
            ...note,
            text: await this.handler.parse(note),
          }
        }, 10),
      ),
    )
  }

  writeNote(noteList: (CommonNote & { text: string })[]) {
    return PromiseUtil.warpOnEvent(async (events: ProcessEvents) => {
      let i = 0
      await AsyncArray.forEach(noteList, async (item) => {
        i++
        events.process({ rate: i, all: noteList.length, title: item.title })
        await writeFile(
          path.resolve(this.handler.notePath, item.id + '.md'),
          item.text,
        )
      })
    })
  }

  readNoteAttachmentsAndTags(arr: CommonNote[]) {
    return PromiseUtil.warpOnEvent(async (events: ProcessEvents) => {
      let i = 0
      return new AsyncArray(
        arr.map((note) => ({
          ...note,
          title: JoplinMarkdownUtil.trimTitle(note.title),
        })),
      ).map(
        asyncLimiting(async (note) => {
          i++
          events.process({
            rate: i,
            all: arr.length,
            title: note.title,
          })
          const [resources, tags] = await Promise.all([
            noteApi.resourcesById(note.id, ['id', 'title', 'file_extension']),
            noteApi.tagsById(note.id),
          ])
          return {
            ...note,
            resources: resources as CommonResource[],
            tags: tags as CommonTag[],
          }
        }, 10),
      )
    })
  }
}

type CacheNote = Pick<CommonNote, 'id' | 'updatedTime'>
