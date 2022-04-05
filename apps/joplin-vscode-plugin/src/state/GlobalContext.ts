import * as vscode from 'vscode'
import { NoteExplorerProvider } from '../model/NoteExplorerProvider'

/**
 * 全局状态
 */
export class GlobalContext {
  static context: vscode.ExtensionContext
}
