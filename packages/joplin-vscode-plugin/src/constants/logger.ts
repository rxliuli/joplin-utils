import path from 'path'
import * as winston from 'winston'

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [new winston.transports.Console({ format: winston.format.json() })],
})

export function initLogger(logPath: string) {
  logger
    .add(new winston.transports.File({ filename: path.resolve(logPath, 'error.log'), level: 'error' }))
    .add(new winston.transports.File({ filename: path.resolve(logPath, 'combined.log'), level: 'info' }))
}
