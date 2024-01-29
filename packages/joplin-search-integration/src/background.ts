import { NoteProperties, TypeEnum, config, joplinApi, searchApi } from 'joplin-api'
import { LocalConfig } from './options/utils/loadConfig'
import { trimTitleStart } from './content-scripts/utils/trim'
import Browser from 'webextension-polyfill'
import { Channel, register } from './utils/ext'
import { omit } from 'lodash-es'

export interface BackChannel extends Channel<'back'> {
  open(args: { path: string } & Record<string, string | number>): Promise<void>
  search(keyword: string): Promise<Pick<NoteProperties, 'id' | 'title'>[]>
}

register<BackChannel>({
  name: 'back',
  async open(args) {
    const p = new URLSearchParams(location.search)
    Object.entries(omit(args, 'path')).forEach(([k, v]) =>
      Array.isArray(v) ? v.forEach((i) => p.set(k, i)) : p.set(k, String(v)),
    )
    const url = Browser.runtime.getURL(`/src/options/index.html#${args.path}?${p.toString()}`)
    const t = (await Browser.tabs.query({ active: true, currentWindow: true }))[0]
    await Browser.tabs.create({ url, active: true, index: (t?.index ?? 0) + 1 })
  },
  async search(keyword) {
    const c = ((await Browser.storage.local.get(['baseUrl', 'token'])) ?? {}) as LocalConfig
    config.baseUrl = c.baseUrl ?? 'http://127.0.0.1:41184'
    config.token = c.token!
    try {
      const res = await searchApi.search({
        query: keyword,
        type: TypeEnum.Note,
        limit: 10,
        fields: ['id', 'title'],
        order_by: 'user_updated_time',
      })
      return res.items.map((item) => ({
        ...item,
        title: trimTitleStart(item.title),
      }))
    } catch (err) {
      try {
        await joplinApi.ping()
        throw err
      } catch (err) {
        throw {
          code: 'JoplinWebClipperNotEnabled',
        }
      }
    }
  },
})
