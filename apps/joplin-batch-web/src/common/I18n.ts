import i18next from 'i18next'
import zhCN from '../i18n/zhCN.json'
import en from '../i18n/en.json'
import { TranslateParams } from '../i18n'

export enum LanguageEnum {
  ZhCN = 'zhCN',
  En = 'en',
}

export class I18nLoader {
  constructor() {}

  /**
   * 加载国际化
   */
  async load(language: LanguageEnum) {
    await i18next.init({
      lng: language,
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

  /**
   * 根据 key 获取翻译的文本
   * @param args
   */
  t(...args: TranslateParams): string {
    // @ts-ignore
    return i18next.t(args[0], args[1])
  }
}

export const i18n = new I18nLoader()
