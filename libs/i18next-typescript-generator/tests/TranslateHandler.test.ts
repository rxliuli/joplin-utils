import { TranslateHandler, TranslateKeyConfig } from '../src'

describe('测试 Builder', () => {
  const handler = new (class extends TranslateHandler {
    buildParams = super.buildParams
    buildKey = super.buildKey
    parseConfig = super.parseConfig
    parseVal = super.parseVal
  })()
  describe('测试 buildKey', () => {
    it('基本示例', () => {
      const res = handler.buildKey({
        key: 'hello world',
      })
      expect(res).toBe(`[key: 'hello world']`)
    })
    it('测试有参数的情况', () => {
      const res = handler.buildKey({
        key: 'hello {{name}}',
        params: ['name'],
      })
      expect(res).toBe(`[key: 'hello {{name}}', params: {name: string|number}]`)
    })
  })
  describe('测试 build', () => {
    const res = handler.build([
      { key: 'hello {{name}}', params: ['name'] },
      { key: 'I am {{age}} years old', params: ['age'] },
    ])
    expect(res).toBe(
      `export type TranslateParams = [key: 'hello {{name}}', params: {name: string|number}]|[key: 'I am {{age}} years old', params: {age: string|number}]`,
    )
  })
  describe('测试 parseConfig', () => {
    it('基本示例', () => {
      const res = handler.parseConfig({
        'hello world': '你好世界',
      })
      expect(res).toEqual([{ key: 'hello world' }] as TranslateKeyConfig[])
    })
    it('测试嵌套', () => {
      const res = handler.parseConfig({
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
      const res = handler.parseVal('你好{{name}}，我 {{age}} 岁')
      console.log(res)
    })
    it('测试参数', () => {
      const res = handler.parseConfig({
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
  describe('测试 parse', () => {
    it('基本示例', () => {
      const res = handler.parse([{ name: 'name' }, { age: '年龄' }])
      expect(res).toEqual([
        { key: 'name' },
        { key: 'age' },
      ] as TranslateKeyConfig[])
    })
    it('测试 key 对应的翻译不同的情况', () => {
      const res = handler.parse([
        { 'hello {{name}}': 'hello {{name}}' },
        { 'hello {{name}}': '你好{{name}}，我{{age}}岁了' },
      ])
      expect(res).toEqual([
        { key: 'hello {{name}}', params: ['name'] },
      ] as TranslateKeyConfig[])
    })
  })
  describe('整合 build/parse', () => {
    const configList = handler.parse([
      {
        home: {
          'hello world': 'hello world',
          'Hi {{name}}, I am {{age}} years old':
            'Hi {{name}}, I am {{age}} years old',
        },
        info: {
          sex: 'sex',
          address: 'address',
        },
      },
      {
        home: {
          'hello world': '你好世界',
          'Hi {{name}}, I am {{age}} years old': '你好{{name}}，我 {{age}} 岁',
        },
        info: {
          address: '地址',
        },
      },
    ])
    const res = handler.build(configList)
    console.log(res)
  })
})
