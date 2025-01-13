import { getSearchQuery } from '../utils/getQuery'
import type { SearchPlugin } from './plugin'

export function brave(): SearchPlugin {
  return {
    name: 'brave',
    match(url) {
      return url.origin === 'https://search.brave.com' && url.pathname === '/search' && !!url.searchParams.get('q')
    },
    getQuery() {
      return getSearchQuery(['q'])
    },
    createRenderRoot() {
      const $context = document.querySelector('.sidebar')!
      const $li = document.createElement('div') as HTMLDivElement
      $li.id = 'joplin-search-integration'
      $context.appendChild($li)
      return $li
    },
    observe(render) {
      setInterval(() => {
        console.log('render')
        if (document.querySelector('#joplin-search-integration') === null) {
          render()
        }
      }, 1000)
    },
  }
}
