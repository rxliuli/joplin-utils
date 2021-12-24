import visit from 'unist-util-visit'
import { mdParser } from '../../../constants/mdParser'
import { Link } from 'mdast'
import { expose } from 'comlink'

export type ContentLink = { title?: string; url: string }

export class MarkdownLinkUtil {
  /**
   * 解析 markdown 文本中的链接
   * @param content
   */
  static parseLink(content: string): ContentLink[] {
    const node = mdParser.parse(content)
    const res: ContentLink[] = []
    visit(node, (node) => {
      // console.log(node.type)
      if (node.type !== 'link') {
        return
      }
      const link = node as Link
      if (link.url.startsWith('https')) {
        // console.log(link.children[0])
      }
      res.push({
        title: (link.children[0] as any)?.value as string,
        url: link.url as string,
      })
    })
    return res
  }
  /**
   * 转换笔记中的链接
   * @param content
   * @param convertLinkMap
   */
  static convertLink(
    content: string,
    convertLinkMap: Record<string, ContentLink>,
  ): string {
    const node = mdParser.parse(content)
    visit(node, (node) => {
      if (node.type !== 'link') {
        return
      }
      const link = node as Link
      const map = convertLinkMap[link.url]
      if (map) {
        link.url = map.url
        if (link.children.length === 0) {
          link.children.push({
            type: 'text',
            value: '',
          })
        }
        ;(link.children[0] as any).value = map.title
      }
    })
    return mdParser.stringify(node)
  }
}

expose(MarkdownLinkUtil)
