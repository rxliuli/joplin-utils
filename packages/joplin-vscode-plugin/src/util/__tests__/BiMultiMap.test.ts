import { expect, it, describe } from 'vitest'
import { BiMultiMap } from '../BiMultiMap'

describe('测试 BiMultiMap', () => {
  it('基本示例', () => {
    const map = new BiMultiMap<number, string>()
    map.set(1, '1')
    map.set(2, '1')
    map.set(2, '2')
    map.set(1, '3')
    expect(map.get(1)).toEqual('3')
    expect(map.get(2)).toEqual('2')
    expect(map.get(3)).toBeUndefined()
    expect(map.get('1')).toBeUndefined()
    map.delete(1)
    expect(map.get('1')).toBeUndefined()
    map.delete(2)
    expect(map.get('2')).toBeUndefined()
  })
})
