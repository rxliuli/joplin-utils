import { ResourceGetRes } from 'joplin-api/dist/modal/ResourceGetRes'
import * as vscode from 'vscode'
import { HandlerService } from '../service/HandlerService'
import { BiMultiMap } from '../util/BiMultiMap'

/**
 * 全局状态
 */
export class GlobalContext {
  static context: vscode.ExtensionContext
  static readonly openNoteMap = new BiMultiMap<string, string>()
  static readonly openNoteResourceMap = new Map<string, ResourceGetRes[]>()
  static handlerService: HandlerService
}
