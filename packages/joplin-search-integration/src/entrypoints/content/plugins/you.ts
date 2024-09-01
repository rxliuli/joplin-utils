import { wait } from '@liuli-util/async'
import { minimatch } from 'minimatch'
import { getSearchQuery } from '../utils/getQuery'
import { createJoplinElement, renderList } from '../utils/render'
import { SearchNote, SearchPlugin } from './plugin'

function watch<T>(
  fn: () => T,
  cb: (value: T, oldValue: T) => void,
  options?: {
    interval?: number
  },
) {
  let oldValue: T
  const n = setInterval(() => {
    const value = fn()
    if (value !== oldValue) {
      cb(value, oldValue)
      oldValue = value
    }
  }, options?.interval ?? 100)
  return () => clearInterval(n)
}

async function render(list: SearchNote[]) {
  const getRightSider = () => document.querySelector('[data-testid="right-line-container"]')
  await wait(() => !!getRightSider())
  const $rhs = getRightSider()
  if ($rhs === null) {
    console.error('网页结构发生了变化')
    return
  }
  const $root = createJoplinElement()
  $root.style.paddingLeft = '3rem'
  $root.style.paddingRight = '2rem'
  $rhs.appendChild($root)
  renderList($root, list)
}
export function you(): SearchPlugin {
  return {
    name: 'you',
    match(url) {
      return minimatch(url.href, 'https://you.com/search?q=*')
    },
    getQuery() {
      return getSearchQuery(['q'])
    },
    createRenderRoot() {
      const $rhs = document.querySelector('[data-testid="right-line-container"]')
      if ($rhs === null) {
        throw new Error('网页结构发生了变化')
      }
      const $root = createJoplinElement()
      $root.style.paddingLeft = '3rem'
      $root.style.paddingRight = '2rem'
      $rhs.appendChild($root)
      return $root
    },
  }
}
