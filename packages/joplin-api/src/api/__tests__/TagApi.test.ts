import { expect, it } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

const data = initTestFolderAndNote()
it('test list', async () => {
  const res = await api.tag.list()
  expect(res.items.length).toBeGreaterThan(0)
})
it('test get', async () => {
  const res = await api.tag.get(data.tagId)
  expect(res.id).toBe(data.tagId)
})
it('test create', async () => {
  const title = `test ${new Date().toLocaleString()}`
  const res = await api.tag.create({
    title,
  })
  expect(res.title.toLowerCase()).toBe(title.toLowerCase())
})
it('test update', async () => {
  const title = `test ${new Date().toISOString()}`
  const res = await api.tag.update({
    id: data.tagId,
    title,
  })
  expect(res.title.toLocaleLowerCase()).toBe(title.toLocaleLowerCase())
})
it('test remove', async () => {
  const createRes = await api.tag.create({
    title: `# test ${new Date().toISOString()}`,
  })
  await expect(api.tag.get(createRes.id)).resolves.not.toBeNull()

  await api.tag.remove(createRes.id)
  await expect(api.tag.get(createRes.id)).rejects.not.toBeNull()
})
it('test notesByTagId', async () => {
  const res = await api.tag.notesByTagId({ id: data.tagId })
  expect(res.items.length).toBeGreaterThan(0)
})
it.skip('test updateNotesByTagId', async () => {
  await api.tag.addTagByNoteId(data.tagId, data.noteId)
  const res = await api.note.tagsById(data.noteId)
  expect(res[0].id).toBe(data.tagId)
})
it.skip('test removeNotesByNoteId', async () => {
  await api.tag.removeTagByNoteId(data.tagId, data.noteId)
  const res = await api.note.tagsById(data.noteId)
  expect(res.length).toBe(0)
})
