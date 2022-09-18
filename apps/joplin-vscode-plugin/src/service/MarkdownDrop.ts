import { noteApi } from 'joplin-api'
import path from 'path'
import * as vscode from 'vscode'
import { logger } from '../constants/logger'
import { GlobalContext } from '../state/GlobalContext'
import { UploadResourceUtil } from '../util/UploadResourceUtil'
import { uploadResourceService } from './UploadResourceService'

/**
 * Provider that reverses dropped text.
 *
 * Note this does not apply to text that is drag and dropped with-in the current editor,
 * only for text dropped from external apps.
 */
export class JoplinNoteOnDropProvider implements vscode.DocumentDropEditProvider {
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
    let item = dataTransfer.get('text/uri-list')
    if (item) {
      return this.dragFile(item)
    }
    item = dataTransfer.get('application/vnd.code.tree.joplin')
    if (item) {
      return this.dragTreeItem(item)
    }
    return { insertText: '' }
  }
  private async dragTreeItem(item: vscode.DataTransferItem): Promise<vscode.DocumentDropEdit | undefined> {
    const id = JSON.parse(item.value).itemHandles[0].split('/')[1]
    if (id) {
      try {
        const note = await noteApi.get(id)
        return { insertText: `[${note.title}](:/${note.id})` }
      } catch {}
    }
    console.log('joplin tree drag: ', item)
  }
  private async dragFile(item: vscode.DataTransferItem): Promise<vscode.DocumentDropEdit | undefined> {
    const uri = vscode.Uri.parse(item.value)
    const fsPath = uri.fsPath
    console.log('ReverseTextOnDropProvider', fsPath)
    const imageExts = ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'tiff', 'ico']
    const isImage = imageExts.includes(path.extname(fsPath).slice(1))
    const { markdownLink, res } = await UploadResourceUtil.uploadByPath(fsPath, isImage)
    await uploadResourceService.refreshResourceList(res.id)

    const snippet = new vscode.SnippetString()
    snippet.appendText(markdownLink)
    return { insertText: snippet }
  }
}
