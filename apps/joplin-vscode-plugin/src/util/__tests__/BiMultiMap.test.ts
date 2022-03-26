import { BiMultiMap } from '../BiMultiMap'

describe('测试 BiMultiMap', () => {
  it('基本示例', () => {
    console.log('hello')
    const map = new BiMultiMap<number, string>()
    map.set(1, '1')
    map.set(2, '1')
    map.set(2, '2')
    map.set(1, '3')
    expect(map.getByKey(1)).toEqual(['1', '3'])
    expect(map.getByKey(2)).toEqual(['1', '2'])
    expect(map.getByKey(3)).toEqual([])
    expect(map.getByValue('1')).toEqual([1, 2])
    map.deleteByKey(1)
    expect(map.getByValue('1')).toEqual([2])
    map.deleteByKey(2)
    expect(map.getByValue('2')).toEqual([])
  })
})
