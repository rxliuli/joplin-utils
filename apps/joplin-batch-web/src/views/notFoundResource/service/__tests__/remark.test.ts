import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import remarkGfm from 'remark-gfm'
import data from '../data.json'
import visit from 'unist-util-visit'
import { Image, Link } from 'mdast'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'

it('测试', () => {
  const md = unified().use(remarkParse).use(remarkGfm).use(remarkStringify, {
    bullet: '-',
    fences: true,
    incrementListMarker: false,
  })
  const res: Pick<ResourceProperties, 'id' | 'title'>[] = []
  visit(md.parse(data.body), (node) => {
    if (node.type !== 'link' && node.type !== 'image') {
      return
    }
    const link = node as Link | Image
    if (!link.url.startsWith(':/')) {
      return
    }
    res.push({
      id: link.url.slice(2),
      title: (link.type === 'link'
        ? link.title ?? (link.children[0] as any).value
        : link.alt) as string,
    })
  })
  console.log('res: ', res)
})
