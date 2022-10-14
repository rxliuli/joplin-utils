import { expect, it, describe } from 'vitest'
import { noteActionApi } from '../..'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

describe.skip('test ActionApi', () => {
  const data = initTestFolderAndNote()

  it.skip('test ActionApi.openAndWatch', async () => {
    const res = await noteActionApi.openAndWatch(data.noteId)
    console.log(res)
  })

  it('test ActionApi.stopWatching', async () => {
    const res = await noteActionApi.stopWatching(data.noteId)
    console.log(res)
  })

  it('test ActionApi.noteIsWatched', async () => {
    const res = await noteActionApi.noteIsWatched(data.noteId)
    console.log(res)
  })
  it('测试 watch', async () => {
    // await noteActionApi.watch(data.noteId)
    expect(await noteActionApi.isWatch(data.noteId)).toBeFalsy()
  })
})
