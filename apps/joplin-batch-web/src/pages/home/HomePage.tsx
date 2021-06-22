import * as React from 'react'
import { Card } from 'antd'
import MarkdownIt from 'markdown-it'
import { useAsync, useMount } from 'react-use'
import { getLanguage } from '../../common/getLanguage'
import { LanguageEnum } from '../../common/I18n'
import README from '../../../README.md?raw'
import README_ZH_CN from '../../../README.ZH_CN.md?raw'
import { useMemo, useState } from 'react'

type HomePageProps = {}

const markdownIt = new MarkdownIt()
console.log('README: ', README)

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <Card>
      <div
        dangerouslySetInnerHTML={{
          __html: markdownIt.render(
            getLanguage() === LanguageEnum.En ? README : README_ZH_CN,
          ),
        }}
      />
    </Card>
  )
}
