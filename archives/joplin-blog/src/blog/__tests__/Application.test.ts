import { fileURLToPath } from 'url'
import { expect, it, beforeAll } from 'vitest'
import { Application } from '../Application'
import path from 'path'
import { mkdirp, pathExists, readdir, remove, writeFile } from '@liuli-util/fs-extra'
import { config, noteApi } from 'joplin-api'
import { BlogHexoIntegrated } from '../BlogHexoIntegrated'
import { BlogVuepressIntegrated } from '../BlogVuepressIntegrated'
import { GeneratorEventsImpl } from './util/GeneratorEventsImpl'

const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp')

beforeAll(async () => {
  await remove(tempPath)
  await mkdirp(tempPath)
})

it.skip('单独测试 HexoIntegrated', async () => {
  const hexoHandler = new BlogHexoIntegrated({
    tag: 'blog',
    rootPath: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp/hexo-example'),
  })
  const noteId = '21a3eba7f4b445ccbc123bf52831d387'
  const { user_created_time, user_updated_time, ...note } = await noteApi.get(noteId, [
    'id',
    'title',
    'body',
    'user_created_time',
    'user_updated_time',
  ])
  const tags = await noteApi.tagsById(noteId)
  const resources = await noteApi.resourcesById(noteId, ['id', 'title', 'file_extension', 'user_updated_time'])
  const res = hexoHandler.parse({
    ...note,
    createdTime: user_created_time,
    updatedTime: user_updated_time,
    tags,
    resources,
  })
  await writeFile(path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp/test.md'), res)
})

it('集成 HexoIntegrated', async () => {
  const app = new Application(
    { token: config.token, baseUrl: config.baseUrl, tag: 'blog' },
    new BlogHexoIntegrated({
      tag: 'blog',
      rootPath: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp/hexo-example'),
    }),
  )

  const generatorEvents = new GeneratorEventsImpl()
  await app
    .gen()
    .on('readNoteAttachmentsAndTags', generatorEvents.readNoteAttachmentsAndTags)
    .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
    .on('writeNote', generatorEvents.writeNote)
    .on('copyResources', generatorEvents.copyResources)
})

it.skip('集成 VuepressIntegrated', async () => {
  const app = new Application(
    {
      token: config.token,
      baseUrl: config.baseUrl,
      tag: 'blog',
    },
    new BlogVuepressIntegrated({
      rootPath: path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp/vuepress-example'),
      tag: 'blog',
    }),
  )

  const generatorEvents = new GeneratorEventsImpl()
  await app
    .gen()
    .on('readNoteAttachmentsAndTags', generatorEvents.readNoteAttachmentsAndTags)
    .on('parseAndWriteNotes', generatorEvents.parseAndWriteNotes)
    .on('writeNote', generatorEvents.writeNote)
    .on('copyResources', generatorEvents.copyResources)
}, 100_000)
