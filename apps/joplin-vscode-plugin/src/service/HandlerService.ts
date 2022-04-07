import * as vscode from 'vscode'
import { TextDocument, Uri } from 'vscode'
import { noteApi, resourceActionApi, resourceApi, TypeEnum } from 'joplin-api'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { FolderOrNote } from '../model/FolderOrNote'
import { appConfig } from '../config/AppConfig'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import { OpenFileService } from '../util/OpenFileService'
import { safePromise } from '../util/safePromise'
import path from 'path'
import { i18n } from '../constants/i18n'
import { GlobalContext } from '../state/GlobalContext'
import { remove } from 'fs-extra'

/**
 * other service
 */
export class HandlerService {
  constructor(private joplinNoteCommandService: JoplinNoteCommandService) {}

  private readonly openResourceMap = new Map<string, string[]>()

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
    await remove(e.fileName)
    GlobalContext.openNoteMap.delete(noteId)
    GlobalContext.openNoteResourceMap.delete(noteId)
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
        vscode.window.showErrorMessage(i18n.t('Unprocessable link'))
    }
  }

  private readonly openFileService = new OpenFileService()

  async openResource(id: string) {
    if (!appConfig.programProfilePath) {
      vscode.window.showWarningMessage(i18n.t("Please set up Joplin's personal directory"))
      return
    }
    const resource = await safePromise(resourceApi.get(id, ['id', 'title', 'filename', 'file_extension']))
    if (!resource) {
      vscode.window.showWarningMessage(i18n.t('Resource does not exist'))
      return
    }
    // 如果标题包含后缀则不再拼接后缀名（后缀名其实也是不准的）
    const fileName =
      resource.filename ||
      (/\..*$/.test(resource.title) ? resource.title : resource.title + '.' + resource.file_extension)
    const filePath = path.resolve(appConfig.programProfilePath, 'tmp/edited_resources', fileName)
    await resourceActionApi.watch(resource.id)
    const noteId = JoplinNoteUtil.getNoteIdByFileName(vscode.window.activeTextEditor?.document.fileName)
    console.log('open file: ', filePath, noteId, resource.id)
    const isWatch = await resourceActionApi.noteIsWatched(resource.id)
    if (isWatch) {
      vscode.window.showInformationMessage(
        i18n.t('Start monitoring attachment resource modification: ') + resource.title,
      )
    }
    // this.openResourceMap.set(noteId!, resource.id)
    // await this.openFileService.openFileByOS(filePath)
    await this.openFileService.openByVSCode(filePath)
  }

  async openNote(id: string) {
    if (!id) {
      vscode.window.showWarningMessage(i18n.t('id cannot be empty'))
      return
    }
    const item = await safePromise(noteApi.get(id, ['id', 'parent_id', 'title', 'is_todo', 'todo_completed']))
    if (!item) {
      vscode.window.showWarningMessage(i18n.t('Note does not exist'))
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
