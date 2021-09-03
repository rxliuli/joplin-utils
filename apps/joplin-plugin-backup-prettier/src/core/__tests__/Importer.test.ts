import { Importer } from '../Importer'
import path from 'path'
import { config, folderApi, noteApi, tagApi } from 'joplin-api'
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
    await Promise.all(
      (await folderApi.list()).items.map(({ id }) => folderApi.remove(id)),
    )
    await Promise.all(
      (await noteApi.list()).items.map(({ id }) => noteApi.remove(id)),
    )
    await Promise.all(
      (await tagApi.list()).items.map(({ id }) => tagApi.remove(id)),
    )
    readConfig = await importer.readConfig()
  })
  it('测试 readConfig', async () => {
    console.log(readConfig)
  })
  it('测试 listNote', async () => {
    const res = await importer.listNote(readConfig.noteList)
    console.log(res)
  })
  it('测试 importArchive', async () => {
    await importer.importArchive()
  })
})
