import * as vscode from 'vscode'
import * as Sentry from '@sentry/node'
import * as os from 'os'
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
      const transaction = Sentry.startTransaction({
        op: command,
        name: os.userInfo().username,
      })
      try {
        return await callback(...args)
      } catch (e) {
        Sentry.captureException(e)
      } finally {
        transaction.finish()
      }
    },
    thisArg,
  )
}
