import { noteApi, noteExtApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test NoteExtApi', () => {
  const data = initTestFolderAndNote()
  it('test rename', async () => {
    const title = Date.now().toString()
    await noteExtApi.rename(data.noteId, title)
    expect((await noteApi.get(data.noteId, ['title'])).title).toBe(title)
  })
})
