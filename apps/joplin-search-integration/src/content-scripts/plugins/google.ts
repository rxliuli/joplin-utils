import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchPlugin, SearchNote } from './plugin'

function createRhs(): HTMLElement {
  const $rcht = document.querySelector('#rcnt')!
  const $rhs = document.createElement('div') as HTMLDivElement
  $rhs.id = 'rhs'
  // $rhs.style.marginLeft = '892px'
  $rcht.appendChild($rhs)
  return $rhs
}

export function google(): SearchPlugin {
  return {
    matches: ['https://www.google.com/search?*', 'https://www.google.com.*/search?*'],
    name: 'google',
    getQuery() {
      return getSearchQuery(['q'])
    },
    render(list: SearchNote[]): void {
      const $rhs = document.querySelector('#rhs') || createRhs()
      if ($rhs === null) {
        console.error('网页结构发生了变化')
        return
      }
      const $root = createJoplinElement()
      $rhs.appendChild($root)
      renderList($root, list)
    },
  }
}
