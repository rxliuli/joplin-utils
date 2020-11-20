import { TextDocument, Uri } from 'vscode'
import {
  noteActionApi,
  noteApi,
  resourceActionApi,
  resourceApi,
  TypeEnum,
} from 'joplin-api'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import * as vscode from 'vscode'
import { openFileByOS } from '../util/openFileByOS'
import path = require('path')
import { appConfig } from '../config/AppConfig'
import { BiMultiMap } from '../util/BiMultiMap'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'

/**
 * other service
 */
export class HandlerService {
  constructor(private joplinNoteCommandService: JoplinNoteCommandService) {}

  private readonly openResourceMap = new BiMultiMap<string, string>()

  /**
   * close note watch
   * @param e
   */
  async handleCloseTextDocument(e: TextDocument) {
    console.log('vscode.workspace.onDidCloseTextDocument: ', e)
    const noteId = JoplinNoteUtil.getNoteIdByFileName(e.fileName)
    if (!noteId) {
      return
    }
    console.log('close note: ', noteId)
    const note = await noteApi.get(noteId)
    await noteActionApi.stopWatching(noteId)
    this.openResourceMap.deleteByKey(noteId)
    const resourceIdList = this.openResourceMap.getByKey(noteId)
    await Promise.all(
      resourceIdList.map((resourceId) =>
        resourceActionApi.stopWatching(resourceId),
      ),
    )
    vscode.window.showInformationMessage(
      `Turn off monitoring of attachment resources in the note [${note.title}]`,
    )
  }

  async uriHandler(uri: Uri) {
    console.log('uriHandler: ', uri)
    const id = parse(uri.query).id as string
    switch (uri.path) {
      case '/open':
        await this.openNote(id)
        break
      case '/resource':
        await this.openResource(id)
        break
      default:
        vscode.window.showErrorMessage('Unprocessable link')
    }
  }

  async openResource(id: string) {
    if (!appConfig.programProfilePath) {
      vscode.window.showWarningMessage(
        "Please set up Joplin's personal directory",
      )
      return
    }
    const resource = await resourceApi.get(id, [
      'id',
      'title',
      'file_extension',
    ])
    const fileName = resource.id + '.' + resource.file_extension
    const filePath = path.resolve(
      appConfig.programProfilePath,
      'resources',
      fileName,
    )
    await resourceActionApi.watch(resource.id)
    const noteId = JoplinNoteUtil.getNoteIdByFileName(
      vscode.window.activeTextEditor?.document.fileName,
    )
    console.log('open file: ', filePath, noteId, resource.id)
    const isWatch = await resourceActionApi.noteIsWatched(resource.id)
    if (isWatch) {
      vscode.window.showInformationMessage(
        'Start monitoring attachment resource modification: ' + resource.title,
      )
    }
    this.openResourceMap.set(id, resource.id)
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
