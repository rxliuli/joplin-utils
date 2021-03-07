import { noteActionApi } from 'joplin-api'
import { SearchNote } from './model/SearchNote'

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

  function createLi(note: SearchNote) {
    const $li = document.createElement('li')
    const $a = document.createElement('a')
    $a.href = 'javascript:void(0)'
    $a.text = note.title
    $a.addEventListener('click', async () => {
      await noteActionApi.openAndWatch(note.id)
    })
    $li.appendChild($a)
    return $li
  }

  noteList.map(createLi).forEach(($el) => $rhs.appendChild($el))
}
