import { SearchPlugin } from './plugin'
import micromatch from 'minimatch'
import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'

function createRhs(): HTMLElement {
  const $right = document.querySelector('#quicktips')!
  const $joplinBox = document.createElement('div') as HTMLDivElement
  $joplinBox.classList.add('quicktip')
  $joplinBox.setAttribute('type', 'wikipedia')
  $right.insertBefore($joplinBox, $right.firstChild)
  return $joplinBox
}

export function metagar(): SearchPlugin {
  return {
    name: 'metaGar',
    match(url) {
      return ['https://metager.org/meta/meta.ger3?*', 'https://metager.de/meta/meta.ger3?*'].some((m) =>
        micromatch(url.href, m),
      )
    },
    getQuery() {
      return getSearchQuery(['eingabe'])
    },
    render(list) {
      const $rhs = createRhs()
      const $root = createJoplinElement()
      $rhs.appendChild($root)
      renderList($root, list)
    },
  }
}
