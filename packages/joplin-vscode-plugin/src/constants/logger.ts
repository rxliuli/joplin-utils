import { createLogger, format, transports } from 'winston'
import json from '../../package.json'

export const logger = createLogger({
  level: 'info',
  format: format.json(),
  defaultMeta: { pluginVersion: json.version },
})

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new transports.Console({
      format: format.simple(),
    }),
  )
}
