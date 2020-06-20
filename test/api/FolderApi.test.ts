import { folderApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test FolderApi', () => {
  const data = initTestFolderAndNote()
  describe('basic test', () => {
    it('test list', async () => {
      const res = await folderApi.list()
      console.log(JSON.stringify(res, null, 2))
      expect(res.length).toBeGreaterThan(0)
    })
    it('test get', async () => {
      const res = await folderApi.get(data.folderId)
      expect(res.id).toBe(data.folderId)
    })
    it('test create', async () => {
      const res = await folderApi.create({
        title: '# test',
        parent_id: data.folderId,
      })
      expect(res.parent_id).toBe(data.folderId)
      await folderApi.remove(res.id)
    })
    it('test update', async () => {
      const title = `测试 ${Date.now()}`
      const res = await folderApi.update({
        id: data.folderId,
        title,
      })
      expect(res.title).toBe(title)
    })
    it('test remove', async () => {
      const createRes = await folderApi.create({
        title: '# test',
        parent_id: data.folderId,
      })
      await expect(folderApi.get(createRes.id)).resolves.not.toBeNull()

      await folderApi.remove(createRes.id)
      await expect(folderApi.get(createRes.id)).rejects.not.toBeNull()
    })
    it('test notesByFolderId', async () => {
      const res = await folderApi.notesByFolderId(data.folderId)
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
      await folderApi.remove(res.id)
    })
    it('test move', async () => {
      //TODO 目前不能将 parent_id 指向子级，否则会出现致命性的错误
      const createRes = await folderApi.create({
        title: '测试从根目录创建',
        parent_id: '',
      })
      const res = await folderApi.update({
        id: createRes.id,
        parent_id: data.folderId,
      })
      expect(res.parent_id).toBe(data.folderId)
      await folderApi.remove(createRes.id)
    })
  })
})
