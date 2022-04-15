import { config } from 'joplin-api'
import { WikiVuepressIntegrated } from '../WikiVuepressIntegrated'
import path from 'path'
import { Application } from '../../blog/Application'
import { GeneratorEventsImpl } from '../../blog/__tests__/util/GeneratorEventsImpl'

const joplinConfig: Pick<typeof config, 'token' | 'port'> = {
  token: process.env.token!,
  port: Number.parseInt(process.env.port!),
}
const wikiVuepressIntegrated = new WikiVuepressIntegrated({
  tag: 'wiki',
  rootPath: path.resolve(__dirname, 'temp/vuepress-example'),
})

describe('单独测试 WikiVuepressIntegrated', () => {
  config.token = joplinConfig.token
  config.port = joplinConfig.port
  it('测试 buildSidebar', async () => {
    const sidebar = await wikiVuepressIntegrated.buildSidebar()
    console.log(sidebar)
  })
  it('测试 init', async () => {
    await wikiVuepressIntegrated.init()
  })
})

it('集成 Application', async () => {
  const application = new Application(
    {
      token: joplinConfig.token,
      port: joplinConfig.port,
      tag: 'wiki',
    },
    wikiVuepressIntegrated,
  )
  const generatorEvents = new GeneratorEventsImpl()
  await application
    .gen()
    .on('readNoteAttachmentsAndTags', generatorEvents.readNoteAttachmentsAndTags)
    .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
    .on('writeNote', generatorEvents.writeNote)
    .on('copyResources', generatorEvents.copyResources)
})
