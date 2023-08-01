import { TypeEnum, config, searchApi } from 'joplin-api'
import browser from 'webextension-polyfill'
import { LocalConfig } from './options/utils/loadConfig'
import { trimTitleStart } from './content-scripts/utils/trim'

browser.runtime.onMessage.addListener((message, _sender, sendMessage) => {
  ;(async () => {
    switch (message.action) {
      case 'open':
        const p = new URLSearchParams(location.search)
        const { action, ...args } = message
        Object.entries(args).forEach(([k, v]) =>
          Array.isArray(v) ? v.forEach((i) => p.set(k, i)) : p.set(k, String(v)),
        )
        const url = browser.runtime.getURL(`/src/options/index.html?${p.toString()}`)
        const t = (await browser.tabs.query({ active: true, currentWindow: true }))[0]
        await browser.tabs.create({ url, active: true, index: (t?.index ?? 0) + 1 })
        sendMessage()
        break
      case 'search':
        const c = ((await browser.storage.local.get(['baseUrl', 'token'])) ?? {}) as LocalConfig
        config.baseUrl = c.baseUrl ?? 'http://127.0.0.1:41184'
        config.token = c.token!
        const res = await searchApi.search({
          query: message.keywrod,
          type: TypeEnum.Note,
          limit: 10,
          fields: ['id', 'title'],
          order_by: 'user_updated_time',
        })
        sendMessage(
          // @ts-expect-error
          res.items.map((item) => ({
            ...item,
            title: trimTitleStart(item.title),
          })),
        )
        break
      default:
        break
    }
  })()
  return true
})

export {}
