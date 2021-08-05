import { CacheUtil } from '../CacheUtil'
import { diffBy } from '@liuli-util/array'

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
        id: (item) => item.id + '-' + item.time,
      })
      expect(res.remove.map(id)).toEqual(['1', '3'])
      expect(res.update.map(id)).toEqual(['3', '4'])
    })
  })
  it('测试 diffBy', () => {
    const { left, common, right } = diffBy(
      [
        [1, 1],
        [2, 1],
        [3, 1],
      ],
      [
        [2, 2],
        [3, 1],
        [4, 1],
      ],
      (item) => item.join(','),
    )
    expect(left.map((item) => item[0])).toEqual([1, 2])
    expect(common.map((item) => item[0])).toEqual([3])
    expect(right.map((item) => item[0])).toEqual([2, 4])
  })
})
