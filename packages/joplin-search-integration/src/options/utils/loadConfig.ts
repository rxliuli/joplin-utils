import browser from 'webextension-polyfill'

export interface LocalConfig {
  baseUrl: string
  token?: string
  theme: 'light' | 'dark'
  searxUrls: string[]
}

export async function loadConfig(): Promise<LocalConfig> {
  const c = ((await browser.storage.local.get(['baseUrl', 'token', 'theme', 'searxUrls'])) ?? {}) as LocalConfig
  return {
    baseUrl: c.baseUrl ?? 'http://127.0.0.1:41184',
    token: c.token,
    theme: c.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
    searxUrls: c.searxUrls ?? [],
  }
}
