import { folderApi, noteApi, PageUtil, resourceApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'
import { createTestResource } from './CreateTestResource'

describe('test JoplinApi', () => {
  const data = initTestFolderAndNote()
  describe('basic test', () => {
    it('test list', async () => {
      const res = await noteApi.list()
      console.log(res)
      expect(res.items.length).toBeGreaterThanOrEqual(0)
    })
    it('test get', async () => {
      const res = await noteApi.get(data.noteId)
      console.log(res)
      expect(res.title.startsWith('测试标题')).toBeTruthy()
    })
    it('test create', async () => {
      const res = await noteApi.create({
        title: '# test',
        body: '## 测试内容',
        parent_id: data.folderId,
      })
      console.log(res)
      expect(res.id).not.toBeNull()
      expect(res.parent_id).toBe(data.folderId)
      await noteApi.remove(res.id)
    })
    describe('test update', () => {
      it('basic example', async () => {
        const title = `# 测试笔记标题修改 ${Date.now()}`
        const body = `测试笔记内容修改 ${Date.now()}`
        const res = await noteApi.update({
          id: data.noteId,
          title,
          body,
        })
        console.log(res)
        expect(res.title).toBe(title)
        expect(res.body).toBe(body)
      })
      it('Test modification notes affect user_updated_time', async () => {
        const res1 = await noteApi.get(data.noteId, ['user_updated_time', 'updated_time'])
        await noteApi.update({
          id: data.noteId,
          title: Date.now().toString(),
        })
        const res2 = await noteApi.get(data.noteId, ['user_updated_time', 'updated_time'])
        expect(res1.user_updated_time).not.toBe(res2.user_updated_time)
        expect(res1.updated_time).not.toBe(res2.updated_time)
      })
    })
    it('test remove', async () => {
      const id = (
        await noteApi.create({
          title: '# 测试标题',
          body: '测试内容',
          parent_id: data.folderId,
        })
      ).id
      expect(await noteApi.get(id)).not.toBeFalsy()
      await noteApi.remove(id)
      await expect(noteApi.get(id)).rejects.toThrowError()
    })
    it('test tagsById', async () => {
      const tagList = await noteApi.tagsById(data.noteId)
      console.log(tagList)
      expect(tagList[0].id).toBe(data.tagId)
    })
    it('test resourcesById', async () => {
      const resource = await createTestResource()
      await noteApi.update({
        id: data.noteId,
        body: `[${resource.title}](:/${resource.id})`,
      })
      const resourceList = await noteApi.resourcesById(data.noteId)
      console.log(resourceList)
      expect(resourceList.length).toBe(1)
      await resourceApi.remove(resource.id)
    })
    it('test resourcesById by fields', async () => {
      const resourceRes = await createTestResource()
      const noteRes = await noteApi.get(data.noteId, ['id', 'title', 'body'])
      noteRes.body += `[res](:/${resourceRes.id})`
      await noteApi.update(noteRes)
      const [resource] = await noteApi.resourcesById(data.noteId, ['id', 'title', 'file_extension', 'size'])
      console.log(resource.file_extension)
      console.log(resource.size)
    })
  })
  describe('features test', () => {
    it('test rename', async () => {
      const title = `# 测试笔记标题修改 ${Date.now()}`
      const res = await noteApi.update({
        id: data.noteId,
        title,
      })
      console.log(res)
      expect(res.title).toBe(title)
    })
    it('test move', async () => {
      const createFolderRes = await folderApi.create({
        title: '测试目录 2',
        parent_id: '',
      })
      const res = await noteApi.update({
        id: data.noteId,
        parent_id: createFolderRes.id,
      })
      expect(res.parent_id).toBe(createFolderRes.id)
    })
    it('test page notes', async () => {
      const pageRes = await noteApi.list({
        page: 1_000,
        limit: 100,
      })
      expect(pageRes.has_more).toBeFalsy()
      expect(pageRes.items.length).toBe(0)
    })
    it('test to get all notes', async () => {
      const time1 = Date.now()
      const res = await PageUtil.pageToAllList(noteApi.list)
      const time2 = Date.now()
      console.log('time diff: ', time2 - time1, res.length)
    })
  })
  describe('fix test', () => {
    it('test get a not exist note', async () => {
      await expect(noteApi.get('not_exist_note_id')).rejects.toThrowError()
    })
  })
})
