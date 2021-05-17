import * as vscode from 'vscode'

/**
 * 全局状态
 */
class GlobalState {
  context!: vscode.ExtensionContext
}

export const globalState = new GlobalState()
