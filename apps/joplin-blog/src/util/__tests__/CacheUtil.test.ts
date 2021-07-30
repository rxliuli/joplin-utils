import { CacheUtil } from '../CacheUtil'

describe('测试 CacheUtil', () => {
  describe('测试 diff', () => {
    it('基本示例', () => {
      const id = (item: { id: string }) => item.id
      const res = CacheUtil.diff({
        old: [
          {
            id: '1',
            time: 1,
          },
          {
            id: '2',
            time: 2,
          },
          {
            id: '3',
            time: 3,
          },
        ],
        new: [
          {
            id: '2',
            time: 2,
          },
          {
            id: '3',
            time: 4,
          },
          {
            id: '4',
            time: 4,
          },
        ],
        id,
        updateTime: (item) => item.time,
      })
      expect(res.remove.map(id)).toEqual(['1'])
      expect(res.update.map(id)).toEqual(['3', '4'])
    })
  })
})
