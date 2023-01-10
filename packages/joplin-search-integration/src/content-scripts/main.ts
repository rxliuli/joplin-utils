import { config, searchApi, TypeEnum } from 'joplin-api'
import { loadConfig } from '../options/utils/loadConfig'
import { google } from './plugins/google'
import { SearchPlugin } from './plugins/plugin'
import { trimTitleStart } from './utils/trim'
import { bing } from './plugins/bing'
import { baidu } from './plugins/baidu'
import { duckduckgo } from './plugins/duckduckgo'
import browser from 'webextension-polyfill'
import { searx } from './plugins/searx'

const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo()]

function findPlugin() {
  const u = new URL(location.href)
  return plugins.find((item) => item.match(u))
}

async function search(keyword: string) {
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
}

async function main() {
  const c = await loadConfig()
  plugins.push(searx(c.searxUrls))
  const plugin = findPlugin()
  if (!plugin) {
    console.info('找不到合适的插件')
    return
  }
  if (!c.token) {
    alert('Joplin Search Integration: Please configure the token first')
    browser.runtime.sendMessage({
      action: 'open',
      path: '/',
    })
    return
  }
  config.token = c.token
  config.baseUrl = c.baseUrl
  const keywrod = plugin.getQuery()
  if (!keywrod) {
    throw new Error('未能解析搜索关键字')
  }
  const list = await search(keywrod)
  console.log('search: ', keywrod, list)
  if (document.readyState === 'complete') {
    plugin.render(list)
  } else {
    window.addEventListener('load', () => {
      plugin.render(list)
    })
  }
}

main()
