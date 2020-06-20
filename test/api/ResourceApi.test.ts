import { resourceApi } from '../../src'
import { pathExistsSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'

describe.skip('test ResourceApi', () => {
  const id = 'af01a0f4d30d418f8cd9f31f174da28f'
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
  it('test resourcesByFileId', async () => {
    // TODO Test later
    const res = await resourceApi.fileByResourceId(id)
    console.log(res)
    const path = resolve(__dirname, '../resource/resourcesByFileId.txt')
    writeFileSync(path, res)
    expect(pathExistsSync(path)).toBeTruthy()
  })
})
