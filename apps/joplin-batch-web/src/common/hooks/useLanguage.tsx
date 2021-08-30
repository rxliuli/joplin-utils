import { useHistory, useLocation } from 'react-router-dom'
import { useMemo } from 'react'
import { LanguageEnum } from '@liuli-util/i18next-util'

export function convertLanguagePrefix(value: LanguageEnum): string
export function convertLanguagePrefix(value: string): LanguageEnum
export function convertLanguagePrefix(
  value: LanguageEnum | string,
): LanguageEnum | string {
  const LanguagePrefixMap = {
    [LanguageEnum.En]: '/en-US/',
    [LanguageEnum.ZhCN]: '/zh-CN/',
    '/zh-CN/': LanguageEnum.ZhCN,
    '/en-US/': LanguageEnum.En,
  }
  return LanguagePrefixMap[value as keyof typeof LanguagePrefixMap]
}

export function useLanguage(): LanguageEnum {
  const location = useLocation()
  const history = useHistory()
  return useMemo(() => {
    const regexp = /(\/.+?\/)/
    const res = regexp.exec(location.pathname)
    if (!res) {
      history.push(convertLanguagePrefix(LanguageEnum.En))
      return LanguageEnum.En
    }
    return convertLanguagePrefix(res[0])
  }, [history, location.pathname])
}
