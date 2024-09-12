import { TypeEnum } from 'joplin-api'
import { onMessage } from './model/messaging'
import { trimTitleStart } from './content/utils/trim'
import { getJoplinDataApi } from '$lib/api'

async function search(query: string) {
  const api = await getJoplinDataApi()
  const res = await api.search.search({
    query,
    type: TypeEnum.Note,
    limit: 10,
    fields: ['id', 'title'],
    order_by: 'user_updated_time',
  })
  return res.items.map((it) => ({ ...it, title: trimTitleStart(it.title) }))
}

async function lastSearch() {
  const api = await getJoplinDataApi()
  const res = await api.note.list({
    limit: 20,
    fields: ['id', 'title'],
    order_by: 'user_updated_time',
    order_dir: 'DESC',
  })
  return res.items.map((it) => ({ ...it, title: trimTitleStart(it.title) }))
}

async function openSettings() {
  await browser.tabs.create({
    url: browser.runtime.getURL('/options.html'),
  })
}

async function openNote(id: string) {
  await browser.tabs.create({
    url: browser.runtime.getURL(`/options.html#/note/${id}`),
  })
}

export default defineBackground(() => {
  browser.omnibox.onInputStarted.addListener(() => {
    console.log('onInputStarted')
    browser.omnibox.setDefaultSuggestion({
      description: 'Open Settings',
    })
  })

  browser.omnibox.onInputChanged.addListener(async (text, suggest) => {
    text = text.trim()
    console.log('onInputChanged', text)
    const c = await browser.storage.local.get(['baseUrl', 'token'])
    if (!c.baseUrl || !c.token) {
      suggest([
        {
          content: 'Open Settings',
          description: 'Base URL or token not set, please set in options page',
        },
      ])
      return
    }
    const res = text === '' ? await lastSearch() : await search(text)
    suggest(res.map((it) => ({ content: it.id, description: it.title })))
  })
  browser.omnibox.onInputEntered.addListener(async (id) => {
    console.log('onInputEntered', id)
    const c = await browser.storage.local.get(['baseUrl', 'token'])
    if (id === 'Open Settings' || !c.baseUrl || !c.token) {
      await openSettings()
      return
    }
    // 判断 id 是否为 uuid，例如 9613232619644f2c91f6ed35a58cb6fc
    if (new RegExp('\\w{32}').test(id)) {
      await openNote(id)
    } else {
      await openSettings()
    }
  })
  browser.runtime.onInstalled.addListener(async () => {
    const c = await browser.storage.local.get(['baseUrl', 'token'])
    if (!c.baseUrl || !c.token) {
      await browser.tabs.create({
        url: browser.runtime.getURL('/options.html'),
      })
    }
  })
  onMessage('search', (ev) => search(ev.data))
  onMessage('openNote', (ev) => openNote(ev.data))
  onMessage('openSettings', openSettings)
})
