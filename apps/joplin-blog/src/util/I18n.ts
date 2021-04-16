import zhCN from '../i18n/zhCN.json'
import en from '../i18n/en.json'
import i18next from 'i18next'
import { TranslateParams } from '../i18n'
import osLocale from 'os-locale'

export enum LanguageEnum {
  ZH_CN = 'zhCN',
  EN_US = 'en',
}

class I18n {
  async getLanguage(): Promise<LanguageEnum> {
    const language = await osLocale()
    /**
     * os-locale => i18next 的语言类型字符串映射
     */
    const map: Record<string, LanguageEnum> = {
      'zh-CN': LanguageEnum.ZH_CN,
      'en-US': LanguageEnum.EN_US,
    }
    return map[language] || LanguageEnum.EN_US
  }

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
    return i18next.t(args[0], args[1])
  }
}

export const i18n = new I18n()
