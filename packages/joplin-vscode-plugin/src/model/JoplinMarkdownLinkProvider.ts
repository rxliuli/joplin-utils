import * as vscode from 'vscode'
import { matchAll, getReferenceAtPosition } from '../util/utils'
import { JoplinLinkRegex } from '../util/constant'
import { wrapLink } from '../util/useJoplinLink'
import { TypeEnum, noteApi, resourceApi } from 'joplin-api'
import { formatSize } from '../util/formatSize'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import { GlobalContext } from '../state/GlobalContext'
import { logger } from '../constants/logger'

export class JoplinMarkdownLinkProvider implements vscode.DocumentLinkProvider, vscode.HoverProvider {
  async resolveDocumentLink(link: vscode.DocumentLink, token: vscode.CancellationToken): Promise<vscode.DocumentLink> {
    logger.info('resolveDocumentLink: ', link, token)
    return link
  }
  async provideDocumentLinks(document: vscode.TextDocument) {
    if (!GlobalContext.openNoteMap.has(document.fileName)) {
      return
    }
    const lines = document.getText().split(/\r?\n/g)
    const res = lines.flatMap((line, i) => this.getLinksOnLine(line, i))
    logger.info('provideDocumentLinks: ', res)
    return res
  }

  private getLinksOnLine(line: string, lineNum: number) {
    const results: vscode.DocumentLink[] = []
    for (const match of matchAll(/(\[.*\]\()(.+)\)/g, line)) {
      const markdownTokenLink = match[2]
      if (markdownTokenLink) {
        const offset = (match.index || 0) + match[1].length
        const linkStart = new vscode.Position(lineNum, offset)
        const linkEnd = new vscode.Position(lineNum, offset + markdownTokenLink.length)

        let link: string
        if (JoplinLinkRegex.test(markdownTokenLink)) {
          const id = JoplinLinkRegex.exec(markdownTokenLink)![1]
          const resourceIdList = new Set([...GlobalContext.openNoteResourceMap.values()].flat().map((item) => item.id))
          if (resourceIdList.has(id)) {
            link = wrapLink(id, TypeEnum.Resource)
            logger.info('getLinksOnLine 是资源: ' + link)
          } else {
            link = wrapLink(id, TypeEnum.Note)
            logger.info('getLinksOnLine 是笔记链接: ' + link)
          }
        } else {
          logger.info('getLinksOnLine 是普通链接：' + markdownTokenLink)
          // 如果是普通链接则应该跳过它
          continue
        }

        const documentLink = new vscode.DocumentLink(new vscode.Range(linkStart, linkEnd), vscode.Uri.parse(link))

        documentLink.tooltip = 'Follow link'

        results.push(documentLink)
      }
    }
    return results
  }

  async provideHover(document: vscode.TextDocument, position: vscode.Position) {
    if (!GlobalContext.openNoteMap.has(document.fileName)) {
      return
    }
    logger.info('provideHover: ', document)
    const markdownTokenLink = getReferenceAtPosition(document, position)
    if (!markdownTokenLink || !JoplinLinkRegex.test(markdownTokenLink)) {
      return
    }
    let content: string[]
    const id = JoplinLinkRegex.exec(markdownTokenLink)![1]
    const resourceIdList = new Set([...GlobalContext.openNoteResourceMap.values()].flat().map((item) => item.id))
    if (resourceIdList.has(id)) {
      const resource = await resourceApi.get(id, ['id', 'title', 'size'])
      content = [resource.title, formatSize(resource.size)]
      logger.info('provideHover 是资源: ', resource)
    } else {
      const note = await noteApi.get(id)
      const title = note.title
      content = [JoplinNoteUtil.trimTitleStart(title)]
      logger.info('provideHover 是笔记链接: ', note)
    }
    logger.info('provideHover: ', content)
    return new vscode.Hover(content)
  }
}
