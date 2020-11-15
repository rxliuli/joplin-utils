import * as vscode from 'vscode'
import { DocumentLinkProvider, HoverProvider } from 'vscode'
import { matchAll, getReferenceAtPosition } from '../util/utils'
import { isInFencedCodeBlock, isInCodeSpan } from '../util/externalUtils'
import { JoplinLinkRegex, JoplinResourceRegex } from '../util/constant'
import { wrapLink } from '../util/useJoplinLink'
import { TypeEnum, noteApi, resourceApi } from 'joplin-api'
import { formatSize } from '../util/formatSize'

export class MDDocumentLinkProvider implements DocumentLinkProvider {
  async provideDocumentLinks(document: vscode.TextDocument) {
    const results: vscode.DocumentLink[] = []

    document
      .getText()
      .split(/\r?\n/g)
      .forEach((lineText, lineNum) => {
        // noinspection RegExpRedundantEscape
        for (const match of matchAll(/(\[.*\]\()(.+)\)/g, lineText)) {
          const markdownTokenLink = match[2]
          if (markdownTokenLink) {
            const offset = (match.index || 0) + match[1].length

            if (
              isInFencedCodeBlock(document, lineNum) ||
              isInCodeSpan(document, lineNum, offset)
            ) {
              continue
            }

            const linkStart = new vscode.Position(lineNum, offset)
            const linkEnd = new vscode.Position(
              lineNum,
              offset + markdownTokenLink.length,
            )

            let link: string
            if (JoplinLinkRegex.test(markdownTokenLink)) {
              const id = JoplinLinkRegex.exec(markdownTokenLink)![1]
              link = wrapLink(id, TypeEnum.Note)
              console.log('是笔记链接: ', link)
            } else if (JoplinResourceRegex.test(markdownTokenLink)) {
              const id = JoplinResourceRegex.exec(markdownTokenLink)![1]
              link = wrapLink(id, TypeEnum.Resource)
              console.log('是资源: ', link)
            } else {
              link = markdownTokenLink
              console.log('是普通链接：', link)
            }

            const documentLink = new vscode.DocumentLink(
              new vscode.Range(linkStart, linkEnd),
              vscode.Uri.parse(link),
            )

            documentLink.tooltip = 'Follow link'

            results.push(documentLink)
          }
        }
      })

    return results
  }
}

export class MDHoverProvider implements HoverProvider {
  async provideHover(document: vscode.TextDocument, position: vscode.Position) {
    const markdownTokenLink = getReferenceAtPosition(document, position)
    if (!markdownTokenLink) {
      return
    }
    let content: string[]
    if (JoplinLinkRegex.test(markdownTokenLink)) {
      const id = JoplinLinkRegex.exec(markdownTokenLink)![1]
      // link = wrapLink(id, TypeEnum.Note)
      const note = await noteApi.get(id)
      const title = note.title
      content = [title.startsWith('#') ? title.substr(1).trimLeft() : title]
    } else if (JoplinResourceRegex.test(markdownTokenLink)) {
      const id = JoplinResourceRegex.exec(markdownTokenLink)![1]
      const resource = await resourceApi.get(id, ['id', 'title', 'size'])
      content = [resource.title, formatSize(resource.size)]
    } else {
      content = [markdownTokenLink]
    }
    console.log('provideHover: ', content)
    return new vscode.Hover(content)
  }
}
