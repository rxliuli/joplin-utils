import { initSentry } from './initSentry'
import { initDevEnv } from './initDevEnv'
import { initI18n } from './initI18n'

export function init() {
  initSentry()
  initDevEnv()
  initI18n()
}
