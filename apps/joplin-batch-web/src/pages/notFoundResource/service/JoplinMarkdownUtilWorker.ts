import { expose } from 'comlink'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkStringify from 'remark-stringify'
import type { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import type { Link } from 'mdast'
import visit from 'unist-util-visit'

export class JoplinMarkdownUtilWorker {
  private static readonly md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      fences: true,
      incrementListMarker: false,
    })

  /**
   * 解析 markdown 中所有引用的附件资源
   * @param content
   */
  parseInternalLink(
    content: string,
  ): Pick<ResourceProperties, 'id' | 'title'>[] {
    const res: Pick<ResourceProperties, 'id' | 'title'>[] = []
    visit(JoplinMarkdownUtilWorker.md.parse(content), (node) => {
      if (node.type !== 'link' && node.type !== 'image') {
        return
      }
      const link = node as Link
      if (!link.url.startsWith(':/')) {
        return
      }
      res.push({
        id: link.url.slice(2),
        title: (link.type === 'link'
          ? link.title ?? link.children[0].value
          : link.alt) as string,
      })
    })
    return res
  }
}

export const checkNoteResource = new JoplinMarkdownUtilWorker()

expose(checkNoteResource)
