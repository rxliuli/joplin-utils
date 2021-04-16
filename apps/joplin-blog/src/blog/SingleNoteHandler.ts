import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import visit from 'unist-util-visit'
import { Link } from 'mdast'
import unistUtilMap from 'unist-util-map'
import remarkGfm from 'remark-gfm'
import { format, Options } from 'prettier'

export interface BaseSingleNoteHandler {
  meta(note: CommonNote & { tags: CommonTag[] }): object

  convertNote(id: string): string

  convertResource(resource: CommonResource): string
}

/**
 * 单个笔记的处理工具
 */
export class SingleNoteHandler {
  constructor(private handler: BaseSingleNoteHandler) {}

  private readonly md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      fences: true,
      incrementListMarker: false,
    })

  handle(
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  ): string {
    const node = this.md.parse(note.body)

    function getLink() {
      const res: string[] = []
      visit(node, ['link', 'image'], (node: Link) => {
        res.push(node.url)
      })
      return res
        .filter((link) => link.startsWith(':/'))
        .map((link) => link.slice(2))
    }

    const linkIdList = getLink()
    const resourceMap = note.resources.reduce((res, resource) => {
      res.set(resource.id, resource)
      return res
    }, new Map<string, CommonResource>())
    const idLinkMap = linkIdList.reduce((res, id) => {
      const link = resourceMap.has(id)
        ? this.handler.convertResource(resourceMap.get(id)!)
        : this.handler.convertNote(id)
      res.set(id, link)
      return res
    }, new Map<string, string>())

    const tree = unistUtilMap(node, (node) => {
      if (node.type !== 'link' && node.type !== 'image') {
        return node
      }
      const link = node as Link
      if (!link.url.startsWith(':/')) {
        return link
      }
      return {
        ...node,
        url: idLinkMap.get(link.url.slice(2)),
      } as Link
    })

    return JoplinMarkdownUtil.addMeta(
      format(this.md.stringify(tree), {
        parser: 'markdown',
        tabWidth: 2,
      } as Options),
      this.handler.meta(note),
    )
  }
}
