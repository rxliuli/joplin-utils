import { config, searchApi, TypeEnum } from 'joplin-api'
import { loadConfig } from '../options/utils/loadConfig'
import { google } from './plugins/google'
import { SearchPlugin } from './plugins/plugin'
import { trimTitleStart } from './utils/trim'
import minimatch from 'minimatch'
import { bing } from './plugins/bing'
import { baidu } from './plugins/baidu'
import { duckduckgo } from './plugins/duckduckgo'
import browser from 'webextension-polyfill'

const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo()]

function findPlugin() {
  return plugins.find((item) => item.matches.some((matchPattern) => minimatch(location.href, matchPattern)))
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
  const plugin = findPlugin()
  if (!plugin) {
    console.info('找不到合适的插件')
    return
  }
  const c = await loadConfig()
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
