import { folderApi, noteApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test FolderApi', () => {
  const data = initTestFolderAndNote()
  describe('basic test', () => {
    it('test list', async () => {
      const res = await folderApi.list({
        fields: ['note_count'] as any,
        limit: 1,
      })
      console.log(res)
      expect(res.items.length).toBe(1)
    })
    it('test get', async () => {
      const res = await folderApi.get(data.folderId)
      console.log(res)
      expect(res.id).toBe(data.folderId)
    })
    it('test create', async () => {
      const res = await folderApi.create({
        title: '# test',
        parent_id: data.folderId,
      })
      console.log(res)
      expect(res.parent_id).toBe(data.folderId)
      await folderApi.remove(res.id)
    })
    it('test update', async () => {
      const title = `测试 ${Date.now()}`
      const res = await folderApi.update({
        id: data.folderId,
        title,
      })
      console.log(res)
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
      await Promise.all(
        Array(200)
          .fill(0)
          .map(() =>
            noteApi.create({
              title: '# 测试标题',
              body: '测试内容',
              parent_id: data.folderId,
            }),
          ),
      )
      const res = await folderApi.notesByFolderId(data.folderId, [
        'id',
        'title',
        'is_todo',
        'todo_completed',
      ])
      console.log(res)
      expect(res.length).toBeGreaterThan(0)
    }, 10_000)
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
    it('测试递归获取目录及笔记', async function () {
      const folderList = await folderApi.listAll()
      console.log(JSON.stringify(folderList, null, 2))
      expect(folderList.length).toBeGreaterThan(0)
    })
  })
})
