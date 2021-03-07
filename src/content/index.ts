import type { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { parse } from 'query-string'

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

// /**
//  * 搜索 Joplin 的笔记
//  */
// async function searchJoplin(
//   keyword: string,
// ): Promise<Pick<NoteProperties, 'id' | 'title'>[]> {
//   const res = await searchApi.search({
//     query: keyword,
//     type: TypeEnum.Note,
//     limit: 10,
//     fields: ['id', 'title'],
//     order_by: 'user_updated_time',
//   })
//   return res.items
// }

/**
 * 渲染搜索结果到页面上
 */
function renderNoteResult(noteList: { id: string; title: string }[]) {
  const $sider = document.getElementById('rhs')
  if ($sider === null) {
    throw new Error('网页结构发生了变化')
  }

  function createLi(note: Pick<NoteProperties, 'id' | 'title'>) {
    const $li = document.createElement('li')
    const $a = document.createElement('a')
    $a.href = '#'
    $a.text = note.title
    $a.addEventListener('click', async () => {
      // await noteActionApi.openAndWatch(note.id)
    })
    $li.appendChild($a)
    return $li
  }

  noteList.map(createLi).forEach(($el) => $sider.appendChild($el))
}

async function init() {
  const keyword = parseSearchKeyword()
  if (keyword === null) {
    return
  }
  console.log('keyword: ', keyword)
  // searchJoplin(keyword)
  window.addEventListener('load', () => {
    renderNoteResult([{ id: '1', title: 'VSCode VS WebStorm' }])
  })
}

init()
