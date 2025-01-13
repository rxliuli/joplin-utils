import type { SearchPlugin } from './plugin'
import { getSearchQuery } from '../utils/getQuery'
import { minimatch } from 'minimatch'

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
    match(url) {
      return ['https://www.google.com/search?*', 'https://www.google.com.*/search?*'].some((m) =>
        minimatch(url.href, m),
      )
    },
    name: 'google',
    getQuery() {
      return getSearchQuery(['q'])
    },
    createRenderRoot() {
      const $rhs = document.querySelector('#rhs') || createRhs()
      if ($rhs === null) {
        throw new Error("Don't find render root")
      }
      const $root = document.createElement('div')
      $rhs.appendChild($root)
      return $root
    },
  }
}
