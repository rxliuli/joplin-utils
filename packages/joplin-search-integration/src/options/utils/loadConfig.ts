import browser from 'webextension-polyfill'

export interface LocalConfig {
  baseUrl: string
  token?: string
  theme: 'light' | 'dark'
}

export function getDefault(): LocalConfig {
  return {
    baseUrl: 'http://127.0.0.1:41184',
    theme: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
  }
}

export async function loadConfig(): Promise<LocalConfig> {
  const c = ((await browser.storage.local.get(['baseUrl', 'token', 'theme'])) ?? {}) as LocalConfig
  const d = getDefault()
  return {
    baseUrl: c.baseUrl ?? d.baseUrl,
    token: c.token,
    theme: c.theme ?? d.theme,
  }
}
