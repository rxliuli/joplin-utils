import * as vscode from 'vscode'
import { TextDocument, Uri } from 'vscode'
import { noteApi, resourceApi } from 'joplin-api'
import { parse } from 'querystring'
import { JoplinNoteCommandService } from './JoplinNoteCommandService'
import { JoplinNoteUtil } from '../util/JoplinNoteUtil'
import { OpenFileService } from '../util/OpenFileService'
import { safePromise } from '../util/safePromise'
import path from 'path'
import { t } from '../constants/i18n'
import { GlobalContext } from '../constants/context'
import { remove, writeFile } from '@liuli-util/fs-extra'
import { filenamify } from '../util/filenamify'
import { logger } from '../constants/logger'
import { fileSuffix } from '../util/fileSuffix'

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
    if (
      e.languageId === 'markdown' &&
      path.dirname(e.uri.fsPath) === path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempNote')
    ) {
      const noteId = JoplinNoteUtil.getNoteIdByFileName(e.fileName)
      if (!noteId) {
        return
      }
      logger.info(`close note, noteId: ${noteId}, fileName: ${path.basename(e.fileName)}`)
      await remove(e.fileName)
      GlobalContext.openNoteMap.delete(noteId)
      GlobalContext.openNoteResourceMap.delete(noteId)
    } else if (GlobalContext.openResourceMap.has(e.uri.fsPath)) {
      const resourceId = GlobalContext.openResourceMap.get(e.fileName)!
      logger.info(`close resource, id: ${resourceId}, fileName: ${path.basename(e.fileName)}`)
      await remove(e.fileName)
      GlobalContext.openResourceMap.delete(resourceId)
    }
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
        vscode.window.showErrorMessage(t('Unprocessable link'))
    }
  }

  private readonly openFileService = new OpenFileService()

  async openResource(id: string) {
    logger.info('HandlerService.openResource: ' + id)
    const resource = await safePromise(resourceApi.get(id, ['id', 'title', 'filename', 'file_extension']))
    if (!resource) {
      logger.warn('HandlerService.openResource: Resource does not exist')
      vscode.window.showWarningMessage(t('Resource does not exist'))
      return
    }
    if (GlobalContext.openResourceMap.has(id)) {
      logger.info('HandlerService.openResource: Resource opened')
      const filePath = GlobalContext.openResourceMap.get(id)!
      await this.openFileService.openByVSCode(filePath)
      return
    }
    // 如果标题包含后缀则不再拼接后缀名（后缀名其实也是不准的）
    const fileName =
      resource.filename ||
      (/\..*$/.test(resource.title) ? resource.title : resource.title + '.' + resource.file_extension)
    const tempResourceDirPath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempResource')
    let filePath = path.resolve(tempResourceDirPath, filenamify(fileName))
    if (GlobalContext.openResourceMap.has(filePath)) {
      filePath = fileSuffix(filePath, resource.id)
    }
    const buffer = await resourceApi.fileByResourceId(id)
    await writeFile(filePath, buffer)
    GlobalContext.openResourceMap.set(id, filePath)
    logger.info('HandlerService.openResource open file: ' + filePath)
    await this.openFileService.openByVSCode(filePath)
  }

  async openNote(id: string) {
    logger.info('HandlerService.openNote: ' + id)
    if (!id) {
      vscode.window.showWarningMessage(t('id cannot be empty'))
      return
    }
    const item = await safePromise(noteApi.get(id, ['id', 'parent_id', 'title', 'is_todo', 'todo_completed']))
    if (!item) {
      vscode.window.showWarningMessage(t('Note does not exist'))
      return
    }
    await this.joplinNoteCommandService.openNote(item)
  }
}
