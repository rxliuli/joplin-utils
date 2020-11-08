import { folderApi, noteApi, tagApi } from '../../src'

export function initTestFolderAndNote() {
  const data = {
    folderId: '',
    noteId: '',
    tagId: '',
  }
  beforeEach(async () => {
    const dateStr = new Date().toLocaleString()
    data.folderId = (
      await folderApi.create({
        id: data.folderId,
        title: `测试目录 ${dateStr}`,
        parent_id: '',
      })
    ).id
    data.noteId = (
      await noteApi.create({
        title: `测试标题 ${dateStr}`,
        body: '',
        parent_id: data.folderId,
      })
    ).id
    data.tagId = (
      await tagApi.create({ title: `测试标签 ${dateStr + Math.random()}` })
    ).id
    await tagApi.addTagByNoteId(data.tagId, data.noteId)
  })
  afterEach(async () => {
    await noteApi.remove(data.noteId)
    await tagApi.remove(data.tagId)
    await folderApi.remove(data.folderId)

    // await Promise.all(
    //   (await folderApi.list()).items.map(({ id }) => folderApi.remove(id)),
    // )
    // await Promise.all(
    //   (await noteApi.list()).items.map(({ id }) => noteApi.remove(id)),
    // )
    // await Promise.all((await tagApi.list()).items.map(({ id }) => tagApi.remove(id)))
  })
  return data
}
