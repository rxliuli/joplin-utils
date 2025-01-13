import { expect, it, describe } from 'vitest'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

describe.skip('test ActionApi', () => {
  const data = initTestFolderAndNote()

  it.skip('test ActionApi.openAndWatch', async () => {
    const res = await api.noteAction.openAndWatch(data.noteId)
    console.log(res)
  })

  it('test ActionApi.stopWatching', async () => {
    const res = await api.noteAction.stopWatching(data.noteId)
    console.log(res)
  })

  it('test ActionApi.isWatch', async () => {
    const res = await api.noteAction.isWatch(data.noteId)
    console.log(res)
  })
  it('测试 watch', async () => {
    // await noteActionApi.watch(data.noteId)
    expect(await api.noteAction.isWatch(data.noteId)).toBeFalsy()
  })
})
