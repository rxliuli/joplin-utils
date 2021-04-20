import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import path from 'path'
import { config, noteApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { uniqueBy } from '@liuli-util/array'

export interface BaseIntegrated {
  /**
   * 解析笔记，得到一个替换后的笔记文本和一些资源
   * @param note
   */
  parse(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): string

  /**
   * 初始化操作
   * 例如清空自动生成的目录
   */
  init(): Promise<void>

  /**
   * 根据框架将笔记写入指定位置
   * @param note
   */
  write(note: CommonNote & { text: string }): Promise<void>

  /**
   * 复制资源到笔记指定位置
   * @param resourcePath
   */
  copy(resourcePath: string): Promise<void>
}

export interface ApplicationConfig {
  token: string
  port?: number
  joplinProfilePath: string
  tag: string
}

export type ProcessHook = (options: {
  rate: number
  all: number
  title: string
}) => void

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

  async gen() {
    await this.check()
    //获取所有笔记及其相关的资源和标签
    const arr = await this.filter()
    console.log(`一共有 ${arr.length} 个笔记需要处理`)
    //读取笔记附件与标签
    const noteList = await this.readNoteAttachmentsAndTags(arr, (options) => {
      console.log(
        `${options.rate}/${options.all} 正在读取笔记附件与标签: `,
        options.title,
      )
    })
    //初始化
    await this.handler.init()
    //解析并写入笔记
    const replaceContentNoteList = await this.parseAndWriteNotes(
      noteList,
      (options) => {
        console.log(
          `${options.rate}/${options.all} 正在解析笔记中的 Joplin 内部链接与附件资源: ${options.title}`,
          options.title,
        )
      },
    )
    await this.writeNote(replaceContentNoteList, (options) => {
      console.log(
        `${options.rate}/${options.all} 正在写入笔记: ${options.title}`,
        options.title,
      )
    })
    //复制资源
    await this.copyResources(noteList, (options) => {
      console.log(
        `${options.rate}/${options.all} 正在处理资源: ${options.title}`,
      )
    })
  }

  async copyResources(
    noteList: (CommonNote & {
      resources: CommonResource[]
      tags: CommonTag[]
    })[],
    process: ProcessHook,
  ) {
    let i = 0
    const resourceList = uniqueBy(
      noteList.flatMap((item) => item.resources),
      (resource) => resource.id,
    )
    await AsyncArray.forEach(
      resourceList,
      asyncLimiting(async (resource: CommonResource) => {
        i++
        process({ rate: i, all: resourceList.length, title: resource.title })
        const fileName = resource.id + '.' + resource.file_extension
        await this.handler.copy(
          path.resolve(this.config.joplinProfilePath, 'resources', fileName),
        )
      }, 10),
    )
  }

  parseAndWriteNotes(
    noteList: (CommonNote & {
      resources: CommonResource[]
      tags: CommonTag[]
    })[],
    process: ProcessHook,
  ) {
    return noteList.map((note, i) => {
      process({ rate: i, all: noteList.length, title: note.title })
      return {
        ...note,
        text: this.handler.parse(note),
      }
    })
  }

  async writeNote(
    noteList: (CommonNote & { text: string })[],
    process: (options: { rate: number; all: number; title: string }) => void,
  ) {
    let i = 0
    await AsyncArray.forEach(noteList, async (item) => {
      i++
      process({ rate: i, all: noteList.length, title: item.title })
      await this.handler.write(item)
      return item
    })
  }

  async readNoteAttachmentsAndTags(arr: CommonNote[], process: ProcessHook) {
    let i = 0
    return new AsyncArray(
      arr.map((note) => ({
        ...note,
        title: JoplinMarkdownUtil.trimTitle(note.title),
      })),
    ).map(
      asyncLimiting(async (note) => {
        i++
        process({
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
  }
}
