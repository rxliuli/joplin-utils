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
import { AsyncArray, wait } from '@liuli-util/async'
import path from 'path'
import { folderApi, noteApi, resourceApi, tagApi } from 'joplin-api'
import { omit } from '@liuli-util/object'
import { createReadStream } from 'fs'

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
    console.log('写入笔记')
    await this.writeNote(await this.listNote(readConfig.noteList))
    console.log('写入资源')
    await this.writeResource(readConfig.resourceList)
    console.log('写入标签')
    await this.writeTag(readConfig.tagList)
    await this.writeNoteTagRelation(readConfig.noteTagRelationList)
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
      await folderApi.create(omit(item, 'fileTitle', 'filePath'))
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
    await AsyncArray.forEach(noteList, async (item) => {
      await noteApi.create(omit(item, 'fileTitle', 'filePath'))
    })
  }

  async writeResource(resourceList: ExportResource[]) {
    await AsyncArray.forEach(resourceList, async (item) => {
      await resourceApi.create({
        ...omit(item, 'fileTitle'),
        data: createReadStream(
          path.resolve(this.config.rootPath, 'resources', item.fileTitle),
        ),
      })
    })
  }

  async writeTag(tagList: ExportTag[]) {
    await AsyncArray.forEach(tagList, async (item) => {
      await tagApi.create(item)
    })
  }

  async writeNoteTagRelation(noteTagRelationList: ExportNoteTagRelation[]) {
    await AsyncArray.forEach(noteTagRelationList, async (item) => {
      await tagApi.addTagByNoteId(item.tagId, item.noteId)
    })
  }
}
