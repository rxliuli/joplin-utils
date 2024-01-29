import { getSearchQuery } from '../utils/getQuery'
import { SearchPlugin } from './plugin'

function createContainer(): HTMLElement {
  const $right = document.querySelector('#content_right')!
  const $container = document.createElement('div') as HTMLDivElement
  $right.insertBefore($container, $right.lastElementChild)
  return $container
}

export function baidu(): SearchPlugin {
  return {
    match(url) {
      return (
        url.origin === 'https://www.baidu.com' &&
        url.pathname === '/s' &&
        !!(url.searchParams.get('wd') || url.searchParams.get('word'))
      )
    },
    name: 'baidu',
    /**
     * 参考：https://www.jianshu.com/p/5ce9b98e4d81
     */
    getQuery() {
      return getSearchQuery(['wd', 'word'])
    },
    createRenderRoot() {
      const $rhs = createContainer()
      const $root = document.createElement('div')
      $rhs.appendChild($root)
      return $root
    },
  }
}
