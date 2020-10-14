import { TagGetRes } from "joplin-api/dist/modal/TagGetRes"

function getTagSvg() {
  const tagSvgLight = `
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2002 2H8.01724L7.66424 2.146L1.00024 8.81V9.517L6.18324 14.7H6.89024L9.10531 12.4853C9.65832 12.7768 10.2677 12.9502 10.8945 12.9923C11.659 13.0437 12.424 12.8981 13.1162 12.5694C13.8085 12.2407 14.4048 11.74 14.8483 11.1151C15.2918 10.4902 15.5676 9.76192 15.6492 9H15.6493C15.6759 8.83446 15.6929 8.66751 15.7003 8.5C15.6989 7.30693 15.2244 6.16311 14.3808 5.31948C14.1712 5.10988 13.9431 4.92307 13.7002 4.76064V2.5L13.2002 2ZM12.7002 4.25881C12.223 4.08965 11.7162 4.00057 11.2003 4C11.0676 4 10.9405 4.05268 10.8467 4.14645C10.7529 4.24021 10.7003 4.36739 10.7003 4.5C10.7003 4.63261 10.7529 4.75979 10.8467 4.85355C10.9405 4.94732 11.0676 5 11.2003 5C11.7241 5 12.2358 5.11743 12.7002 5.33771V7.476L8.77506 11.4005C8.75767 11.4095 8.74079 11.4194 8.72449 11.4304C8.6685 11.468 8.6207 11.5166 8.58397 11.5731C8.57475 11.5874 8.56627 11.602 8.55856 11.617L6.53624 13.639L2.06124 9.163L8.22424 3H12.7002V4.25881ZM13.7002 6.0505C14.3409 6.70435 14.7003 7.58365 14.7003 8.5C14.6955 8.66769 14.6784 8.8348 14.6493 9H14.6492C14.5675 9.58097 14.3406 10.1319 13.9894 10.6019C13.6383 11.0719 13.1743 11.4457 12.6403 11.6888C12.1063 11.9319 11.5197 12.0363 10.9346 11.9925C10.5622 11.9646 10.1982 11.8772 9.85588 11.7348L13.5542 8.037L13.7002 7.683V6.0505Z" fill="#424242"/>
  </svg>
  `

  const tagSvgDark = `
  <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M13.2 2H8.017L7.664 2.146L1 8.81V9.517L6.183 14.7H6.89L9.10507 12.4853C9.65808 12.7768 10.2674 12.9502 10.8942 12.9923C11.6588 13.0437 12.4238 12.8981 13.116 12.5694C13.8082 12.2407 14.4046 11.74 14.8481 11.1151C15.2915 10.4902 15.5673 9.76192 15.649 9H15.649C15.6757 8.83446 15.6927 8.66751 15.7 8.5C15.6987 7.30693 15.2242 6.16311 14.3805 5.31948C14.1709 5.10988 13.9428 4.92307 13.7 4.76064V2.5L13.2 2ZM12.7 4.25881C12.2227 4.08965 11.716 4.00057 11.2 4C11.0674 4 10.9402 4.05268 10.8465 4.14645C10.7527 4.24021 10.7 4.36739 10.7 4.5C10.7 4.63261 10.7527 4.75979 10.8465 4.85355C10.9402 4.94732 11.0674 5 11.2 5C11.7238 5 12.2356 5.11743 12.7 5.33771V7.476L8.77481 11.4005C8.75743 11.4095 8.74054 11.4194 8.72425 11.4304C8.66826 11.468 8.62046 11.5166 8.58373 11.5731C8.5745 11.5874 8.56602 11.602 8.55831 11.617L6.536 13.639L2.061 9.163L8.224 3H12.7V4.25881ZM13.7 6.0505C14.3407 6.70435 14.7 7.58365 14.7 8.5C14.6952 8.66769 14.6782 8.8348 14.649 9H14.649C14.5673 9.58097 14.3404 10.1319 13.9892 10.6019C13.638 11.0719 13.174 11.4457 12.64 11.6888C12.1061 11.9319 11.5194 12.0363 10.9344 11.9925C10.562 11.9646 10.1979 11.8772 9.85564 11.7348L13.554 8.037L13.7 7.683V6.0505Z" fill="#C5C5C5"/>
  </svg>
  `
  return document.body.classList.contains('vscode-dark') ? tagSvgDark : tagSvgLight
}

// enum ThemeEnum {
//   Dark = 'dark',
//   Light = 'light'
// }

// const theme = document.body.classList.contains('vscode-dark') ? ThemeEnum.Dark : ThemeEnum.Light

type Tag = Pick<TagGetRes, 'id' | 'title'>

let tagList: Tag[] = [
  { id: '1', title: 'code' },
  { id: '2', title: 'game' },
]

/**
 * 根据字符串创建 element
 */
function createElementByString(str: string): HTMLElement {
  const root = document.createElement('div')
  root.innerHTML = str
  return root.querySelector('*') as HTMLElement
}

/**
 * 创建一个 tag 标签元素
 */
function createTag(tag: Tag) {
  const el = createElementByString(
    `<span class="joplin-tag joplin-tag-light" data-id="${tag.id}">${tag.title}</span>`,
  )
  el.addEventListener('click', () => {
    console.log('click tag: ', tag)
    tagList = tagList.filter(({ id }) => id !== tag.id)
    render()
  })
  return el
}

/**
 * 渲染标签列表
 */
function render() {
  const $root = document.querySelector('#joplin-tags')!
  const nodeList = tagList.map(tag => createTag(tag))
  console.log('nodeList: ', nodeList)
  $root.innerHTML = ''
  nodeList.forEach((el) => {
    $root.appendChild(el)
  })
}

// 初始化
function init() {
  console.log('hello')
  document.body.insertBefore(
    createElementByString(`
    <div class="joplin-tag-toolbar">
      <div id="joplin-tags"></div>
      <div id="joplin-tag-add" class="joplin-tag-add">${getTagSvg()}</div>
    </div>
    `),
    document.body.firstChild,
  )
  document.querySelector('#joplin-tag-add').addEventListener('click', () => {
    tagList.push({ id: Date.now().toString(), title: 'music' })
    render()
  })
  render()
}

init()