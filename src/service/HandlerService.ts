import { TextDocument, Uri } from 'vscode'
import { actionApi, noteApi, TypeEnum } from 'joplin-api'
import { safeExec } from '../util/safeExec'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'

/**
 * other service
 */
export class HandlerService {
  constructor(private joplinNoteCommandService: JoplinNoteCommandService) {}

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

  async uriHandler(uri: Uri) {
    console.log('uriHandler: ', uri)
    switch (uri.path) {
      case '/open':
        const id = parse(uri.query).id as string
        if (!id) {
          vscode.window.showWarningMessage('id 不能为空')
          return
        }
        const item = await noteApi.get(id)
        if (!item) {
          vscode.window.showWarningMessage('id 不存在')
          return
        }
        if (item.type_ !== TypeEnum.Note) {
          vscode.window.showWarningMessage('id 不是一个 note')
          return
        }
        await this.joplinNoteCommandService.openNote(
          new FolderOrNote(item) as any,
        )
        break
    }
  }
}
