import path from 'path'
import * as vscode from 'vscode'
import { logger } from '../constants/logger'
import { GlobalContext } from '../state/GlobalContext'
import { UploadResourceUtil } from '../util/UploadResourceUtil'
import { uploadResourceService } from './UploadResourceService'

const uriListMime = 'text/uri-list'

/**
 * Provider that reverses dropped text.
 *
 * Note this does not apply to text that is drag and dropped with-in the current editor,
 * only for text dropped from external apps.
 */
export class ReverseTextOnDropProvider implements vscode.DocumentDropEditProvider {
  async provideDocumentDropEdits(
    _document: vscode.TextDocument,
    position: vscode.Position,
    dataTransfer: vscode.DataTransfer,
    token: vscode.CancellationToken,
  ): Promise<vscode.DocumentDropEdit | undefined> {
    if (!GlobalContext.openNoteMap.has(_document.fileName)) {
      logger.info('ReverseTextOnDropProvider.provideDocumentDropEdits not joplin note')
      return
    }
    const item = dataTransfer.get('text/uri-list')
    if (!item) {
      logger.info("ReverseTextOnDropProvider.provideDocumentDropEdits don't get uri")
      return
    }
    const uri = vscode.Uri.parse(item.value)
    const fileName = uri.fsPath
    console.log('ReverseTextOnDropProvider', fileName)
    const imageExts = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'tiff', 'ico']
    const isImage = imageExts.includes(path.extname(fileName).slice(1))
    const { markdownLink, res } = await UploadResourceUtil.uploadByPath(fileName, isImage)
    await uploadResourceService.refreshResourceList(res.id)

    const snippet = new vscode.SnippetString()
    snippet.appendText(markdownLink)
    return { insertText: snippet }
  }
}
