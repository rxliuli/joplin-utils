import { LanguageEnum } from '@liuli-util/i18next-util'
import { osLocale } from 'os-locale'

export async function getLanguage(): Promise<LanguageEnum> {
  const language = await osLocale()
  /**
   * os-locale => i18next 的语言类型字符串映射
   */
  const map: Record<string, LanguageEnum> = {
    'zh-CN': LanguageEnum.ZhCN,
    'en-US': LanguageEnum.En,
  }
  return map[language] || LanguageEnum.En
}
