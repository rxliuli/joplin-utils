import 'webextension-polyfill'
import { fromMarkdown, Link, Image, selectAll, toHtml } from '@liuli-util/markdown-util'
import { config, noteApi } from 'joplin-api'
import { loadConfig, LocalConfig } from './utils/loadConfig'

function getNoteId() {
  const p = new URLSearchParams(location.search)
  return p.get('id') as string
}

interface NoteData {
  id: string
  content: string
  resources: string[]
}

async function getNoteData(id: string): Promise<NoteData | undefined> {
  try {
    const [s, r] = await Promise.all([noteApi.get(id, ['body']), noteApi.resourcesById(id, ['id'])])
    return {
      id: id,
      content: s.body,
      resources: r.map((item) => item.id),
    }
  } catch (e) {}
}

function renderNoteToHtml(note: NoteData): string {
  const root = fromMarkdown(note.content)
  const f = (item: Image | Link): boolean => item.url.startsWith(':/')
  const images = (selectAll('image', root) as Image[]).filter(f)
  images.forEach((item) => {
    const id = item.url.slice(2)
    item.url = `${config.baseUrl}/resources/${id}/file?token=${config.token}`
  })
  const links = (selectAll('link', root) as Link[]).filter(f)
  links.forEach((item) => {
    const id = item.url.slice(2)
    if (note.resources.includes(id)) {
      item.url = `${config.baseUrl}/resources/${id}/file?token=${config.token}`
    } else {
      item.url = browser.runtime.getURL(`/options/index.html?id=${id}`)
    }
  })
  const html = toHtml(root)
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')
  dom.querySelectorAll('a').forEach((item) => {
    if (!['chrome-extension:', 'moz-extension:'].includes(item.protocol)) {
      item.target = '_blank'
    }
  })
  return dom.body.innerHTML
}

function setTheme(theme: LocalConfig['theme']) {
  document.documentElement.dataset.theme = theme
}

function onToggleTheme() {
  document.querySelector('#app .panel .icon.toggle')!.addEventListener('click', () => {
    const t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'
    document.documentElement.dataset.theme = t
    browser.storage.local.set({ theme: t })
  })
}

function onOpenLink(id: string) {
  document.querySelector('#app .panel .icon.open')!.addEventListener('click', (ev) => {
    window.open(`joplin://x-callback-url/openNote?id=${id}`, '_self')
  })
}

async function main() {
  const localConfig = await loadConfig()
  if (!localConfig?.token) {
    alert('Joplin Search Integration: Please configure the token first')
    return
  }
  config.baseUrl = localConfig.baseUrl
  config.token = localConfig.token
  setTheme(localConfig.theme)
  const $content = document.querySelector('.content') as HTMLDivElement
  const id = getNoteId()
  if (!id) {
    throw new Error('找不到 url 参数 id')
  }
  const s = await getNoteData(id)
  if (!s) {
    throw new Error('查询笔记失败')
  }
  const html = renderNoteToHtml(s)
  $content.innerHTML = html
  onToggleTheme()
  onOpenLink(id)
}

main()
