import * as React from 'react'
import { Card } from 'antd'
import README from '../../../README.md?raw'
import README_ZH_CN from '../../../README.zh-CN.md?raw'
import css from './HomeView.module.css'
import { LanguageEnum } from '@liuli-util/i18next-util'
import { getLanguage } from '../../common/getLanguage'
import { useLocalStorage } from 'react-use'
import ReactMarkdown from 'react-markdown'

export const HomeView: React.FC = () => {
  const [language] = useLocalStorage<LanguageEnum>('language', getLanguage())
  return (
    <Card>
      <ReactMarkdown className={css.home}>{language === LanguageEnum.En ? README : README_ZH_CN}</ReactMarkdown>
    </Card>
  )
}
