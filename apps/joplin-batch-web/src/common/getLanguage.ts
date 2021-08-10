import { LanguageEnum } from '@liuli-util/i18next-util'

export function getLanguage(): LanguageEnum {
  return navigator.language.startsWith('zh')
    ? LanguageEnum.ZhCN
    : LanguageEnum.En
}
