import {
  ExportConfig,
  ExporterConfig,
  ExportFolder,
  ExportNote,
  ExportNoteTagRelation,
  ExportResource,
  ExportTag,
} from './Exporter'
import { readFile, readJson } from 'fs-extra'
import { AsyncArray, asyncLimiting, wait } from '@liuli-util/async'
import path from 'path'
import { omit } from '@liuli-util/object'
import joplin from 'joplin-plugin-api'
import { tagApi } from 'joplin-api'

/**
 * 导入程序
 */
export class Importer {
  constructor(readonly config: ExporterConfig) {}

  async importArchive() {
    console.log('读取配置')
    const readConfig = await this.readConfig()
    console.log('写入目录')
    await this.writeFolder(readConfig.folderList)
    console.log('写入资源')
    await this.writeResource(readConfig.resourceList)
    console.log('写入笔记')
    await this.writeNote(await this.listNote(readConfig.noteList))
    console.log('写入标签')
    await this.writeTag(readConfig.tagList)
    console.log('关联标签与笔记')
    await this.writeNoteTagRelation(readConfig.noteTagRelationList)
    console.log('导入完成')
  }

  async readConfig(): Promise<ExportConfig> {
    const list = [
      'folderList',
      'noteList',
      'resourceList',
      'tagList',
      'noteTagRelationList',
    ]
    const configPath = path.resolve(this.config.rootPath, 'config')
    const res = await AsyncArray.map(list, async (fileName) => {
      const config = await readJson(
        path.resolve(configPath, fileName + '.json'),
      )
      return [fileName, config]
    })
    return res.reduce((res, [k, v]) => {
      res[k as keyof ExportConfig] = v
      return res
    }, {} as ExportConfig)
  }

  async writeFolder(folderList: ExportFolder[]) {
    const createdIdSet = new Set<string>()
    await AsyncArray.forEach(folderList, async (item) => {
      await wait(() => !item.parent_id || createdIdSet.has(item.parent_id))
      console.log('writeFolder: ', item.title)
      await joplin.data.post(
        ['folders'],
        null,
        omit(item, 'fileTitle', 'filePath'),
      )
      createdIdSet.add(item.id)
    })
  }

  async listNote(noteList: Omit<ExportNote, 'body'>[]): Promise<ExportNote[]> {
    return await AsyncArray.map(noteList, async (item) => {
      const notePath = path.resolve(
        this.config.rootPath,
        'notes',
        item.filePath,
      )
      return {
        ...item,
        body: await readFile(notePath, 'utf-8'),
      } as ExportNote
    })
  }

  async writeNote(noteList: ExportNote[]) {
    const start = Date.now()
    let i = 0
    const len = noteList.length
    await AsyncArray.forEach(
      noteList,
      asyncLimiting(async (item) => {
        console.log(`[${++i}/${len}] writeNote: `, item.title)
        await joplin.data.post(
          ['notes'],
          null,
          omit(item, 'fileTitle', 'filePath'),
        )
      }, 10),
    )
    console.log('writeNote end: ', Date.now() - start)
  }

  async writeResource(resourceList: ExportResource[]) {
    await AsyncArray.forEach(
      resourceList,
      asyncLimiting(async (item) => {
        const resourcePath = path.resolve(
          this.config.rootPath,
          'resources',
          item.fileTitle,
        )
        console.log('writeResource: ', resourcePath)
        await joplin.data.post(
          ['resources'],
          null,
          omit(item, 'fileTitle'), // Resource metadata
          [
            {
              path: resourcePath, // Actual file
            },
          ],
        )
      }, 10),
    )
  }

  async writeTag(tagList: ExportTag[]) {
    await AsyncArray.forEach(
      tagList,
      asyncLimiting(async (item) => {
        console.log('writeTag: ', item.title)
        await joplin.data.post(['tags'], null, item)
      }, 10),
    )
  }

  async writeNoteTagRelation(noteTagRelationList: ExportNoteTagRelation[]) {
    await AsyncArray.forEach(
      noteTagRelationList,
      asyncLimiting(async (item) => {
        console.log('writeNoteTagRelation: ', item.tagId, item.noteId)
        await joplin.data.post(['tags', item.tagId, 'notes'], null, {
          id: item.noteId,
        })
      }, 10),
    )
  }
}
