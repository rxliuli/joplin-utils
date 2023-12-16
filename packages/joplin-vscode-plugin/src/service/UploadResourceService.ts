import * as vscode from 'vscode'
import { window } from 'vscode'
import { GlobalContext } from '../constants/context'
import { UploadResourceUtil } from '../util/UploadResourceUtil'
import { t } from '../constants/i18n'
import { resourceApi } from 'joplin-api'
import { logger } from '../constants/logger'

export class UploadResourceService {
  async uploadImageFromClipboard() {
    const globalStoragePath = GlobalContext.context.globalStorageUri.fsPath
    let imagePath: string
    try {
      imagePath = await UploadResourceUtil.getClipboardImage(globalStoragePath)
    } catch (e) {
      logger.error('getClipboardImage error', e)
      if ((e as Error).message === 'no xclip') {
        vscode.window.showErrorMessage(t('upload.error.no-xclip'))
        return
      }
      if ((e as Error).message === 'no wl-clipboard') {
        vscode.window.showErrorMessage(t('upload.error.no-wl-clipboard'), 'https://github.com/bugaevc/wl-clipboard')
        return
      }
      vscode.window.showWarningMessage(t('Clipboard does not contain picture!'))
      throw e
    }
    const { markdownLink, res } = await UploadResourceUtil.uploadByPath(imagePath, true)
    await Promise.all([this.insertUrlByActiveEditor(markdownLink), this.refreshResourceList(res.id)])
  }

  async uploadImageFromExplorer(): Promise<string | void | Error> {
    const result = (await vscode.window.showOpenDialog({
      filters: {
        Images: ['png', 'jpg', 'jpeg', 'webp', 'gif', 'bmp', 'tiff', 'ico'],
      },
      canSelectMany: false,
    })) as vscode.Uri[]

    if (!result || result.length === 0) {
      return
    }
    const file = result[0]
    const { markdownLink, res } = await UploadResourceUtil.uploadByPath(file.fsPath, true)
    await Promise.all([this.insertUrlByActiveEditor(markdownLink), this.refreshResourceList(res.id)])
  }

  async uploadFileFromExplorer(): Promise<string | void | Error> {
    const result = (await vscode.window.showOpenDialog({
      canSelectMany: false,
    })) as vscode.Uri[]

    if (!result || result.length === 0) {
      return
    }
    const file = result[0]
    const { res, markdownLink } = await UploadResourceUtil.uploadByPath(file.fsPath, false)
    await Promise.all([this.insertUrlByActiveEditor(markdownLink), this.refreshResourceList(res.id)])
    vscode.window.showInformationMessage(t('file uploaded successfully'))
  }

  async refreshResourceList(id: string) {
    const noteId = GlobalContext.openNoteMap.get(this.editor.document.uri.fsPath)
    if (!noteId) {
      console.error('找不到 noteId', this.editor.document.uri.fsPath)
      return
    }
    if (!GlobalContext.openNoteResourceMap.has(noteId)) {
      console.error('找不到打开笔记对应的资源列表: ', noteId)
      return
    }
    const resourceList = GlobalContext.openNoteResourceMap.get(noteId)!
    if (!resourceList.some((item) => item.id === id)) {
      resourceList.push(await resourceApi.get(id))
    }
    GlobalContext.openNoteResourceMap.set(noteId, resourceList)
  }

  insertUrlByActiveEditor(text: string) {
    return new Promise<void>((resolve) => {
      this.editor.edit((textEditor) => {
        textEditor.replace(this.editor.selection, text)
        resolve()
      })
    })
  }

  get editor(): vscode.TextEditor {
    const editor = vscode.window.activeTextEditor
    if (!editor) {
      window.showErrorMessage(t('No active editor'))
    }
    return editor as vscode.TextEditor
  }
}

export const uploadResourceService = new UploadResourceService()
