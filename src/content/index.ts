import { parse } from 'query-string'
import { config, searchApi, TypeEnum } from 'joplin-api'
import { JoplinNoteUtil } from './util/JoplinNoteUtil'
import { renderNoteResult } from './renderNoteResult'
import { SearchNote } from './model/SearchNote'
import { getSettings } from './util/getSettings'
import { ActionTypeEnum } from '../background/model/ActionTypeEnum'

Reflect.set(
  window,
  'console',
  new Proxy(console, {
    get(target: Console, p: PropertyKey): any {
      return (...args: never[]) => {
        Reflect.get(target, p)('[joplin] ', ...args)
      }
    },
  }),
)

/**
 * 解析搜索参数
 */
function parseSearchKeyword(): string | null {
  const keyword = parse(location.search).q
  if (typeof keyword !== 'string') {
    return null
  }
  return keyword
}

/**
 * 搜索 Joplin 的笔记
 */
async function searchJoplin(keyword: string): Promise<SearchNote[]> {
  const res = await searchApi.search({
    query: keyword,
    type: TypeEnum.Note,
    limit: 10,
    fields: ['id', 'title'],
    order_by: 'user_updated_time',
  })
  return res.items.map((item) => ({
    ...item,
    title: JoplinNoteUtil.trimTitleStart(item.title),
  }))
}

async function main() {
  const keyword = parseSearchKeyword()
  console.log('keyword: ', keyword)
  if (keyword === null) {
    return
  }
  const settings = await getSettings()
  if (!settings) {
    await browser.runtime.sendMessage({
      action: ActionTypeEnum.OpenOptionsPage,
    })
    return
  }
  // console.log('settings: ', settings)
  config.token = settings.token
  config.port = settings.port
  const noteList = await searchJoplin(keyword)
  console.log('noteList: ', noteList)
  window.addEventListener('load', () => {
    renderNoteResult(noteList)
  })
}

main()
