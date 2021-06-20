import { Generator } from '../Generator'
import { areSame, formatCode } from '../../util/areSame'

describe('测试 Generator', () => {
  const generator = new Generator()
  it('基本示例', () => {
    const res = generator.generate([{ key: 'hello world' }])
    expect(
      areSame(res, "export type TranslateParams = [key: 'hello world']"),
    ).toBeTruthy()
  })
  it('测试带有参数', () => {
    const res = generator.generate([{ key: 'hello', params: ['name'] }])
    expect(
      areSame(
        res,
        "export type TranslateParams = [key: 'hello', params: { name: string | number }]",
      ),
    ).toBeTruthy()
  })
})
