import { noteApi, tagApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test TagApi', () => {
  const data = initTestFolderAndNote()
  it('test list', async () => {
    const res = await tagApi.list()
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await tagApi.get(data.tagId)
    expect(res.id).toBe(data.tagId)
  })
  it('test create', async () => {
    const title = `test ${new Date().toLocaleString()}`
    const res = await tagApi.create({
      title,
    })
    expect(res.title.toLowerCase()).toBe(title.toLowerCase())
  })
  it('test update', async () => {
    const title = `test ${new Date().toISOString()}`
    const res = await tagApi.update({
      id: data.tagId,
      title,
    })
    console.log(res)
    expect(res.title.toLocaleLowerCase()).toBe(title.toLocaleLowerCase())
  })
  it('test remove', async () => {
    const createRes = await tagApi.create({
      title: `# test ${new Date().toISOString()}`,
    })
    await expect(tagApi.get(createRes.id)).resolves.not.toBeNull()

    await tagApi.remove(createRes.id)
    await expect(tagApi.get(createRes.id)).rejects.not.toBeNull()
  })
  it('test notesByTagId', async () => {
    const res = await tagApi.notesByTagId(data.tagId)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test updateNotesByTagId', async () => {
    await tagApi.addTagByNoteId(data.tagId, data.noteId)
    const res = await noteApi.tagsById(data.noteId)
    expect(res[0].id).toBe(data.tagId)
  })
  it('test removeNotesByNoteId', async () => {
    await tagApi.removeTagByNoteId(data.tagId, data.noteId)
    const res = await noteApi.tagsById(data.noteId)
    expect(res.length).toBe(0)
  })
})
