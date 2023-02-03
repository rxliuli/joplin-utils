import { folderApi, noteApi, resourceApi, tagApi } from 'joplin-api'
import { PageRes } from 'joplin-api'
import { treeMap, treeToList } from '@liuli-util/tree'
import * as path from 'path'
import { arrayToMap } from '@liuli-util/array'
import { FolderListAllRes } from 'joplin-api'
import { AsyncArray } from '@liuli-util/async'
import { mkdirp, writeFile, writeJson } from 'fs-extra'
import { NoteProperties } from 'joplin-api'
import { ResourceProperties } from 'joplin-api'
import { TagProperties } from 'joplin-api'
import { replaceFilename } from '../util/replaceFilename'

type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<PageRes<infer U>> ? U : never

async function readAll<F extends (...args: any[]) => Promise<PageRes<any>>>(
  fn: F,
  pageParam: Omit<Parameters<F>[0], 'page' | 'limit'>,
): Promise<PageResValueType<ReturnType<F>>[]> {
  const res: PageResValueType<ReturnType<F>>[] = []
  for (let i = 1, hasMore = true; hasMore; i++) {
    const { has_more, items } = await fn({
      ...pageParam,
      page: i,
      limit: 100,
    })
    hasMore = has_more
    res.push(...items)
  }
  return res
}

export interface ExporterConfig {
  rootPath: string
}

type WriteFileProperty = {
  fileTitle: string
  filePath: string
}
export type ExportFolder = FolderListAllRes & WriteFileProperty
export type ExportNote = Pick<
  NoteProperties,
  'id' | 'title' | 'body' | 'user_created_time' | 'user_updated_time' | 'is_todo' | 'todo_completed' | 'todo_due'
> &
  WriteFileProperty

export type ExportResource = Pick<
  ResourceProperties,
  'id' | 'title' | 'user_created_time' | 'user_updated_time' | 'file_extension' | 'mime'
> & { fileTitle: string }

export type ExportNoteTagRelation = {
  tagId: string
  noteId: string
}

export type ExportTag = Pick<TagProperties, 'id' | 'title' | 'user_updated_time' | 'user_created_time'>

export type ExportConfig = {
  folderList: ExportFolder[]
  noteList: Omit<ExportNote, 'body'>[]
  resourceList: ExportResource[]
  tagList: ExportTag[]
  noteTagRelationList: ExportNoteTagRelation[]
}

/**
 * 导出程序
 */
export class Exporter {
  constructor(readonly config: ExporterConfig) {}

  async export() {
    await mkdirp(this.config.rootPath)
    console.log('读取目录')
    const folderList = await this.listFolder()
    await this.writeFolder(folderList)
    console.log('读取笔记')
    const noteList = await this.listNote(folderList)
    await this.writeNote(noteList)
    console.log('读取资源')
    const resourceList = await this.listResource()
    await this.writeResource(resourceList)
    console.log('读取标签')
    const { tagList, noteTagRelationList } = await this.tag()
    console.log('写入配置')
    await this.writeConfig({
      folderList,
      noteList: noteList.map(({ body, ...item }) => item) as any,
      resourceList,
      tagList,
      noteTagRelationList,
    })
  }

  async listFolder(): Promise<ExportFolder[]> {
    const tree = await folderApi.listAll()
    const folderSet = new Set<string>()
    const options = {
      id: 'id',
      children: 'children',
      path: 'path',
    } as const
    const newTree = treeMap(
      tree,
      (item) => {
        const fileTitle = item.title + (folderSet.has(item.parent_id + item.title) ? '_' + item.id : '')
        folderSet.add(item.parent_id + fileTitle)
        return {
          ...item,
          fileTitle: fileTitle,
        } as typeof item & Pick<WriteFileProperty, 'fileTitle'>
      },
      options,
    )
    const list = treeToList(newTree, options)
    const map = arrayToMap(list, (item) => item.id)
    return list.map((item) => {
      return {
        ...item,
        filePath: item.path.map((id) => map.get(id)!.fileTitle).join('/'),
      }
    })
  }

  async writeFolder(folderList: ExportFolder[]) {
    await AsyncArray.map(folderList, async (item) => {
      await mkdirp(path.resolve(this.config.rootPath, 'notes', item.filePath))
    })
  }

  async listNote(folderList: ExportFolder[]) {
    const noteList = await readAll(noteApi.list, {
      fields: [
        'id',
        'parent_id',
        'title',
        'body',
        'user_created_time',
        'user_updated_time',
        'is_todo',
        'todo_completed',
        'todo_due',
      ],
    })

    const noteTitleSet = new Set<string>()
    const folderMap = arrayToMap(folderList, (item) => item.id)
    return noteList.map((item) => {
      const folderTitle =
        replaceFilename(item.title) + (noteTitleSet.has(item.parent_id + item.title) ? '_' + item.id : '') + '.md'
      noteTitleSet.add(item.parent_id + item.title)
      return {
        ...item,
        fileTitle: folderTitle,
        filePath: [folderMap.get(item.parent_id)!.filePath, folderTitle].join('/'),
      } as typeof item & WriteFileProperty
    })
  }

  async writeNote(list: ExportNote[]) {
    await AsyncArray.forEach(list, async (item) => {
      const notePath = path.resolve(this.config.rootPath, 'notes', item.filePath)
      await writeFile(notePath, item.body)
    })
  }

  async listResource(): Promise<ExportResource[]> {
    const resourceList = await readAll(resourceApi.list, {
      fields: ['id', 'title', 'user_created_time', 'user_updated_time', 'file_extension', 'mime'],
    })
    const noteTitleSet = new Set<string>()
    return resourceList.map((item) => {
      const title = item.title + (item.title.endsWith(item.file_extension) ? '' : '.' + item.file_extension)
      // console.log('title: ', title)
      const fileTitle = (noteTitleSet.has(title) ? item.id + '_' : '') + title
      return {
        ...item,
        fileTitle,
      }
    })
  }

  async writeResource(list: ExportResource[]) {
    await mkdirp(path.resolve(this.config.rootPath, 'resources'))
    await AsyncArray.forEach(list, async (item) => {
      await writeFile(
        path.resolve(this.config.rootPath, 'resources', item.fileTitle),
        await resourceApi.fileByResourceId(item.id),
      )
    })
  }

  async tag(): Promise<Pick<ExportConfig, 'tagList' | 'noteTagRelationList'>> {
    const tagList = await readAll(tagApi.list, {
      fields: ['id', 'title', 'user_updated_time', 'user_created_time'],
    })
    const noteTagRelationList = await new AsyncArray(tagList).flatMap(async (item) => {
      const noteList = await readAll(tagApi.notesByTagId, {
        id: item.id,
      })
      return noteList.map((note) => ({
        noteId: note.id,
        tagId: item.id,
      }))
    })
    return { tagList, noteTagRelationList }
  }

  async writeConfig(config: ExportConfig) {
    const configPath = path.resolve(this.config.rootPath, 'config')
    await mkdirp(configPath)
    await AsyncArray.forEach(Object.entries(config), async ([fileName, v]) => {
      await writeJson(path.resolve(configPath, fileName + '.json'), v, {
        spaces: 2,
      })
    })
  }
}
