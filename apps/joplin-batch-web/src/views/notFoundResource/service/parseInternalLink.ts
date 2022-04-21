import type { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import type { Image, Link } from 'mdast'
import visit from 'unist-util-visit'
import { mdParser } from '../../../constants/mdParser'

/**
 * 解析 markdown 中所有引用的附件资源
 * @param content
 */
export function parseInternalLink(content: string): Pick<ResourceProperties, 'id' | 'title'>[] {
  const res: Pick<ResourceProperties, 'id' | 'title'>[] = []
  visit(mdParser.parse(content), (node) => {
    if (node.type !== 'link' && node.type !== 'image') {
      return
    }
    const link = node as Link | Image
    if (!link.url.startsWith(':/')) {
      return
    }
    res.push({
      id: link.url.slice(2),
      title: (link.type === 'link' ? link.title ?? (link.children[0] as any).value : link.alt) as string,
    })
  })
  return res
}

// expose(parseInternalLink)
