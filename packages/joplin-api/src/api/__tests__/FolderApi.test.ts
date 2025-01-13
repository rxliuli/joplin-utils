import { expect, it, describe } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

const data = initTestFolderAndNote()
describe('basic test', () => {
  it('test list', async () => {
    const res = await api.folder.list({ limit: 1 })
    expect(res.items).length(1)
  })
  it('test get', async () => {
    const res = await api.folder.get(data.folderId)
    expect(res.id).toBe(data.folderId)
  })
  it('test create', async () => {
    const res = await api.folder.create({
      title: '# test',
      parent_id: data.folderId,
    })
    expect(res.parent_id).toBe(data.folderId)
    await api.folder.remove(res.id)
  })
  it('test update', async () => {
    const title = `测试 ${Date.now()}`
    const res = await api.folder.update({
      id: data.folderId,
      title,
    })
    expect(res.title).toBe(title)
  })
  it('test remove', async () => {
    const createRes = await api.folder.create({
      title: '# test',
      parent_id: data.folderId,
    })
    expect(await api.folder.get(createRes.id)).not.toBeNull()
    await api.folder.remove(createRes.id)
    expect(await api.folder.get(createRes.id)).not.toBeNull()
    await api.folder.remove(createRes.id, true)
    await expect(api.folder.get(createRes.id)).rejects.not.toBeNull()
  })
  it('test notesByFolderId', async () => {
    await api.note.create({
      title: '# Test Note',
      body: 'Test Content',
      parent_id: data.folderId,
    })
    const res = await api.folder.notesByFolderId(data.folderId, ['id', 'title', 'is_todo', 'todo_completed'])
    expect(res.length).toBeGreaterThan(0)
  }, 10_000)
})
describe('features test', () => {
  it('create folder for root', async () => {
    const res = await api.folder.create({
      title: 'Test Create Folder For Root',
    })
    await api.folder.remove(res.id)
  })
  it.skip('test move', async () => {
    //TODO 目前不能将 parent_id 指向子级，否则会出现致命性的错误
    const createRes = await api.folder.create({
      title: 'Test Create Folder For Root',
      parent_id: '',
    })
    const res = await api.folder.update({
      id: createRes.id,
      parent_id: data.folderId,
    })
    expect(res.parent_id).toBe(data.folderId)
    await api.folder.remove(createRes.id)
  })
  it('test recursive get folder and note', async function () {
    const folderList = await api.folder.listAll()
    expect(folderList.length).toBeGreaterThan(0)
  })
})
