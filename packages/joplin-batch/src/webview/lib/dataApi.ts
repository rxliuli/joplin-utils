import { getEnv } from 'jpl-vite'
import { webviewJoplinDataApi } from './webviewDataApi'
import { joplinDataApi } from 'joplin-api'

export function getSettings(): { baseUrl?: string; token?: string } {
  const s = localStorage.getItem('joplin-batch-settings')
  if (!s) {
    return {
      baseUrl: 'http://localhost:41184',
    }
  }
  try {
    return JSON.parse(s)
  } catch {
    return {
      baseUrl: 'http://localhost:41184',
    }
  }
}

export function setSettings(settings: { baseUrl?: string; token?: string }) {
  localStorage.setItem('joplin-batch-settings', JSON.stringify(settings))
}

export const dataApi =
  getEnv() === 'webview'
    ? webviewJoplinDataApi()
    : joplinDataApi({
        type: 'rest',
        baseUrl: import.meta.env.VITE_JOPLIN_BASE_URL,
        token: import.meta.env.VITE_JOPLIN_BASE_TOKEN,
      })
