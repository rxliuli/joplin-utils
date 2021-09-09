import { Importer } from '../Importer'
import path from 'path'
import {
  config,
  folderApi,
  noteApi,
  PageUtil,
  resourceApi,
  tagApi,
} from 'joplin-api'
import { ExportConfig } from '../Exporter'

export function setupJoplinConfig() {
  config.token = process.env.token!
  config.port = Number.parseInt(process.env.port!)
}

describe('测试 Importer', () => {
  const importer = new Importer({
    rootPath: path.resolve(__dirname, '.temp'),
  })
  let readConfig: ExportConfig
  beforeAll(async () => {
    setupJoplinConfig()
    readConfig = await importer.readConfig()
  })

  async function clean() {
    // await Promise.all(
    //   (
    //     await PageUtil.pageToAllList(folderApi.list)
    //   ).map(({ id }) => folderApi.remove(id)),
    // )
    // await Promise.all(
    //   (
    //     await PageUtil.pageToAllList(noteApi.list)
    //   ).map(({ id }) => noteApi.remove(id)),
    // )
    // await Promise.all(
    //   (
    //     await PageUtil.pageToAllList(tagApi.list)
    //   ).map(({ id }) => tagApi.remove(id)),
    // )
    await Promise.all(
      (
        await PageUtil.pageToAllList(resourceApi.list)
      ).map(({ id }) => resourceApi.remove(id)),
    )
  }

  it('clean', async () => {
    await clean()
  }, 100_000)
  it('测试 readConfig', async () => {
    console.log(readConfig)
  })
  it('测试 listNote', async () => {
    const res = await importer.listNote(readConfig.noteList)
    console.log(res)
  })
  it('测试 importArchive', async () => {
    console.log('读取配置')
    const readConfig = await importer.readConfig()
    // console.log('写入目录')
    // await importer.writeFolder(readConfig.folderList)
    // console.log('写入笔记')
    // await importer.writeNote(await importer.listNote(readConfig.noteList))
    console.log('写入资源')
    await importer.writeResource(readConfig.resourceList)
    // console.log('写入标签')
    // await importer.writeTag(readConfig.tagList)
    // await importer.writeNoteTagRelation(readConfig.noteTagRelationList)
  }, 1000_000)
})
