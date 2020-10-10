import { TextDocument, Uri } from 'vscode'
import { actionApi, noteApi, resourceApi, TypeEnum } from 'joplin-api'
import { safeExec } from '../util/safeExec'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { openFileByOS } from '../util/openFileByOS'
import path = require('path')

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
    const id = parse(uri.query).id as string
    switch (uri.path) {
      case '/open':
        await this.openNote(id)
        break
      case '/resource':
        await HandlerService.openResource(id)
        break
      default:
        vscode.window.showErrorMessage('无法处理的链接')
    }
  }

  private static async openResource(id: string) {
    const resource = await resourceApi.get(id)
    const fileName = resource.id + '.' + resource.file_extension
    console.log('open file: ', fileName)
    openFileByOS(
      path.resolve('D:/Program/Joplin', 'JoplinProfile/resources', fileName),
    )
  }

  private async openNote(id: string) {
    if (!id) {
      vscode.window.showWarningMessage('id cannot be empty')
      return
    }
    const item = await noteApi.get(id)
    if (!item) {
      vscode.window.showWarningMessage('id does not exist')
      return
    }
    if (item.type_ !== TypeEnum.Note) {
      vscode.window.showWarningMessage('id is not a note')
      return
    }
    await this.joplinNoteCommandService.openNote(new FolderOrNote(item) as any)
  }
}
