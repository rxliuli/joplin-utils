import { SearchNote } from './model/SearchNote'
import { render } from 'react-dom'
import React from 'react'
import JoplinNoteList from './component/JoplinNoteList'

function createRhs() {
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
export function renderNoteResult(noteList: SearchNote[]) {
  const $rhs = document.querySelector('#rhs') || createRhs()
  if ($rhs === null) {
    console.error('网页结构发生了变化')
    return
  }

  render(<JoplinNoteList noteList={noteList} />, $rhs)
}
