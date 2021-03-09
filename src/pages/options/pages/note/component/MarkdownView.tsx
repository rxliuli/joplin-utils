import * as React from 'react'
import { render, RenderNote } from '../util/render'
import './markdown.css'
import './node-dark.css'
import 'prismjs/themes/prism-dark.css'
import css from './MarkdownView.module.css'
import classNames from 'classnames'

type MarkdownViewProps = {
  note: RenderNote
}

const MarkdownView: React.FC<MarkdownViewProps> = (props) => {
  return (
    <div className={css.markdownView}>
      <div
        className={classNames(css.markdownContent, 'markdown', 'node-dark')}
        dangerouslySetInnerHTML={{ __html: render(props.note) }}
      />
    </div>
  )
}

export default MarkdownView
