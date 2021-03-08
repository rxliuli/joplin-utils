import * as React from 'react'
import { render } from '../util/render'
import hljs from 'highlight.js'
import { useEffectOnce } from 'react-use'

type MarkdownViewProps = {
  content: string
}

const MarkdownView: React.FC<MarkdownViewProps> = (props) => {
  useEffectOnce(() => {
    const interval = setInterval(() => {
      console.log('highlightAll: ', hljs)
      hljs.highlightAll()
    }, 1000)
    return () => clearInterval(interval)
  })
  return <div dangerouslySetInnerHTML={{ __html: render(props.content) }} />
}

export default MarkdownView
