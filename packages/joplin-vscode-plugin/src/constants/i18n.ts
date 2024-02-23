import { TranslateType } from '../i18n'
import enUS from '../i18n/en-US.json'
import zhCN from '../i18n/zh-CN.json'

export type Lang = 'en-US' | 'zh-CN'

const config = {
  language: 'en-US' as Lang,
  langs: {
    'en-US': enUS,
    'zh-CN': zhCN,
  },
}

export async function initI18n(options: { language: Lang }) {
  config.language = options.language
}

/**
 * 根据 key 获取翻译的文本
 * @param args
 */
export function t<K extends keyof TranslateType>(...args: TranslateType[K]['params']): TranslateType[K]['value'] {
  const [key, params] = args
  let result =
    (config.langs[config.language] as Record<string, string>)[key] ??
    (config.langs['en-US'] as Record<string, string>)[key]
  if (!result) {
    return key as any
  }
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      result = result.replaceAll(`{{${key}}}`, String(value))
    })
  }
  return result as any
}
