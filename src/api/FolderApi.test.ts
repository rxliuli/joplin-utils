import { folderApi } from '../'
import { setupTestEnv } from '../../test/SetupTestEnv'

describe('test FolderApi', () => {
  beforeAll(() => {
    setupTestEnv()
  })
  const id = '1dbc83a4ffae4cc8911534d1d013ae72'
  it('test list', async () => {
    const res = await folderApi.list()
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await folderApi.get(id)
    console.log(res)
    expect(res.id).not.toBeUndefined()
  })
  it('test create', async () => {
    const res = await folderApi.create({
      title: '# test',
      parent_id: id,
    })
    console.log(res)
    expect(res.parent_id).toBe(id)
  })
  it('test update', () => {})
})
