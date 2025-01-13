import { expect, it, describe } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

describe('test NoteExtApi', () => {
  const data = initTestFolderAndNote()
  it('test rename', async () => {
    const title = Date.now().toString()
    await api.noteExt.rename(data.noteId, title)
    expect((await api.note.get(data.noteId, ['title'])).title).toBe(title)
  })
})
