import { resourceApi } from '../../src'
import { pathExistsSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'

describe('test ResourceApi', () => {
  const id = 'd2baabaeebe54e87bf7571d6eff230e9'
  it('test list', async () => {
    const res = await resourceApi.list()
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await resourceApi.get(id)
    console.log(res)
    expect(res.id).toBe(id)
  })
  it('test create', async () => {
    // TODO Test later
  })
  it('test update', () => {
    // TODO Test later
  })
  it('test remove ', () => {
    // TODO Test later
  })
  it('test fileByResourceId', async () => {
    const res = await resourceApi.fileByResourceId(id)
    console.log(typeof res)
    const path = resolve(__dirname, '../resource/resourcesByFileId.png')
    writeFileSync(path, res)
    expect(pathExistsSync(path)).toBeTruthy()
  })
})
