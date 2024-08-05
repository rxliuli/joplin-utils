import path from 'path'
import * as winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.prettyPrint(),
  transports: [new winston.transports.Console({ format: winston.format.prettyPrint() })],
})

export function initLogger(logPath: string) {
  logger
    .add(new winston.transports.File({ filename: path.resolve(logPath, 'error.log'), level: 'error' }))
    .add(new winston.transports.File({ filename: path.resolve(logPath, 'info.log'), level: 'info' }))
}
