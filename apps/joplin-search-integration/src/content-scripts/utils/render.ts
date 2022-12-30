import { SearchNote } from '../plugins/plugin'

export function renderList(root: HTMLDivElement, list: SearchNote[]) {
  const html = `<div>
  <h2 class="header">Joplin search notes</h2>
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
    chrome.runtime.sendMessage({
      action: 'open',
      id: el.dataset.id,
    })
  })
}

export function createJoplinElement() {
  const $root = document.createElement('div')
  $root.className = 'joplin-root'

  const $style = document.createElement('style')
  $style.innerHTML = `
  .joplin-root .header {
    font-size: 18px;
  }
  .joplin-root ul {
    list-style-type: none;
  }
  
  .joplin-root ul li {
    font-size: 16px;
    margin: 14px 0;
  }
  `
  document.head.appendChild($style)
  return $root
}
