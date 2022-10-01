import unified from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from '@mapbox/rehype-prism'
import { rehypeReplaceJoplinUrl } from './rehypeReplaceJoplinUrl'
import { NoteProperties } from 'joplin-api'
import { ResourceGetRes } from 'joplin-api'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeMathjax from 'rehype-mathjax'
import 'rehype-mathjax/svg'

export type RenderNote = Pick<NoteProperties, 'id' | 'title' | 'body'> & {
  resourceList: ResourceGetRes[]
}

/**
 * 渲染一个 markdown 字符串为 html
 * @param note
 */
export function render(note: RenderNote): string {
  const processor = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkMath)
    .use(remark2rehype)
    .use(rehypeReplaceJoplinUrl, note)
    .use(rehypeMathjax, {})
    .use(rehypePrism, { ignoreMissing: true })
    .use(rehypeStringify)

  return processor.processSync(note.title + '\n' + note.body).contents.toString()
}
