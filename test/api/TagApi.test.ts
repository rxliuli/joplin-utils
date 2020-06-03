import { tagApi } from '../../'

describe('test TagApi', () => {
  const tagId = 'f35f4a575cb54ba89027f86308c5bb8e'
  const noteId = '2538240060064c88baf9fdd60b1513d9'
  it('test list', async () => {
    const res = await tagApi.list()
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = await tagApi.get(tagId)
    console.log(res)
    expect(res.id).toBe(tagId)
  })
  it('test create', async () => {
    const title = 'test 2'
    const res = await tagApi.create({
      title,
    })
    console.log(res)
    expect(res.title).toBe(title)
  })
  it('test update', async () => {
    const title = `test ${new Date().toISOString()}`
    const res = await tagApi.update({
      id: tagId,
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

    const removeRes = await tagApi.remove(createRes.id)
    console.log(removeRes)
    await expect(tagApi.get(createRes.id)).rejects.not.toBeNull()
  })
  it('test notesByTagId', async () => {
    const res = await tagApi.notesByTagId(tagId)
    console.log(res)
    expect(res.length).toBeGreaterThan(0)
  })
  it('test updateNotesByTagId', async () => {
    const res = await tagApi.addTagByNoteId(tagId, noteId)
    console.log(res)
  })
  it('test removeNotesByNoteId', async () => {
    const res = await tagApi.removeTagByNoteId(tagId, noteId)
    console.log(res)
  })
})
