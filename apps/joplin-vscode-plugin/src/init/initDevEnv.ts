import { appConfig } from '../config/AppConfig'
import { config } from 'joplin-api'

export function initDevEnv() {
  console.log(
    'process.env: ',
    process.env.DEBUG,
    process.env.JOPLIN_TOKEN,
    process.env.JOPLIN_PORT,
  )
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  // rxliuli: do not insert your own vars to the code. Use something else for that
  // such as ENV vars or, at least, do not commit them to the final code. (you
  // could also use different branch for that). These configs were messing up
  // with my use of the source code, for instance.
  config.token = appConfig.token = process.env.JOPLIN_TOKEN!
  config.port = appConfig.port = Number.parseInt(process.env.JOPLIN_PORT!)
  appConfig.programProfilePath = process.env.JOPLIN_PROFILE_PATH!
}
