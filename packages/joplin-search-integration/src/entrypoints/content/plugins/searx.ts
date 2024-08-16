import { SearchPlugin } from './plugin'
import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'

export const urls: string[] = []

export function searx(): SearchPlugin {
  const q = () => getSearchQuery(['q']) ?? (document.getElementById('q') as HTMLInputElement)?.value
  return {
    match(url) {
      return (
        url.pathname.endsWith('/search') &&
        !!document.querySelector('meta[name="description"][content^="SearXNG"]') &&
        !!q()
      )
    },
    name: 'searx',
    getQuery() {
      return q()
    },
    // render(list) {
    //   const $sidebar = document.getElementById('sidebar')
    //   const $root = createJoplinElement()
    //   $sidebar?.appendChild($root)
    //   renderList($root, list)
    // },
    createRenderRoot() {
      const $sidebar = document.getElementById('sidebar')
      const $root = createJoplinElement()
      $sidebar?.appendChild($root)
      return $root
    },
  }
}
