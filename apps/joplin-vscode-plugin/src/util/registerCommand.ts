import * as vscode from 'vscode'
import { Disposable } from 'vscode'

const outputChannel = vscode.window.createOutputChannel('joplin-vscode-plugin')

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
      try {
        return await callback(...args)
      } catch (e) {
        outputChannel.appendLine(
          'command error: ' +
            command +
            (e instanceof Error
              ? JSON.stringify({
                  name: e.name,
                  message: e.message,
                  stack: e.stack,
                })
              : JSON.stringify(e)),
        )
        outputChannel.show()
        throw e
      }
    },
    thisArg,
  )
}
