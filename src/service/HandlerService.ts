import { TextDocument, Uri } from 'vscode'
import { actionApi, noteApi, resourceApi, TypeEnum } from 'joplin-api'
import { safeExec } from '../util/safeExec'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { openFileByOS } from '../util/openFileByOS'
import path = require('path')
import { appConfig } from '../config/AppConfig'

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

  static async openResource(id: string) {
    if (!appConfig.programPath) {
      vscode.window.showWarningMessage(
        'Please fill in the joplin installation directory',
      )
      return
    }
    const resource = await resourceApi.get(id, ['id', 'file_extension'])
    const fileName = resource.id + '.' + resource.file_extension
    const filePath = path.resolve(
      appConfig.programPath,
      'JoplinProfile/resources',
      fileName,
    )
    console.log('open file: ', filePath)
    openFileByOS(filePath)
  }

  async openNote(id: string) {
    if (!id) {
      vscode.window.showWarningMessage('id cannot be empty')
      return
    }
    const item = await noteApi.get(id, [
      'id',
      'parent_id',
      'title',
      'is_todo',
      'todo_completed',
    ])
    if (!item) {
      vscode.window.showWarningMessage('id does not exist')
      return
    }
    await this.joplinNoteCommandService.openNote(
      new FolderOrNote({
        ...item,
        type_: TypeEnum.Note,
      }) as any,
    )
  }
}
