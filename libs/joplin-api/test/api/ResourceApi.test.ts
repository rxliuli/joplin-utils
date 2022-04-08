import { resourceApi } from '../../src'
import { createReadStream, pathExistsSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import axios from 'axios'
import fetch from 'node-fetch'
import { readFileSync } from 'fs'
import { createTestResource } from './CreateTestResource'
import { ajax } from '../../dist'

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
  it('test update', async () => {
    const title = `new title ${Date.now()}`
    const updateRes = await resourceApi.update({ id, title })
    console.log(updateRes)
    expect(updateRes.title).toBe(title)
  })
  it.skip('test remove ', async () => {
    await resourceApi.remove(id)
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
