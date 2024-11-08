import * as vscode from 'vscode'
import { Disposable } from 'vscode'
import { logger } from '../constants/logger'
import { checkJoplinServer } from './checkJoplinServer'
import { serializeError } from 'serialize-error'

const outputChannel = vscode.window.createOutputChannel('joplin-vscode-plugin')

/**
 * 注册一个 vscode 的命令，封装日志相关的处理
 * @param command
 * @param callback
 * @param thisArg
 */
export function registerCommand(command: string, callback: (...args: any[]) => any, thisArg?: any): Disposable {
  return vscode.commands.registerCommand(
    command,
    async (...args: any[]) => {
      try {
        logger.info('command execute: ' + command)
        return await callback(...args)
      } catch (err) {
        if (
          err instanceof Error &&
          err.message.startsWith('status: 403, url: http://localhost:41184/') &&
          err.message.includes('Missing \\"token\\" parameter')
        ) {
          await checkJoplinServer()
          return
        }
        logger.error('command error: ' + command + ', ' + serializeError(err))
        throw err
      }
    },
    thisArg,
  )
}
