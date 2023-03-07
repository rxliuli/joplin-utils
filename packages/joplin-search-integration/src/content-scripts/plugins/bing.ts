import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchNote, SearchPlugin } from './plugin'

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
    render(list: SearchNote[]): void {
      const $rhs = createRhs()
      const $root = createJoplinElement()
      $rhs.appendChild($root)
      renderList($root, list)
    },
  }
}
