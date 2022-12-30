export interface LocalConfig {
  baseUrl: string
  token?: string
  theme: 'light' | 'dark'
}

export async function loadConfig(): Promise<LocalConfig> {
  const c = ((await chrome.storage.local.get(['baseUrl', 'token', 'theme'])) ?? {}) as LocalConfig
  return {
    baseUrl: c.baseUrl ?? 'http://127.0.0.1:41184',
    token: c.token,
    theme: c.theme ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  }
}
