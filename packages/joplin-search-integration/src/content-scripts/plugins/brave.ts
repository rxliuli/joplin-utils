import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchPlugin } from './plugin'

function createRhs(): HTMLElement {
  const $context = document.querySelector('.sidebar')!
  const $li = document.createElement('div') as HTMLDivElement
  $context.insertBefore($li, $context.lastElementChild)
  return $li
}

export function brave(): SearchPlugin {
  return {
    name: 'brave',
    match(url) {
      return url.origin === 'https://search.brave.com' && url.pathname === '/search' && !!url.searchParams.get('q')
    },
    getQuery() {
      return getSearchQuery(['q'])
    },
    async render(list) {
      // await wait(1000)
      // console.log('render')
      const $rhs = createRhs()
      const $root = createJoplinElement()
      $rhs.appendChild($root)
      renderList($root, list)
    },
  }
}
