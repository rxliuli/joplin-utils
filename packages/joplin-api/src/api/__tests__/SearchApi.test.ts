import { expect, it, describe } from 'vitest'
import { TypeEnum } from '../..'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'
import { wait } from '../../util/wait'

describe('test SearchApi', () => {
  it.skip('test search note', async () => {
    await api.note.create({
      title: 'test',
      body: 'test',
    })
    const res = await api.search.search({
      query: 'test',
      type: TypeEnum.Note,
    })
    expect(res.items.length).toBeGreaterThanOrEqual(1)
  })
  it('test search folder', async () => {
    const res = await api.search.search({
      query: 'Test folder*',
      type: TypeEnum.Folder,
    })
    expect(res.items.length).toBeGreaterThanOrEqual(1)
  })
})
