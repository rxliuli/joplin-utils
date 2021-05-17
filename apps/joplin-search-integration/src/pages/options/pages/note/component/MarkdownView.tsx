import * as React from 'react'
import { render, RenderNote } from '../util/render'
import './markdown.css'
import 'prismjs/themes/prism-funky.css'
import css from './MarkdownView.module.css'

type MarkdownViewProps = {
  note: RenderNote
}

const MarkdownView: React.FC<MarkdownViewProps> = (props) => {
  return (
    <div className={css.markdownContent}>
      <div
        className={'markdown-body dark'}
        dangerouslySetInnerHTML={{ __html: render(props.note) }}
      />
    </div>
  )
}

export default MarkdownView
