import * as vscode from 'vscode'
import { window } from 'vscode'
import { globalState } from '../state/GlobalState'
import { UploadResourceUtil } from '../util/UploadResourceUtil'
import { i18n } from '../util/I18n'

export class UploadResourceService {
  async uploadImageFromClipboard() {
    const globalStoragePath = globalState.context.globalStorageUri.fsPath
    const clipboardImage = await UploadResourceUtil.getClipboardImage(
      globalStoragePath,
    )
    if (!clipboardImage.isExistFile) {
      vscode.window.showWarningMessage(
        i18n.t('Clipboard does not contain picture!'),
      )
      return
    }
    const markdownLink = await UploadResourceUtil.uploadImageByPath(
      clipboardImage.imgPath,
    )
    await this.insertUrlByActiveEditor(markdownLink)
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
    const markdownLink = await UploadResourceUtil.uploadImageByPath(file.fsPath)
    await this.insertUrlByActiveEditor(markdownLink)
  }

  async uploadFileFromExplorer(): Promise<string | void | Error> {
    const result = (await vscode.window.showOpenDialog({
      canSelectMany: false,
    })) as vscode.Uri[]

    if (!result || result.length === 0) {
      return
    }
    const file = result[0]
    const { markdownLink } = await UploadResourceUtil.uploadFileByPath(
      file.fsPath,
    )
    await this.insertUrlByActiveEditor(markdownLink)
    vscode.window.showInformationMessage(i18n.t('file uploaded successfully'))
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
      window.showErrorMessage(i18n.t('No active editor'))
    }
    return editor as vscode.TextEditor
  }
}

export const uploadResourceService = new UploadResourceService()
