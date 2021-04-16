import { I18n, LanguageEnum } from '../I18n'
import osLocale from 'os-locale'

describe('测试 loadI18n', () => {
  const i18nLoader = new I18n()
  it('基本示例', async () => {
    await i18nLoader.load(LanguageEnum.ZH_CN)
    expect(i18nLoader.t('hello')).toBe('你好')
    await i18nLoader.load(LanguageEnum.EN_US)
    expect(i18nLoader.t('hello')).toBe('hello')
  })
  it('测试嵌套对象', async () => {
    await i18nLoader.load(LanguageEnum.ZH_CN)
    expect(i18nLoader.t('footer.copyright')).toBe('一些版权')
  })
  it('测试存在插值的情况', async () => {
    await i18nLoader.load(LanguageEnum.ZH_CN)
    const res = i18nLoader.t('key', {
      what: 'i18next',
      how: 'great',
    } as const)
    expect(res).toBe('是的, i18next 是 great')
  })
  it('测试 os-locale', async () => {
    console.log(await osLocale())
  })
})
