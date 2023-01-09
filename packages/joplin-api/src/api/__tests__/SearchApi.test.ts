import { expect, it, describe } from 'vitest'
import { searchApi } from '../..'
import { TypeEnum } from '../..'
import { initTestFolderAndNote } from '../../util/initTestFolderAndNote'

/**
 * TODO 搜索的 api 严重缺乏测试
 */
describe('test SearchApi', () => {
  initTestFolderAndNote()
  it('test search note', async () => {
    const res = await searchApi.search({
      query: 'title:测试',
      type: TypeEnum.Note,
    })
    expect(res.items.length).toBeGreaterThanOrEqual(1)
  })
  it('test search folder', async () => {
    const res = await searchApi.search({
      query: '测试目录*',
      type: TypeEnum.Folder,
    })
    expect(res.items.length).toBeGreaterThanOrEqual(1)
  })
})
