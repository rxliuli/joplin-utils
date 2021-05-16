import { config } from 'joplin-api'
import { Application } from '../../blog/Application'
import path from 'path'
import { WikiDocsifyIntegrated } from '../WikiDocsifyIntegrated'
import { GeneratorEventsImpl } from '../../blog/__tests__/util/GeneratorEventsImpl'

describe('测试 WikiDocsifyInterated', () => {
  const joplinConfig: Pick<typeof config, 'token' | 'port'> = {
    token: process.env.token!,
    port: Number.parseInt(process.env.port!),
  }
  const wikiDocsifyIntegrated = new WikiDocsifyIntegrated({
    tag: 'wiki',
    rootPath: path.resolve(__dirname, 'temp/docsify-example'),
  })

  describe('单独测试 WikiDocsifyIntegrated', () => {
    config.token = joplinConfig.token
    config.port = joplinConfig.port
    it('测试 buildSidebar', async () => {
      const sidebar = await wikiDocsifyIntegrated.buildSidebar()
      console.log(sidebar)
    })
    it('测试 init', async () => {
      await wikiDocsifyIntegrated.init()
    })
  })

  it('集成 Application', async () => {
    const application = new Application(
      {
        token: joplinConfig.token,
        port: joplinConfig.port,
        tag: 'wiki',
        joplinProfilePath: path.resolve(
          'C:/Users/rxliuli/.config/joplindev-desktop',
        ),
      },
      wikiDocsifyIntegrated,
    )
    const generatorEvents = new GeneratorEventsImpl()
    await application
      .gen()
      .on(
        'readNoteAttachmentsAndTags',
        generatorEvents.readNoteAttachmentsAndTags,
      )
      .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
      .on('writeNote', generatorEvents.writeNote)
      .on('copyResources', generatorEvents.copyResources)
  })
})
