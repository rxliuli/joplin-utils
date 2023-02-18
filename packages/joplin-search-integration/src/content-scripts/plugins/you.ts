import { wait } from '@liuli-util/async'
import minimatch from 'minimatch'
import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchPlugin } from './plugin'

export function you(): SearchPlugin {
  return {
    name: 'you',
    match(url) {
      return minimatch(url.href, 'https://you.com/search?q=*')
    },
    getQuery() {
      return getSearchQuery(['q'])
    },
    async render(list) {
      await wait(() => !!document.querySelector('[data-testid="right-line-container"]'))
      const $rhs = document.querySelector('[data-testid="right-line-container"]')
      if ($rhs === null) {
        console.error('网页结构发生了变化')
        return
      }
      const $root = createJoplinElement()
      $root.style.paddingLeft = '3rem'
      $root.style.paddingRight = '2rem'
      $rhs.appendChild($root)
      renderList($root, list)
    },
  }
}
