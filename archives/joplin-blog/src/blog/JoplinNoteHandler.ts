import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { fromMarkdown, Root, Link, visit, map, toMarkdown } from '@liuli-util/markdown-util'

export interface JoplinNoteHandlerLinkConverter {
  convertNote(id: string): string

  convertResource(resource: CommonResource): string
}

export class JoplinNoteHandler {
  static parse(content: string) {
    return fromMarkdown(content)
  }

  static convertLink(
    node: Root,
    note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
    converter: JoplinNoteHandlerLinkConverter,
  ) {
    function getLink() {
      const res: string[] = []
      visit(node, (node) => {
        if (['link', 'image'].includes(node.type)) {
          res.push((node as Link).url)
        }
      })
      return res.filter((link) => link.startsWith(':/')).map((link) => link.slice(2))
    }

    const linkIdList = getLink()
    const resourceMap = note.resources.reduce((res, resource) => {
      res.set(resource.id, resource)
      return res
    }, new Map<string, CommonResource>())
    const idLinkMap = linkIdList.reduce((res, id) => {
      const link = resourceMap.has(id) ? converter.convertResource(resourceMap.get(id)!) : converter.convertNote(id)
      res.set(id, link)
      return res
    }, new Map<string, string>())

    return map(node, (node) => {
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

  static format(node: Root) {
    return toMarkdown(node)
  }
}
