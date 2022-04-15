import { config } from 'joplin-api'
import { Application } from '../../blog/Application'
import path from 'path'
import { buildList, WikiDocsifyIntegrated } from '../WikiDocsifyIntegrated'
import { GeneratorEventsImpl } from '../../blog/__tests__/util/GeneratorEventsImpl'
import { ListNode } from '../../util/JoplinMarkdownUtil'

it('测试 buildList', () => {
  const nodeList = [
    {
      id: '1',
      title: '1',
      children: [
        {
          id: '2',
          title: '2',
        },
      ],
    },
    {
      id: '3',
      title: '3',
    },
  ] as ListNode[]

  const res = buildList(nodeList, (id) => `/p/${id}`)
  console.log(res)
})

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
    },
    wikiDocsifyIntegrated,
  )
  const generatorEvents = new GeneratorEventsImpl()
  await application
    .gen()
    .on('readNoteAttachmentsAndTags', generatorEvents.readNoteAttachmentsAndTags)
    .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
    .on('writeNote', generatorEvents.writeNote)
    .on('copyResources', generatorEvents.copyResources)
})
