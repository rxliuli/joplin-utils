import * as vscode from 'vscode'
import * as winston from 'winston'

/**
 * 日志记录
 */
class Logger {
  readonly winstonLogger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp(),
      winston.format.printf(
        ({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`,
      ),
    ),
    transports: [
      // transports
      new winston.transports.Console(),
    ],
  })
  private originConsole = Object.assign({}, console)
  private vscodeLogger = vscode.window.createOutputChannel(
    'joplin-vscode-plugin',
  )

  log(msg: string, ...options: any[]) {
    this.originConsole.info(msg, ...options)
    const winstonMsg =
      options.length === 0
        ? msg
        : [msg, ...options]
            .map((s) => {
              if (['string', 'number', 'boolean'].includes(typeof s)) {
                return s.toString()
              } else {
                return JSON.stringify(s)
              }
            })
            .join('')
    const vscodeMsg = '[info] ' + winstonMsg
    this.winstonLogger.info(winstonMsg)
    this.vscodeLogger.appendLine(vscodeMsg)
  }
  warn(msg: string, ...options: any[]) {
    this.originConsole.warn(msg, ...options)
    this.winstonLogger.warn(msg)
    this.vscodeLogger.appendLine('[warn] ' + msg)
  }
  error(msg: string, ...options: any[]) {
    this.originConsole.error(msg, ...options)
    this.winstonLogger.error(msg)
    this.vscodeLogger.appendLine('[error] ' + msg)
  }
}

export const logger = new Logger()

Reflect.set(console, 'log', logger.log.bind(logger))
Reflect.set(console, 'info', logger.log.bind(logger))
Reflect.set(console, 'warn', logger.warn.bind(logger))
Reflect.set(console, 'error', logger.error.bind(logger))
