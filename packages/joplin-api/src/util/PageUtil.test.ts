import { expect, it, describe } from 'vitest'
import { noteApi, PageUtil, searchApi, TypeEnum } from '../'

describe('测试 PageUtil', function () {
  it('测试获取所有目录', async function () {
    const noteList = await PageUtil.pageToAllList(noteApi.list)
    const len = (await noteApi.list({ limit: 100 })).items.length
    console.log('noteList.length: ', noteList.length)
    expect(noteList.length).toBe(len)
  })
  it('测试获取所有笔记', async function () {
    const noteList = await PageUtil.pageToAllList(noteApi.list, {
      fields: ['id'],
    })
    console.log('noteList.length: ', noteList.length, noteList)
    expect(noteList.length).toBeGreaterThanOrEqual(0)
  })
  it('测试搜索笔记', async () => {
    const res = await PageUtil.pageToAllList(searchApi.search, {
      type: TypeEnum.Note,
      query: 'joplin',
      order_by: 'user_updated_time',
      fields: ['id', 'title'],
    })
    res.forEach((item) => {
      expect(item.id && item.title && item.type_).toBeTruthy()
    })
  })
})
