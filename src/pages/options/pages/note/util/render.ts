import unified from 'unified'
import remarkParse from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypePrism from '@mapbox/rehype-prism'

const processor = unified()
  .use(remarkParse)
  .use(remark2rehype)
  .use(rehypePrism)
  .use(rehypeStringify)

/**
 * 渲染一个 markdown 字符串为 html
 * @param md
 */
export function render(md: string): string {
  return processor.processSync(md).contents.toString()
}
