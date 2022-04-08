import { eventApi, folderApi, noteApi, tagApi } from '../../src'
import { initTestFolderAndNote } from '../util/initTestFolderAndNote'

describe('test EventApi', () => {
  const data = initTestFolderAndNote()
  it('test list', async () => {
    const res = await eventApi.list('0')
    expect(res.items.length).toBeGreaterThan(0)
  })
  it('test get', async () => {
    const res = (await eventApi.list('0')).items[0]!
    console.log(res)
    // expect(await eventApi.get(res.id)).toEqual(res)
  })
})
