import { SearchPlugin } from './plugin'
import micromatch from 'minimatch'
import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'

export const urls: string[] = []

export function searx(urls: string[]): SearchPlugin {
  const q = () => getSearchQuery(['q']) ?? (document.getElementById('q') as HTMLInputElement)?.value
  return {
    match(url) {
      return urls.some((m) => micromatch(url.href, m)) && !!q()
    },
    name: 'searx',
    getQuery() {
      return q()
    },
    render(list) {
      const $sidebar = document.getElementById('sidebar')
      const $root = createJoplinElement()
      $sidebar?.appendChild($root)
      renderList($root, list)
    },
  }
}
