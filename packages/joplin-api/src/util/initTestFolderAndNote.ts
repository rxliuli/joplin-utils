import { afterEach, beforeEach } from 'vitest'
import { folderApi, noteApi, tagApi } from '..'

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
    data.tagId = (await tagApi.create({ title: `测试标签 ${dateStr + Math.random()}` })).id
    await tagApi.addTagByNoteId(data.tagId, data.noteId)
  })
  afterEach(async () => {
    await noteApi.remove(data.noteId)
    await tagApi.remove(data.tagId)
    await folderApi.remove(data.folderId)
  })
  return data
}
