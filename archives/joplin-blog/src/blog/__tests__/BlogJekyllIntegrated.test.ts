import { fileURLToPath } from 'url'
import { expect, it, describe, beforeEach } from 'vitest'
import { Application } from '../Application'
import path from 'path'
import { GeneratorEventsImpl } from './util/GeneratorEventsImpl'
import { config } from 'joplin-api'
import { BlogJekyllIntegrated } from '../BlogJekyllIntegrated'
import { mkdirp, remove } from '@liuli-util/fs-extra'
import { cacheCommanderProgram } from '../../cli/CacheCommander'

describe('测试 BlogJekyllIntegrated', () => {
  const rootPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), 'temp/jekyll-example')
  beforeEach(async () => {
    await remove(rootPath)
    await mkdirp(rootPath)
    await cacheCommanderProgram.init()
  })
  it('基本示例', async () => {
    const application = new Application(
      {
        token: config.token,
        baseUrl: config.baseUrl,
        tag: 'blog',
      },
      new BlogJekyllIntegrated({
        tag: 'blog',
        rootPath: rootPath,
      }),
    )

    const generatorEvents = new GeneratorEventsImpl()
    await application
      .gen()
      .on('readNoteAttachmentsAndTags', generatorEvents.readNoteAttachmentsAndTags)
      .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
      .on('writeNote', generatorEvents.writeNote)
      .on('copyResources', generatorEvents.copyResources)
  })
})
