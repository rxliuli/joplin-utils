import * as React from 'react'
import { Card } from 'antd'
import MarkdownIt from 'markdown-it'
import { useAsync } from 'react-use'

type HomePageProps = {}

const markdownIt = new MarkdownIt()

export const HomePage: React.FC<HomePageProps> = () => {
  const state = useAsync(async () => {
    const resp = await fetch('./README.md')
    return (await resp.text()) as string
  })
  return (
    <Card loading={state.loading}>
      {state.value && (
        <div
          dangerouslySetInnerHTML={{ __html: markdownIt.render(state.value) }}
        />
      )}
    </Card>
  )
}
