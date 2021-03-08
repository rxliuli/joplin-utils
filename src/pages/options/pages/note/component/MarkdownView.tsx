import * as React from 'react'
import { render } from '../util/render'
import 'prismjs/themes/prism.css'
import css from './MarkdownView.module.css'

type MarkdownViewProps = {
  content: string
}

const MarkdownView: React.FC<MarkdownViewProps> = (props) => {
  return (
    <div
      className={css.markdownView}
      dangerouslySetInnerHTML={{ __html: render(props.content) }}
    />
  )
}

export default MarkdownView
