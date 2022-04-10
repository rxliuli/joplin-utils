import { resourceApi } from '../../src'
import { createReadStream, mkdirp, pathExistsSync, remove, writeFile, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { createTestResource } from './CreateTestResource'
import * as path from 'path'

describe('test ResourceApi', () => {
  let id: string
  beforeAll(async () => {
    id = (await createTestResource()).id
  })
  afterAll(async () => {
    await resourceApi.remove(id)
  })
  it('test list', async () => {
    const res = await resourceApi.list({ fields: ['id', 'title'] })
    console.log(res)
    expect(res.items.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await resourceApi.get(id)
    console.log(res)
    expect(res.id).toBe(id)
  })
  /**
   * TODO 一个官方未修复的 bug，参考：https://github.com/laurent22/joplin/issues/4575
   */
  it.skip('test get filename', async () => {
    const res = await resourceApi.get(id, ['id', 'filename'])
    console.log(res)
    expect(res.filename).not.toBe('')
  })

  describe('diff fetch and axios', () => {
    const path = resolve(__dirname, '../resource/resourcesByFileId.png')
    it('test create', async () => {
      const title = 'image title'
      const json = await resourceApi.create({
        title,
        data: createReadStream(path),
      })
      expect(json.title).toBe(title)
    })
  })
  describe('test update', () => {
    const tempPath = path.resolve(__dirname, '.temp')
    beforeEach(async () => {
      await remove(tempPath)
      await mkdirp(tempPath)
    })
    it('basic example', async () => {
      const title = `new title ${Date.now()}`
      const updateRes = await resourceApi.update({ id, title })
      expect(updateRes.title).toBe(title)
    })
    it('update file', async () => {
      const content = 'test'
      const txtPath = path.resolve(tempPath, 'test.txt')
      await writeFile(txtPath, content)
      await resourceApi.update({ id, data: createReadStream(txtPath) })
      const res = await resourceApi.fileByResourceId(id)
      expect(res.toString()).toBe(content)
    })
    it('update properties and file', async () => {
      const title = `new title ${Date.now()}`
      const content = 'test'
      const txtPath = path.resolve(tempPath, 'test.txt')
      await writeFile(txtPath, content)
      const updateRes = await resourceApi.update({ id, title, data: createReadStream(txtPath) })
      expect(updateRes.title).toBe(title)
      const res = await resourceApi.fileByResourceId(id)
      expect(res.toString()).toBe(content)
    })
  })
  it('test remove ', async () => {
    const id = (await createTestResource()).id
    await resourceApi.remove(id)
    await expect(resourceApi.get(id)).rejects.toThrowError()
  })
  it('test fileByResourceId', async () => {
    const res = await resourceApi.fileByResourceId(id)
    console.log(typeof res)
    const path = resolve(__dirname, '../resource/resourcesByFileId.png')
    writeFileSync(path, res)
    expect(pathExistsSync(path)).toBeTruthy()
  })
  it('测试获取附件资源的大小', async () => {
    console.log(await resourceApi.get(id))
    console.log(await resourceApi.get(id, ['id', 'title', 'size']))
  })
})
