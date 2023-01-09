import { initDevEnv } from './initDevEnv'
import { initI18n } from './initI18n'

export async function init() {
  initDevEnv()
  await initI18n()
}
