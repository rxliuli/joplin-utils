import { LanguageEnum } from './I18n'

export function getLanguage() {
  return navigator.language.startsWith('zh')
    ? LanguageEnum.ZhCN
    : LanguageEnum.En
}
