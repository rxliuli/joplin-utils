import { expect, it, describe } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'
import { createTestResource } from './utils/CreateTestResource'
import { PageUtil } from '../../util/PageUtil'

const data = initTestFolderAndNote()

describe('basic test', () => {
  it('test list', async () => {
    const res = await api.note.list()
    expect(res.items).length(1)
  })
  it('test get', async () => {
    const res = await api.note.get(data.noteId)
    expect(res.title.startsWith('Test Note')).toBeTruthy()
  })
  it('test create', async () => {
    const res = await api.note.create({
      title: '# test',
      body: '## test content',
      parent_id: data.folderId,
    })
    expect(res.id).not.null
    expect(res.parent_id).eq(data.folderId)
    await api.note.remove(res.id)
  })
  describe('test update', () => {
    it('basic example', async () => {
      const title = `# Test Note Title Modify ${Date.now()}`
      const body = `Test Note Content Modify ${Date.now()}`
      const res = await api.note.update({
        id: data.noteId,
        title,
        body,
      })
      expect(res.title).toBe(title)
      expect(res.body).toBe(body)
    })
    it('Test modification notes affect user_updated_time', async () => {
      const res1 = await api.note.get(data.noteId, ['user_updated_time', 'updated_time'])
      await api.note.update({
        id: data.noteId,
        title: Date.now().toString(),
      })
      const res2 = await api.note.get(data.noteId, ['user_updated_time', 'updated_time'])
      expect(res1.user_updated_time).not.toBe(res2.user_updated_time)
      expect(res1.updated_time).not.toBe(res2.updated_time)
    })
  })
  it('test remove', async () => {
    const id = (
      await api.note.create({
        title: '# Test Note Title',
        body: 'Test Note Content',
        parent_id: data.folderId,
      })
    ).id
    expect(await api.note.get(id)).not.toBeFalsy()
    await api.note.remove(id)
    expect(await api.note.get(id)).not.toBeFalsy()
    await api.note.remove(id, true)
    await expect(api.note.get(id)).rejects.toThrowError()
  })
  it('test tagsById', async () => {
    const tagList = await api.note.tagsById(data.noteId)
    expect(tagList[0].id).toBe(data.tagId)
  })
  it('test resourcesById', async () => {
    const resource = await createTestResource()
    await api.note.update({
      id: data.noteId,
      body: `[${resource.title}](:/${resource.id})`,
    })
    const resourceList = await api.note.resourcesById(data.noteId)
    expect(resourceList.length).toBe(1)
    await api.resource.remove(resource.id)
  })
  it('test resourcesById by fields', async () => {
    const resourceRes = await createTestResource()
    const noteRes = await api.note.get(data.noteId, ['id', 'title', 'body'])
    noteRes.body += `[res](:/${resourceRes.id})`
    await api.note.update(noteRes)
    const [resource] = await api.note.resourcesById(data.noteId, ['id', 'title', 'file_extension', 'size'])
    expect(resource.file_extension).toBe('png')
  })
})
describe('features test', () => {
  it('test rename', async () => {
    const title = `# Test Note Title Modify ${Date.now()}`
    const res = await api.note.update({
      id: data.noteId,
      title,
    })
    expect(res.title).toBe(title)
  })
  it('test move', async () => {
    const createFolderRes = await api.folder.create({
      title: 'Test Folder 2',
      parent_id: '',
    })
    const res = await api.note.update({
      id: data.noteId,
      parent_id: createFolderRes.id,
    })
    expect(res.parent_id).toBe(createFolderRes.id)
  })
  it('test page notes', async () => {
    const pageRes = await api.note.list({
      page: 1_000,
      limit: 100,
    })
    expect(pageRes.has_more).toBeFalsy()
    expect(pageRes.items.length).toBe(0)
  })
  it('test to get all notes', async () => {
    const time1 = Date.now()
    const res = await PageUtil.pageToAllList(api.note.list)
    const time2 = Date.now()
    expect(time2 - time1).lessThan(1000)
  })
})
describe('fix test', () => {
  it('test get a not exist note', async () => {
    await expect(api.note.get('not_exist_note_id')).rejects.toThrowError()
  })
})
