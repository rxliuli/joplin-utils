import { fileURLToPath } from 'url'
import { expect, it, describe } from 'vitest'
import { config } from 'joplin-api'
import { WikiVuepressIntegrated } from '../WikiVuepressIntegrated'
import path from 'path'
import { Application } from '../../blog/Application'
import { GeneratorEventsImpl } from '../../blog/__tests__/util/GeneratorEventsImpl'

const wikiVuepressIntegrated = new WikiVuepressIntegrated({
  tag: 'wiki',
  rootPath: path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'temp/vuepress-example'),
})

describe('单独测试 WikiVuepressIntegrated', () => {
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
      token: config.token,
      baseUrl: config.baseUrl,
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
