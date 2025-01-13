import { expect, it, describe } from 'vitest'
import { PageUtil, TypeEnum } from '../..'

describe('PageUtil', () => {
  it('Get all notes', async () => {
    const noteList = await PageUtil.pageToAllList(api.note.list, {
      fields: ['id'],
    })
    expect(noteList.length).toBeGreaterThanOrEqual(0)
  })
  it('Search notes', async () => {
    const res = await PageUtil.pageToAllList(api.search.search, {
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
