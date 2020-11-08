import { PageUtil } from '../../src/util/PageUtil'
import { folderApi, noteApi } from '../../src'

describe('测试 PageUtil', function () {
  it('测试获取所有目录', async function () {
    const folderList = await PageUtil.pageToAllList(folderApi.list)
    console.log('folderList.length: ', folderList.length)
    expect(folderList.length).toBeGreaterThan(0)
  })
  it('测试获取所有笔记', async function () {
    const noteList = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id'],
    })
    console.log('noteList.length: ', noteList.length, noteList)
    expect(noteList.length).toBeGreaterThan(0)
  })
})