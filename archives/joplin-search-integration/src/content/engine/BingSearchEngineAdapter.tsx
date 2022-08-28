import React from 'react'
import { BaseSearchEngineAdapter } from './BaseSearchEngineAdapter'
import { parse } from 'query-string'
import { SearchNote } from '../model/SearchNote'
import { render } from 'react-dom'
import JoplinNoteList from '../component/JoplinNoteList'

export class BingSearchEngineAdapter implements BaseSearchEngineAdapter {
  matches: string[] = ['https://www.bing.com/search?*']
  name = 'bing'

  parseKeyword(): string | null {
    const keyword = parse(location.search).q
    if (typeof keyword !== 'string') {
      return null
    }
    return keyword
  }

  createRhs(): HTMLElement {
    const $context = document.querySelector('#b_context')!
    const $li = document.createElement('li') as HTMLLIElement
    $context.insertBefore($li, $context.lastElementChild)
    return $li
  }

  renderNoteResult(noteList: SearchNote[]): void {
    const $rhs = this.createRhs()
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
