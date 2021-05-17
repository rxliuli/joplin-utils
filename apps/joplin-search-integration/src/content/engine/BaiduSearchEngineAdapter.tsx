import React from 'react'
import { BaseSearchEngineAdapter } from './BaseSearchEngineAdapter'
import { parse } from 'query-string'
import { SearchNote } from '../model/SearchNote'
import { render } from 'react-dom'
import JoplinNoteList from '../component/JoplinNoteList'

export class BaiduSearchEngineAdapter implements BaseSearchEngineAdapter {
  matches: string[] = ['https://www.baidu.com/s?*']
  name = 'baidu'

  /**
   * 参考：https://www.jianshu.com/p/5ce9b98e4d81
   */
  parseKeyword(): string | null {
    const query = parse(location.search)
    const keyword = query.wd || query.word
    if (typeof keyword !== 'string') {
      return null
    }
    return keyword
  }

  createContainer(): HTMLElement {
    const $right = document.querySelector('#content_right')!
    const $container = document.createElement('div') as HTMLDivElement
    $right.insertBefore($container, $right.lastElementChild)
    return $container
  }

  /**
   * 渲染搜索结果到页面上
   */
  renderNoteResult(noteList: SearchNote[]): void {
    const $rhs = this.createContainer()
    const $root = document.createElement('div')
    $root.className = 'joplin-root'
    $rhs.appendChild($root)
    render(<JoplinNoteList noteList={noteList} />, $root)
  }

  render(noteList: SearchNote[]): void {
    if (document.readyState === 'complete') {
      this.renderNoteResult(noteList)
    } else {
      window.addEventListener('load', () => {
        this.renderNoteResult(noteList)
      })
    }
  }
}
