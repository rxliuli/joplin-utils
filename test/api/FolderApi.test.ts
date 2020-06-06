import { folderApi } from '../../'
import { setupTestEnv } from '../setupTestEnv'

describe('test FolderApi', () => {
  beforeAll(() => {
    setupTestEnv()
  })
  const id = '1dbc83a4ffae4cc8911534d1d013ae72'
  describe('basic test', () => {
    it('test list', async () => {
      const res = await folderApi.list()
      console.log(JSON.stringify(res, null, 2))
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
    it('test update', async () => {
      const title = '测试'
      const res = await folderApi.update({
        id: '03ec0a05483d4132bec6a56b6a6f51af',
        title,
      })
      console.log(res)
      expect(res.title).toBe(title)
    })
    it('test remove', async () => {
      const createRes = await folderApi.create({
        title: '# test',
        parent_id: id,
      })
      await expect(folderApi.get(createRes.id)).resolves.not.toBeNull()

      const removeRes = await folderApi.remove(createRes.id)
      console.log(removeRes)
      await expect(folderApi.get(createRes.id)).rejects.not.toBeNull()
    })
    it('test notesByFolderId', async () => {
      const res = await folderApi.notesByFolderId(id)
      console.log(res)
      expect(res.length).toBeGreaterThan(0)
    })
  })
  describe('features test', () => {
    it('create folder for root', async () => {
      const res = await folderApi.create({
        title: '测试从根目录创建',
        parent_id: '',
      })
      console.log(res)
    })
    it.skip('test move', async () => {
      //目前不能将 parent_id 指向子级，否则会出现致命性的错误
      const parent_id = 'd6dea1e4297c480a9f2501818a64e1a1'
      const res = await folderApi.update({
        id,
        parent_id,
      })
      console.log(res)
      expect(res.parent_id).toBe(parent_id)
    })
  })
})
