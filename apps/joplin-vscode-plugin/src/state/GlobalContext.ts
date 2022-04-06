import * as vscode from 'vscode'
import { NoteExplorerProvider } from '../model/NoteExplorerProvider'
import { HandlerService } from '../service/HandlerService'
import { BiMultiMap } from '../util/BiMultiMap'

/**
 * 全局状态
 */
export class GlobalContext {
  static context: vscode.ExtensionContext
  static readonly openNoteMap = new BiMultiMap<string, string>()
  static handlerService: HandlerService
}
