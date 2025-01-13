import { expect, it, describe, beforeAll, afterAll, beforeEach } from 'vitest'
import { mkdirp, pathExists, readFile, remove, stat, writeFile, open, close } from 'fs-extra'
import { createTestResource } from './utils/CreateTestResource'
import path from 'path'

let id: string
beforeAll(async () => {
  id = (await createTestResource()).id
})
afterAll(async () => {
  await api.resource.remove(id)
})
const tempPath = path.resolve(__dirname, '.temp')
beforeEach(async () => {
  await remove(tempPath)
  await mkdirp(tempPath)
})
it('test list', async () => {
  const res = await api.resource.list({ fields: ['id', 'title'] })
  expect(res.items.length).toBeGreaterThan(0)
})
it('test get', async () => {
  const res = await api.resource.get(id)
  expect(res.id).toBe(id)
})
/**
 * A bug in Joplin, reference: https://github.com/laurent22/joplin/issues/4575
 */
it.skip('test get filename', async () => {
  const res = await api.resource.get(id, ['id', 'filename'])
  expect(res.filename).empty
})

const resourcePath = path.resolve(__dirname, './assets/resourcesByFileId.png')
it('test create', async () => {
  const title = 'image title'
  const r = await api.resource.create({
    title,
    data: new Blob([await readFile(resourcePath)]),
  })
  expect(r.title).toBe(title)
})
it('test create empty file', async () => {
  const fsPath = path.resolve(tempPath, 'test.km.svg')
  const handle = await open(fsPath, 'w')
  try {
    expect(await pathExists(fsPath)).toBeTruthy()
    const r = await api.resource.create({
      title: path.basename(fsPath),
      data: new Blob([await readFile(fsPath)]),
      filename: path.basename(fsPath),
    })
    expect(r.mime).eq('image/svg+xml')
    expect(r.file_extension).eq('svg')
  } finally {
    await close(handle)
  }
})
it('create by buffer', async () => {
  const title = 'image title'
  const tempPath = path.resolve(__dirname, '.temp')
  await mkdirp(tempPath)
  const fsPath = path.resolve(tempPath, path.basename(resourcePath))
  await writeFile(fsPath, await readFile(resourcePath))
  const json = await api.resource.create({
    title,
    data: new Blob([await readFile(fsPath)]),
  })
  expect(json.title).eq(title)
})
describe('test update', () => {
  it('basic example', async () => {
    const title = `new title ${Date.now()}`
    const updateRes = await api.resource.update({ id, title })
    expect(updateRes.title).toBe(title)
  })
  it('update file', async () => {
    const content = 'test'
    const txtPath = path.resolve(tempPath, 'test.txt')
    await writeFile(txtPath, content)
    await api.resource.update({ id, data: new Blob([await readFile(txtPath)]) })
    const res = await api.resource.fileByResourceId(id)
    expect(res.toString()).toBe(content)
  })
  it('update properties and file', async () => {
    const title = `new title ${Date.now()}`
    const content = 'test'
    const txtPath = path.resolve(tempPath, 'test.txt')
    await writeFile(txtPath, content)
    const updateRes = await api.resource.update({ id, title, data: new Blob([await readFile(txtPath)]) })
    expect(updateRes.title).toBe(title)
    const res = await api.resource.fileByResourceId(id)
    expect(res.toString()).toBe(content)
  })
  it('update file only', async () => {
    const content = 'test'
    const txtPath = path.resolve(tempPath, 'test.txt')
    await writeFile(txtPath, content)
    const { title } = await api.resource.get(id)
    await api.resource.update({ id, data: new Blob([await readFile(txtPath)]) })
    const res = await api.resource.fileByResourceId(id)
    expect(res.toString()).toBe(content)
    expect((await api.resource.get(id)).title).toBe(title)
  })
})
/**
 * A known bug in Joplin, reference: https://discourse.joplinapp.org/t/pre-release-v2-8-is-now-available-updated-14-april/25158/10?u=rxliuli
 */
it.skip('test remove ', async () => {
  const id = (await createTestResource()).id
  await api.resource.remove(id)
  await expect(api.resource.get(id)).rejects.toThrowError()
})
it('test fileByResourceId', async () => {
  const res = await api.resource.fileByResourceId(id)
  const fsPath = path.resolve(tempPath, 'resourcesByFileId.png')
  await writeFile(fsPath, res)
  expect(await pathExists(fsPath)).toBeTruthy()
})
it('test to get the size of the attachment resource', async () => {
  const id = (await createTestResource()).id
  const res = await api.resource.get(id, ['id', 'title', 'size'])
  const stats = await stat(path.resolve(__dirname, './assets/resourcesByFileId.png'))
  expect(res.size).toEqual(stats.size)
})
