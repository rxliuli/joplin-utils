import { Exporter } from '../Exporter'
import path from 'path'
import { mkdirp, remove } from 'fs-extra'
import { setupJoplinConfig } from './Importer.test'

describe('测试 Export', () => {
  const exporter = new Exporter({
    rootPath: path.resolve(__dirname, '.temp'),
  })
  beforeAll(async () => {
    setupJoplinConfig()
    await remove(exporter.config.rootPath)
    await mkdirp(exporter.config.rootPath)
  })
  it('测试 folder', async () => {
    const folderList = await exporter.listFolder()
    console.log('folderList: ', folderList)
    await exporter.writeFolder(folderList)
  })
  it('测试 notes', async () => {
    const folderList = await exporter.listFolder()
    const noteList = await exporter.listNote(folderList)
    console.log(
      'noteList: ',
      noteList.map((item) => item.filePath),
    )
    await exporter.writeNote(noteList)
  })
  it('测试 resource', async () => {
    const resourceList = await exporter.listResource()
    console.log('resourceList: ', resourceList)
    await exporter.writeResource(resourceList)
  })

  it('测试 tag', async () => {
    const { tagList, noteTagRelationList } = await exporter.tag()
    console.log('tagList: ', tagList, noteTagRelationList)
  })

  it('测试 export', async () => {
    await exporter.export()
  })
})
