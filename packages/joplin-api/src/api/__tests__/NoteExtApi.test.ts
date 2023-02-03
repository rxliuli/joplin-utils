import { expect, it, describe } from 'vitest'
import { noteApi, noteExtApi } from '../..'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

describe('test NoteExtApi', () => {
  const data = initTestFolderAndNote()
  it('test rename', async () => {
    const title = Date.now().toString()
    await noteExtApi.rename(data.noteId, title)
    expect((await noteApi.get(data.noteId, ['title'])).title).toBe(title)
  })
})
