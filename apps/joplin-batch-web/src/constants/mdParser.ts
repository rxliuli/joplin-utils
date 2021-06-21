import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'

/**
 * markdown 解析器
 */
export const mdParser = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkStringify, {
    bullet: '-',
    fences: true,
    incrementListMarker: false,
  })
