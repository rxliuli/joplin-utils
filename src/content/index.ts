import type { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { parse } from 'query-string'
import { config, noteActionApi, searchApi, TypeEnum } from 'joplin-api'
import { JoplinNoteUtil } from './util/JoplinNoteUtil'

Reflect.set(window, 'console', new Proxy(console, {
  get(target: Console, p: PropertyKey): any {
    return (...args: never[]) => {
      Reflect.get(target, p)('[joplin] ', ...args)
    }
  },
}))

/**
 * 解析搜索参数
 */
function parseSearchKeyword(): string | null {
  const keyword = parse(location.search).q
  if (typeof keyword !== 'string') {
    return null
  }
  return keyword
}

type SearchNote = Pick<NoteProperties, 'id' | 'title'>

/**
 * 搜索 Joplin 的笔记
 */
async function searchJoplin(
  keyword: string,
): Promise<SearchNote[]> {
  const res = await searchApi.search({
    query: keyword,
    type: TypeEnum.Note,
    limit: 10,
    fields: ['id', 'title'],
    order_by: 'user_updated_time',
  })
  return res.items.map(item => ({ ...item, title: JoplinNoteUtil.trimTitleStart(item.title) }))
}

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
function renderNoteResult(noteList: SearchNote[]) {
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

async function init() {
  const keyword = parseSearchKeyword()
  console.log('keyword: ', keyword)
  if (keyword === null) {
    return
  }
  config.token = ''
  const noteList = await searchJoplin(keyword)
  console.log('noteList: ', noteList)
  window.addEventListener('load', () => {
    renderNoteResult(noteList)
  })
}

init()
