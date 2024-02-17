import browser from 'webextension-polyfill'
import {
  fromMarkdown,
  Link,
  Image,
  selectAll,
  breaksFromMarkdown,
  hastToHtml,
  mdToHast,
} from '@liuli-util/markdown-util'
import { config, noteApi } from 'joplin-api'
import { loadConfig, LocalConfig } from '../utils/loadConfig'
import Light from './assets/light.svg?react'
import Dark from './assets/dark.svg?react'
import Open from './assets/open.svg?react'
import { useComputed, useSignal } from '@preact/signals'
import { useMount } from 'react-use'
import { Loading, useAsyncFn } from '../../components/loading'
import { useRouter } from 'preact-router'
import { useRef } from 'react'
import { setTheme } from '../utils/theme'

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
  const html = hastToHtml(mdToHast(root))
  const parser = new DOMParser()
  const dom = parser.parseFromString(html, 'text/html')
  dom.querySelectorAll('a').forEach((item) => {
    if (!['chrome-extension:', 'moz-extension:'].includes(item.protocol)) {
      item.target = '_blank'
    }
  })
  return dom.body.innerHTML
}
function NoteView() {
  const [route] = useRouter()
  const id = useComputed(() => new URLSearchParams(route.url.split('?')[1]).get('id'))
  const html = useSignal('')
  const $content = useRef<HTMLDivElement>(null)
  const theme = useSignal(null as LocalConfig['theme'] | null)
  const { state, execute } = useAsyncFn(async () => {
    const localConfig = await loadConfig()
    if (!localConfig?.token) {
      throw new Error('Please configure the token first')
    }
    config.baseUrl = localConfig.baseUrl
    config.token = localConfig.token
    theme.value = localConfig.theme
    if (!id.value) {
      throw new Error('找不到 url 参数 id')
    }
    const s = await getNoteData(id.value)
    if (!s) {
      throw new Error('查询笔记失败')
    }
    document.title = s.title
    const html = renderNoteToHtml(s)
    $content.current!.innerHTML = html
    return html
  })
  useMount(execute)

  async function onOpenLink() {
    window.open(`joplin://x-callback-url/openNote?id=${id.value}`, '_self')
  }

  async function onToggleTheme() {
    const t = theme.value === 'dark' ? 'light' : 'dark'
    setTheme(t)
    await browser.storage.local.set({ theme: t })
    theme.value = t
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex-grow">
        {state.loading.value && (
          <div>
            <Loading text={'Loading...'} />
          </div>
        )}
        {state.error.value && <div class={'text-red-500'}>Error: {state.error.value}</div>}
        <div
          ref={$content}
          className="container mx-auto p-4 prose lg:prose-xl dark:prose-invert"
          dangerouslySetInnerHTML={{
            __html: html.value,
          }}
        ></div>
      </div>
      <div className="flex flex-col items-center gap-4 fixed bottom-4 right-4">
        <button class="w-10 h-10 rounded-full" title="Toggle Theme" onClick={onToggleTheme}>
          {theme.value === 'dark' ? <Dark className={'w-full h-full'} /> : <Light className={'w-full h-full'} />}
        </button>
        <button className="w-10 h-10 rounded-full" title="Open Link" onClick={onOpenLink} alt={'Open in Joplin'}>
          <Open className={'w-full h-full'} />
        </button>
      </div>
    </div>
  )
}

export default NoteView
