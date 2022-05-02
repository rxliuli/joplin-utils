import { Config, JoplinApiGenerator } from 'joplin-api'
import { proxyStorage } from '@liuli-util/dom'

export const joplinApiGenerator = new JoplinApiGenerator()
const storage = proxyStorage<{ settings: Config }>(localStorage)
joplinApiGenerator.token = storage.settings?.token ?? ''
joplinApiGenerator.baseUrl = storage.settings?.baseUrl ?? 'http://localhost:41184'

export function openNote(id: string) {
  const link = `joplin://x-callback-url/openNote?id=${id}`
  window.open(link)
}
