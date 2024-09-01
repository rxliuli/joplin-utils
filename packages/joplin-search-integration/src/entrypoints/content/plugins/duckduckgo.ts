import { getSearchQuery } from '../utils/getQuery'
import { SearchPlugin } from './plugin'

export function duckduckgo(): SearchPlugin {
  return {
    name: 'duckduckgo',
    match(url) {
      return url.origin === 'https://duckduckgo.com' && !!url.searchParams.get('q')
    },
    getQuery() {
      return getSearchQuery(['q'])
    },
    createRenderRoot() {
      const $rhs = document.querySelector('[data-testid="sidebar"]')
      if ($rhs === null) {
        throw new Error("Don't find render root")
      }
      const $root = document.createElement('div')
      $rhs.appendChild($root)
      return $root
    },
  }
}
