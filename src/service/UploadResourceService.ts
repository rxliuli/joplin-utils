import * as vscode from 'vscode'
import { window } from 'vscode'
import { UploadResourceUtil } from '../util/UploadResourceUtil'

export class UploadImageService {
  async uploadImageFromClipboard() {
    const clipboardImage = await UploadResourceUtil.getClipboardImage()
    if (!clipboardImage.isExistFile) {
      vscode.window.showWarningMessage('Clipboard does not contain picture!')
      return
    }
    const markdownLink = await UploadResourceUtil.uploadImageByPath(
      clipboardImage.imgPath,
    )
    this.insertUrlByActiveEditor(markdownLink)
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
    this.insertUrlByActiveEditor(markdownLink)
  }
  async uploadFileFromExplorer(): Promise<string | void | Error> {
    const result = (await vscode.window.showOpenDialog({
      canSelectMany: false,
    })) as vscode.Uri[]

    if (!result || result.length === 0) {
      return
    }
    const file = result[0]
    const markdownLink = await UploadResourceUtil.uploadFileByPath(file.fsPath)
    this.insertUrlByActiveEditor(markdownLink)
  }

  insertUrlByActiveEditor(text: string) {
    this.editor.edit((textEditor) => {
      textEditor.replace(this.editor.selection, text)
      vscode.window.showInformationMessage(`file uploaded successfully.`)
    })
  }

  get editor(): vscode.TextEditor {
    const editor = vscode.window.activeTextEditor
    if (!editor) {
      window.showErrorMessage('No active editor')
    }
    return editor as vscode.TextEditor
  }
}

export const uploadImageService = new UploadImageService()
