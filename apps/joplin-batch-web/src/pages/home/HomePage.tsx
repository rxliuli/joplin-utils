import * as React from 'react'
import { Card } from 'antd'
import MarkdownIt from 'markdown-it'
import { getLanguage } from '../../common/getLanguage'
import { LanguageEnum } from '../../common/I18n'
import README from '../../../README.md?raw'
import README_ZH_CN from '../../../README.ZH_CN.md?raw'
import css from './HomePage.module.css'

type HomePageProps = {}

const markdownIt = new MarkdownIt()

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Card>
      <div
        className={css.home}
        dangerouslySetInnerHTML={{
          __html: markdownIt.render(
            getLanguage() === LanguageEnum.En ? README : README_ZH_CN,
          ),
        }}
      />
    </Card>
  )
}
