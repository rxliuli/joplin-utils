import { TextDocument } from 'vscode'
import { actionApi } from 'joplin-api'
import { safeExec } from '../util/safeExec'

class HandlerService {
  /**
   * close note watch
   * @param e
   */
  async handleCloseTextDocument(e: TextDocument) {
    console.log('vscode.workspace.onDidCloseTextDocument: ', e)
    const noteId = safeExec(
      () => new RegExp('/edit-(\\w+)\\.md$').exec(e.uri.path)![1],
    )
    if (e.languageId !== 'markdown' || noteId === null) {
      return
    }
    console.log('close note: ', noteId)
    await actionApi.stopWatching(noteId)
  }
}

export const handlerService = new HandlerService()
