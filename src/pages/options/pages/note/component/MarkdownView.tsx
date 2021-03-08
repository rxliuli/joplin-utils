import * as React from 'react'
import { render, RenderNote } from '../util/render'
import 'prismjs/themes/prism.css'
import css from './MarkdownView.module.css'

type MarkdownViewProps = {
  note: RenderNote
}

const MarkdownView: React.FC<MarkdownViewProps> = (props) => {
  return (
    <div
      className={css.markdownView}
      dangerouslySetInnerHTML={{ __html: render(props.note) }}
    />
  )
}

export default MarkdownView
