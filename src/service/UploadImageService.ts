import * as vscode from 'vscode'
import { window } from 'vscode'
import { UploadImageUtil } from '../util/UploadImageUtil'

export class UploadImageService {
  async uploadImageFromClipboard() {
    const clipboardImage = await UploadImageUtil.getClipboardImage()
    if (!clipboardImage.isExistFile) {
      vscode.window.showWarningMessage('剪切板没有检查到图片')
      return
    }
    const markdownLink = await UploadImageUtil.uploadImageByPath(
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
    const markdownLink = await UploadImageUtil.uploadImageByPath(file.fsPath)
    this.insertUrlByActiveEditor(markdownLink)
  }

  insertUrlByActiveEditor(text: string) {
    this.editor.edit((textEditor) => {
      textEditor.replace(this.editor.selection, text)
      vscode.window.showInformationMessage(`image uploaded successfully.`)
    })
  }

  get editor(): vscode.TextEditor {
    const editor = vscode.window.activeTextEditor
    if (!editor) {
      window.showErrorMessage('没有活动的编辑器')
    }
    return editor as vscode.TextEditor
  }
}

export const uploadImageService = new UploadImageService()
