import { filenamify } from '../filenamify'

describe('测试 filenamify', () => {
  it('基本示例', () => {
    expect(filenamify('test.png')).toBe('test.png')
    expect(filenamify('中文文件名.png')).toBe('中文文件名.png')
    expect(filenamify('# test\r')).toBe('# test_')
  })
})
