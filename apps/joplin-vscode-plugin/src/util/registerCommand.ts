import * as vscode from 'vscode'
import { Disposable } from 'vscode'

/**
 * 注册一个 vscode 的命令，封装日志相关的处理
 * @param command
 * @param callback
 * @param thisArg
 */
export function registerCommand(
  command: string,
  callback: (...args: any[]) => any,
  thisArg?: any,
): Disposable {
  return vscode.commands.registerCommand(
    command,
    async (...args: any[]) => {
      return await callback(...args)
    },
    thisArg,
  )
}
