import { LocalConfig } from './loadConfig'

export function setTheme(t: LocalConfig['theme']) {
  document.documentElement.classList.toggle('dark', t === 'dark')
}
