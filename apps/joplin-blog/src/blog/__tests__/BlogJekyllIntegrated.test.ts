import { Application } from '../Application'
import path from 'path'
import { GeneratorEventsImpl } from './util/GeneratorEventsImpl'
import { config } from 'joplin-api'
import { BlogJekyllIntegrated } from '../BlogJekyllIntegrated'
import { mkdirp, remove } from 'fs-extra'
import { cacheCommanderProgram } from '../../cli/CacheCommander'

describe('测试 BlogJekyllIntegrated', () => {
  const joplinConfig: typeof config = {
    token: process.env.token!,
    port: Number.parseInt(process.env.port!),
  }
  const rootPath = path.resolve(__dirname, 'temp/jekyll-example')
  beforeEach(async () => {
    await remove(rootPath)
    await mkdirp(rootPath)
    await cacheCommanderProgram.init()
  })
  it('基本示例', async () => {
    const application = new Application(
      {
        token: joplinConfig.token,
        port: joplinConfig.port,
        tag: 'blog',
        joplinProfilePath: path.resolve(
          'C:/Users/rxliuli/.config/joplindev-desktop',
        ),
      },
      new BlogJekyllIntegrated({
        tag: 'blog',
        rootPath: rootPath,
      }),
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
