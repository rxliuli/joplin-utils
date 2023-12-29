import { NoteProperties, config } from 'joplin-api'
import { loadConfig } from '../options/utils/loadConfig'
import { google } from './plugins/google'
import { SearchPlugin } from './plugins/plugin'
import { bing } from './plugins/bing'
import { baidu } from './plugins/baidu'
import { duckduckgo } from './plugins/duckduckgo'
import { searx } from './plugins/searx'
import { metagar } from './plugins/metagar'
import { you } from './plugins/you'
import { brave } from './plugins/brave'
import type { BackChannel } from '../background'
import { warp } from '../utils/ext'

const plugins: SearchPlugin[] = [google(), bing(), baidu(), duckduckgo(), searx(), metagar(), you(), brave()]

function findPlugin() {
  const u = new URL(location.href)
  return plugins.find((item) => item.match(u))
}

const back = warp<BackChannel>({ name: 'back' })

async function main() {
  console.debug('load plugin')
  const plugin = findPlugin()
  if (!plugin) {
    console.info('找不到合适的插件')
    return
  }
  console.debug('load config')
  const c = await loadConfig()
  if (!c.token) {
    alert('Joplin Search Integration: Please configure the token first')
    await back.open({ path: '/' })
    return
  }
  config.token = c.token
  config.baseUrl = c.baseUrl
  console.debug('get query')
  const keywrod = plugin.getQuery()
  if (!keywrod) {
    console.info('未能解析搜索关键字')
    return
  }
  console.debug('search notes')
  let list: Pick<NoteProperties, 'id' | 'title'>[]
  try {
    list = await back.search(keywrod)
  } catch (err) {
    console.error('search notes error', err)
    if (typeof err === 'object' && (err as any).code === 'JoplinWebClipperNotEnabled') {
      alert(`Joplin Search Integration: Please enable joplin webclipper service. check: ${c.baseUrl}/ping`)
    }
    return
  }
  console.debug('search: ', keywrod, list)
  console.debug('render start')
  plugin.render(list)
  console.debug('render end')
}

main()
