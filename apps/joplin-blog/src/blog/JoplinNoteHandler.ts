import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import unified from 'unified'
import remarkParse from 'remark-parse'
import remarkStringify from 'remark-stringify'
import visit from 'unist-util-visit'
import { Link } from 'mdast'
import unistUtilMap from 'unist-util-map'
import remarkGfm from 'remark-gfm'
import { format, Options } from 'prettier'
import { Node } from 'unist'

export interface JoplinNoteHandlerLinkConverter {
  convertNote(id: string): string

  convertResource(resource: CommonResource): string
}

export class JoplinNoteHandler {
  static readonly md = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkStringify, {
      bullet: '-',
      fences: true,
      incrementListMarker: false,
    })

  static parse(content: string) {
    return this.md.parse(content)
  }

  static convertLink(
    node: Node,
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
    converter: JoplinNoteHandlerLinkConverter,
  ) {
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
        ? converter.convertResource(resourceMap.get(id)!)
        : converter.convertNote(id)
      res.set(id, link)
      return res
    }, new Map<string, string>())

    return unistUtilMap(node, (node) => {
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
  }

  static format(node: Node) {
    return format(this.md.stringify(node), {
      parser: 'markdown',
      tabWidth: 2,
    } as Options)
  }
}
