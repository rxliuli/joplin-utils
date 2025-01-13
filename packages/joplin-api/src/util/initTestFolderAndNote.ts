import { beforeEach } from 'vitest'

export function initTestFolderAndNote() {
  const data = {
    folderId: '',
    noteId: '',
    tagId: '',
  }
  beforeEach(async () => {
    if (data.folderId) {
      await api.note.remove(data.noteId)
      data.folderId = ''
    }
    if (data.noteId) {
      await api.note.remove(data.noteId)
      data.noteId = ''
    }
    if (data.tagId) {
      await api.tag.remove(data.tagId)
      data.tagId = ''
    }
    const dateStr = new Date().toLocaleString()
    data.folderId = (
      await api.folder.create({
        id: data.folderId,
        title: `Test Folder ${dateStr}`,
        parent_id: '',
      })
    ).id
    data.noteId = (
      await api.note.create({
        title: `Test Note ${dateStr}`,
        body: '',
        parent_id: data.folderId,
      })
    ).id
    data.tagId = (await api.tag.create({ title: `Test Tag ${dateStr + Math.random()}` })).id
    await api.tag.addTagByNoteId(data.tagId, data.noteId)
  })
  return data
}
