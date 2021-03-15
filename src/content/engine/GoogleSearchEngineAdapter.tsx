import React from 'react'
import { BaseSearchEngineAdapter } from './BaseSearchEngineAdapter'
import { parse } from 'query-string'
import { SearchNote } from '../model/SearchNote'
import { render } from 'react-dom'
import JoplinNoteList from '../component/JoplinNoteList'

export class GoogleSearchEngineAdapter implements BaseSearchEngineAdapter {
  matches: string[] = [
    'https://www.google.com/search?*',
    'https://www.google.com.*/search?*',
  ]
  name = 'google'

  parseKeyword(): string | null {
    const keyword = parse(location.search).q
    if (typeof keyword !== 'string') {
      return null
    }
    return keyword
  }

  createRhs(): HTMLElement {
    const $rcht = document.querySelector('#rcnt')!
    const $rhs = document.createElement('div') as HTMLDivElement
    $rhs.id = 'rhs'
    $rhs.style.marginLeft = '892px'
    $rcht.insertBefore($rhs, $rcht.lastElementChild)
    return $rhs
  }

  /**
   * 渲染搜索结果到页面上
   */
  renderNoteResult(noteList: SearchNote[]): void {
    const $rhs = document.querySelector('#rhs') || this.createRhs()
    if ($rhs === null) {
      console.error('网页结构发生了变化')
      return
    }
    const $root = document.createElement('div')
    $root.className = 'joplin-root'
    $rhs.appendChild($root)

    console.log('$rhs: ', $rhs, $root)
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
