import { hello } from '../index'
import { I18n, LanguageEnum } from '../I18n'
import { TranslateParams } from './i18n'
import en from './i18n/en.json'
import zhCN from './i18n/zhCN.json'

it('测试 hello', async () => {
  const i18n = new I18n<TranslateParams>()
  await i18n.init({ en, zhCN }, LanguageEnum.En)
  expect(i18n.t('hello', { name: 'liuli' })).toBe('hello liuli')
  await i18n.changeLang(LanguageEnum.ZhCN)
  expect(i18n.t('hello', { name: '琉璃' })).toBe('你好 琉璃')
})
