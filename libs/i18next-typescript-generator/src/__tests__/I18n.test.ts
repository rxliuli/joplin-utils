import i18next from 'i18next'
import en from './i18n/en.json'
import zhCN from './i18n/zhCN.json'
import { TranslateParams } from './i18n'

enum LanguageEnum {
  ZH_CN = 'zhCN',
  EN_US = 'en',
}

class I18n {
  /**
   * 加载国际化资源
   */
  async load(lng: string) {
    await i18next.init({
      lng: lng,
      resources: {
        en: {
          translation: en,
        },
        zhCN: {
          translation: zhCN,
        },
      },
    })
  }

  t(...args: TranslateParams): string {
    return i18next.t(args[0], args[1] as any)
  }
}

const i18n = new I18n()

describe('测试 loadI18n', () => {
  beforeEach(async () => {
    await i18n.load(LanguageEnum.ZH_CN)
  })
  it('基本示例', async () => {
    expect(i18n.t('test.hello')).toBe('你好')
    await i18n.load(LanguageEnum.EN_US)
    expect(i18n.t('test.hello')).toBe('hello')
  })
  it('测试嵌套对象', async () => {
    expect(i18n.t('test.footer.copyright')).toBe('一些版权')
  })
  it('测试存在插值的情况', async () => {
    const res = i18n.t('test.params', {
      what: 'i18next',
      how: 'great',
    } as const)
    expect(res).toBe('是的, i18next 是 great')
  })
  it('测试特殊字符', () => {
    const res = i18n.t('test.special.characters')
    expect(res).not.toBe('特殊字符')
  })
  it('测试嵌套参数', () => {
    expect(
      i18n.t('test.Nested parameters {{options.name}}', {
        'options.name': 'liuli',
      }),
    ).toBe('test.Nested parameters ')
    expect(
      i18n.t('test.Nested parameters {{options.name}}', {
        options: { name: 'liuli' },
      } as any),
    ).toBe('test.Nested parameters liuli')
  })
})
