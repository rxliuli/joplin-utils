import { config, Config } from 'joplin-api'
import { proxyStorage } from '@liuli-util/dom'

export function openNote(id: string) {
  const link = `joplin://x-callback-url/openNote?id=${id}`
  window.open(link)
}

export function init() {
  const storage = proxyStorage<{ settings: Config }>(localStorage)
  config.token = storage.settings?.token ?? ''
  config.baseUrl = storage.settings?.baseUrl ?? 'http://localhost:41184'
}
