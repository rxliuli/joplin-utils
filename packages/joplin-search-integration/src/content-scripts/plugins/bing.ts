import { getSearchQuery } from '../utils/getQuery'
import { SearchPlugin } from './plugin'

function createRhs(): HTMLElement {
  const $context = document.querySelector('#b_context')!
  const $li = document.createElement('li') as HTMLLIElement
  $context.insertBefore($li, $context.lastElementChild)
  return $li
}

export function bing(): SearchPlugin {
  return {
    match(url) {
      return (
        ['https://www.bing.com', 'https://cn.bing.com'].includes(url.origin) &&
        url.pathname === '/search' &&
        !!url.searchParams.get('q')
      )
    },
    name: 'bing',
    getQuery() {
      return getSearchQuery(['q'])
    },
    createRenderRoot() {
      const $rhs = createRhs()
      const $root = document.createElement('div')
      $rhs.appendChild($root)
      return $root
    },
  }
}
