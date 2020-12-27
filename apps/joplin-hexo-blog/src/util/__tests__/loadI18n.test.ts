import { I18nLoader, LanguageEnum } from '../I18nLoader'

describe('测试 loadI18n', () => {
  const i18nLoader = new I18nLoader()
  it('基本示例', async () => {
    await i18nLoader.load(LanguageEnum.ZhCN)
    expect(i18nLoader.getText('hello')).toBe('你好')
    await i18nLoader.load(LanguageEnum.En)
    expect(i18nLoader.getText('hello')).toBe('hello')
  })
  it('测试嵌套对象', async () => {
    await i18nLoader.load(LanguageEnum.ZhCN)
    expect(i18nLoader.getText('footer.copyright')).toBe('一些版权')
  })
  it('测试存在插值的情况', async () => {
    await i18nLoader.load(LanguageEnum.ZhCN)
    const res = i18nLoader.getText('key', {
      what: 'i18next',
      how: 'great',
    } as const)
    expect(res).toBe('是的, i18next 是 great')
  })
})
