import browser from 'webextension-polyfill'
import { SearchNote } from '../plugins/plugin'

export function renderList(root: HTMLDivElement, list: SearchNote[]) {
  const html = `<div>
  <h2 class="joplin-header">Joplin search notes</h2>
  <ul>
    ${list.map((item) => `<li><a href="javascript:void(0)" data-id="${item.id}">${item.title}</a></li>`).join('')}
  </ul>
</div>`
  root.innerHTML = html
  root.addEventListener('click', (ev) => {
    const el = ev.target
    if (!(el instanceof HTMLElement && el.tagName === 'A')) {
      return
    }
    browser.runtime.sendMessage({
      action: 'open',
      path: '/note',
      id: el.dataset.id,
    })
  })
}

export function createJoplinElement() {
  const $root = document.createElement('div')
  $root.className = 'joplin-root'

  const $style = document.createElement('style')
  $style.innerHTML = `
  .joplin-root .joplin-header {
    font-size: 18px;
  }
  .joplin-root ul {
    list-style-type: none;
    padding-left: 0;
  }
  
  .joplin-root ul li {
    font-size: 16px;
    margin-bottom: 14px;
  }
  `
  document.head.appendChild($style)
  return $root
}
