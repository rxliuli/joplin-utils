import { ResourceGetRes } from 'joplin-api/dist/modal/ResourceGetRes'
import * as vscode from 'vscode'
import { HandlerService } from '../service/HandlerService'
import { BiMultiMap } from '../util/BiMultiMap'

/**
 * 全局状态
 */
export class GlobalContext {
  static context: vscode.ExtensionContext
  // 正在编辑的笔记
  static readonly openNoteMap = new BiMultiMap<string, string>()
  // 正在编辑的资源
  static readonly openResourceMap = new BiMultiMap<string, string>()
  // 正在编辑的笔记的资源
  static readonly openNoteResourceMap = new Map<string, ResourceGetRes[]>()
  static handlerService: HandlerService
}
