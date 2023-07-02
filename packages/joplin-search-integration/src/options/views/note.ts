import browser from 'webextension-polyfill'
import { fromMarkdown, Link, Image, selectAll, toHtml, breaksFromMarkdown } from '@liuli-util/markdown-util'
import { config, noteApi } from 'joplin-api'
import { loadConfig, LocalConfig } from '../utils/loadConfig'

function getNoteId() {
  const p = new URLSearchParams(location.search)
  return p.get('id') as string
}

interface NoteData {
  id: string
  title: string
  content: string
  resources: string[]
}

async function getNoteData(id: string): Promise<NoteData | undefined> {
  try {
    const [s, r] = await Promise.all([noteApi.get(id, ['body', 'title']), noteApi.resourcesById(id, ['id'])])
    return {
      id: id,
      title: s.title,
      content: s.body,
      resources: r.map((item) => item.id),
    }
  } catch (e) {}
}

function renderNoteToHtml(note: NoteData): string {
  const root = fromMarkdown(note.content, {
    mdastExtensions: [breaksFromMarkdown()],
  })
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
      const p = new URLSearchParams(location.search)
      p.set('path', '/note')
      p.set('id', id)
      item.url = browser.runtime.getURL(`/src/options/index.html?${p.toString()}`)
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

function render() {
  document.querySelector('#app')!.innerHTML = `
  <div class="note">
    <div class="markdown-body content"></div>
    <div class="panel">
      <button class="icon toggle" title="Toggle Theme">
        <svg viewBox="0 0 24 24" width="24" height="24" class="light">
          <path
            class="light"
            fill="currentColor"
            d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"
          ></path>
        </svg>
        <svg viewBox="0 0 24 24" width="24" height="24" class="dark">
          <path
            fill="currentColor"
            d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"
          ></path>
        </svg>
      </button>
      <button class="icon open" title="Toggle Theme">
        <svg viewBox="0 0 24 24" width="24" height="24">
          <g transform="matrix(0.45833333,0,0,0.45833333,172.41667,171.5)">
            <polyline
              fill="currentColor"
              points="-352.3,-343.4 -354.6,-345.7 -328.8,-371.4 -326.6,-369.2 -352.3,-343.4"
            />
            <polyline
              fill="currentColor"
              points="-326,-354.9 -329.4,-354.9 -329.4,-368.6 -343.1,-368.6 -343.1,-372 -326,-372      -326,-354.9"
            />
            <path
              fill="currentColor"
              d="m -334.6,-324 h -34.3 c -2.8,0 -5.1,-2.3 -5.1,-5.1 v -34.3 c 0,-2.8 2.3,-5.1 5.1,-5.1 h 18.9 v 3.4 h -18.9 c -0.9,0 -1.7,0.8 -1.7,1.7 v 34.3 c 0,0.9 0.8,1.7 1.7,1.7 h 34.3 c 0.9,0 1.7,-0.8 1.7,-1.7 V -348 h 3.4 v 18.9 c 0.1,2.8 -2.2,5.1 -5.1,5.1"
            />
          </g>
        </svg>
      </button>
    </div>
  </div>
`
}

async function main() {
  render()
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
  document.title = s.title
  const html = renderNoteToHtml(s)
  $content.innerHTML = html
  onToggleTheme()
  onOpenLink(id)
}

main()
