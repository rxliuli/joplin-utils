import * as vscode from 'vscode'
import { TypeEnum } from 'joplin-api'
import { GlobalContext } from '../constants/context'
import { wrapLink } from '../util/markdown'
import { fromMarkdown } from 'mdast-util-from-markdown'
import { selectAll } from 'unist-util-select'
import { toString } from 'mdast-util-to-string'
import { Image, Link } from 'mdast'

type Position = {
  line: number
  column: number
}

type Range = {
  start: Position
  end: Position
}

export class MarkdownProvider implements vscode.DocumentLinkProvider {
  async resolveDocumentLink(link: vscode.DocumentLink, token: vscode.CancellationToken): Promise<vscode.DocumentLink> {
    return link
  }
  async resolveLinks(s: string): Promise<
    {
      range: Range
      id: string
      type: TypeEnum.Note | TypeEnum.Resource
      label?: string
    }[]
  > {
    const root = fromMarkdown(s)
    const links = (selectAll('link[url^=":/"],image[url^=":/"]', root) as (Link | Image)[]).filter((it) => it.url)
    const resourceIdList = new Set([...GlobalContext.openNoteResourceMap.values()].flat().map((item) => item.id))
    return links.map((it) => {
      const id = it.url.slice(2, 34)
      const label = it.type === 'link' ? toString(it.children) : it.alt ?? ''
      return {
        id,
        type: resourceIdList.has(id) || it.type !== 'link' ? TypeEnum.Resource : TypeEnum.Note,
        range: {
          start: { line: it.position!.start.line - 1, column: it.position!.start.column + label.length + 2 },
          end: { line: it.position!.end.line - 1, column: it.position!.end.column - 2 },
        },
        label,
      }
    })
  }
  async provideDocumentLinks(document: vscode.TextDocument) {
    if (!GlobalContext.openNoteMap.has(document.fileName)) {
      return
    }
    const links = await this.resolveLinks(document.getText())
    return links.map((it) => {
      const docLink = new vscode.DocumentLink(
        new vscode.Range(it.range.start.line, it.range.start.column, it.range.end.line, it.range.end.column),
        vscode.Uri.parse(wrapLink(it.id, it.type)),
      )
      docLink.tooltip = it.label ?? 'Follow link'
      return docLink
    })
  }
}
