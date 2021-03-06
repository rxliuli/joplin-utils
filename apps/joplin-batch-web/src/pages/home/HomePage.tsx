import * as React from 'react'
import { Card } from 'antd'
import MarkdownIt from 'markdown-it'
import README from '../../../README.md?raw'
import README_ZH_CN from '../../../README.ZH_CN.md?raw'
import css from './HomePage.module.css'
import { LanguageEnum } from '@liuli-util/i18next-util'
import { useLanguage } from '../../common/hooks/useLanguage'

const markdownIt = new MarkdownIt()

export const HomePage: React.FC = () => {
  const language = useLanguage()
  return (
    <Card>
      <div
        className={css.home}
        dangerouslySetInnerHTML={{
          __html: markdownIt.render(
            language === LanguageEnum.En ? README : README_ZH_CN,
          ),
        }}
      />
    </Card>
  )
}
