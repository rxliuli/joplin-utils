import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchPlugin } from './plugin'

export function duckduckgo(): SearchPlugin {
  return {
    name: 'duckduckgo',
    matches: ['https://duckduckgo.com/?q=*'],
    getQuery() {
      return getSearchQuery(['q'])
    },
    render(list) {
      const $rhs = document.querySelector('#links_wrapper > div.results--sidebar.js-results-sidebar')
      if ($rhs === null) {
        console.error('网页结构发生了变化')
        return
      }
      const $root = createJoplinElement()
      $rhs.appendChild($root)
      $root.style.color = getComputedStyle(document.documentElement).getPropertyValue('--theme-col-txt-title')
      renderList($root, list)
    },
  }
}
