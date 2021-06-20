import { TranslateKeyConfig } from '../Generator'
import { LocaleJSON, Parser } from '../Parser'

describe('测试 Parser', () => {
  const parser = new (class extends Parser {
    _parseLocale = this.parseLocale
    _parseVal = this.parseVal
  })()
  function wrap(data: object): LocaleJSON {
    return {
      data,
      path: '',
    } as LocaleJSON
  }
  describe('测试 parse', () => {
    it('基本示例', () => {
      const res = parser.parse([{ name: 'name' }, { age: '年龄' }].map(wrap))
      expect(res).toEqual([
        { key: 'name' },
        { key: 'age' },
      ] as TranslateKeyConfig[])
    })
    it('测试 key 对应的翻译不同的情况', () => {
      const res = parser.parse(
        [
          { 'hello {{name}}': 'hello {{name}}' },
          { 'hello {{name}}': '你好{{name}}，我{{age}}岁了' },
        ].map(wrap),
      )
      expect(res).toEqual([
        { key: 'hello {{name}}', params: ['name'] },
      ] as TranslateKeyConfig[])
    })
  })

  describe('测试 parseConfig', () => {
    it('基本示例', () => {
      const res = parser._parseLocale({
        'hello world': '你好世界',
      })
      expect(res).toEqual([{ key: 'hello world' }] as TranslateKeyConfig[])
    })
    it('测试嵌套', () => {
      const res = parser._parseLocale({
        greetings: {
          morning: 'Good morning',
          evening: 'Good evening',
          welcome: 'Welcome',
        },
      })
      expect(res).toEqual([
        { key: 'greetings.morning' },
        { key: 'greetings.evening' },
        { key: 'greetings.welcome' },
      ])
    })
    it('测试带参数的翻译字符串', () => {
      const res = parser._parseVal('你好{{name}}，我 {{age}} 岁')
      console.log(res)
    })
    it('测试参数', () => {
      const res = parser._parseLocale({
        'hello {{name}}': '你好 {{name}}',
      })
      expect(res).toEqual([
        {
          key: 'hello {{name}}',
          params: ['name'],
        },
      ] as TranslateKeyConfig[])
    })
  })
})
