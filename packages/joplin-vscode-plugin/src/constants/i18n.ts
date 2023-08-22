import { TranslateType } from '../i18n'
import i18next from 'i18next'
import enUS from '../i18n/en-US.json'
import zhCN from '../i18n/zh-CN.json'

export type Lang = 'en-US' | 'zh-CN'

export async function initI18n(options: { language: Lang }) {
  const { language } = options
  await i18next.init({
    lng: language,
    resources: { 'en-US': { translation: enUS }, 'zh-CN': { translation: zhCN } },
    keySeparator: false,
  })
}

/**
 * 根据 key 获取翻译的文本
 * @param args
 */
export function t<K extends keyof TranslateType>(...args: TranslateType[K]['params']): TranslateType[K]['value'] {
  // @ts-ignore
  return i18next.t(args[0], args[1])
}
