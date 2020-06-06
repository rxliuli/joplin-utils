import * as vscode from 'vscode'

class VSCodeMarkdownFileApi {
  async open(path: string) {
    //TODO 此处没有效果
    const uri = vscode.Uri.file(path)
    vscode.workspace.openTextDocument(uri)
  }
}

export const vscodeMarkdownFileApi = new VSCodeMarkdownFileApi()
