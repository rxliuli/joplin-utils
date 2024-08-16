import { TypeEnum } from 'joplin-api'
import { onMessage } from './model/messaging'
import { trimTitleStart } from './content/utils/trim'
import { getJoplinDataApi } from '$lib/api'

export default defineBackground(() => {
  onMessage('search', async (ev) => {
    const api = await getJoplinDataApi()
    const res = await api.search.search({
      query: ev.data,
      type: TypeEnum.Note,
      limit: 10,
      fields: ['id', 'title'],
      order_by: 'user_updated_time',
    })
    return res.items.map((it) => ({ ...it, title: trimTitleStart(it.title) }))
  })
  onMessage('openNote', async (ev) => {
    await browser.tabs.create({
      url: browser.runtime.getURL(`/options.html#/note/${ev.data}`),
    })
  })
  onMessage('openSettings', async () => {
    await browser.tabs.create({
      url: browser.runtime.getURL('/options.html'),
    })
  })
})
