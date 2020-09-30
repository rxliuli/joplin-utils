import { actionApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test ActionApi', () => {
  const data = initTestFolderAndNote()

  it.skip('test ActionApi.openAndWatch', async () => {
    const res = await actionApi.openAndWatch(data.noteId)
    console.log(res)
  })

  it('test ActionApi.stopWatching', async () => {
    const res = await actionApi.stopWatching(data.noteId)
    console.log(res)
  })

  it('test ActionApi.noteIsWatched', async () => {
    const res = await actionApi.noteIsWatched(data.noteId)
    console.log(res)
  })
})
