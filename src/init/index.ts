import { initSentry } from './initSentry'
import { initDevEnv } from './initDevEnv'
import { initI18n } from './initI18n'

export async function init() {
  initSentry()
  initDevEnv()
  await initI18n()
}
