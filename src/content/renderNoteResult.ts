import { SearchNote } from './model/SearchNote'
import { ActionTypeEnum } from '../background/model/ActionTypeEnum'

function createRhs() {
  const $rcht = document.querySelector('#rcnt')!
  const $rhs = document.createElement('div') as HTMLDivElement
  $rhs.id = 'rhs'
  $rhs.style.marginLeft = '892px'
  $rcht.insertBefore($rhs, $rcht.lastElementChild)
  return $rhs
}

function createLi(note: SearchNote) {
  const $li = document.createElement('li')
  const $a = document.createElement('a')
  $a.href = 'javascript:void(0)'
  $a.text = note.title
  $a.addEventListener('click', async () => {
    await browser.runtime.sendMessage({
      action: ActionTypeEnum.OpenNote,
      data: { id: note.id },
    })
  })
  $li.appendChild($a)
  return $li
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

  const $ul = document.createElement('ul')
  $ul.style.width = '100%'
  $ul.style.marginRight = '28px'
  noteList.map(createLi).forEach(($el) => $ul.appendChild($el))
  $rhs.appendChild($ul)
}
