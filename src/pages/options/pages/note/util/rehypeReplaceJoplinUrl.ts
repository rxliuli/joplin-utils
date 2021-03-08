import has from 'hast-util-has-property'
import visit from 'unist-util-visit'
import { Node } from 'unist'
import { RenderNote } from './render'
import { noteViewState } from '../NoteView.state'

/**
 * 替换 url
 * @param href
 */
export function replaceUrl(href: string, note: RenderNote): string {
  //内部引用笔记
  const noteLinkRegex = new RegExp('^:\\/(.+)$')
  if (href.startsWith(':/')) {
    const id = noteLinkRegex.exec(href)![1]
    if (note.resourceList.some((item) => item.id === id)) {
      return `http://localhost:41184/resources/${id}/file?token=${noteViewState.settings?.token}`
    }
    console.log('noteId: ', id)
    return `chrome-extension://gmkdjdbgpnfppnolhplppjfidknejkbm/pages/options/index.html#/note/${id}`
  }
  console.log(href)
  return href
}

export function rehypeReplaceJoplinUrl(note: RenderNote) {
  return function transformer(tree: Node) {
    visit(tree, 'element', function (node) {
      modifyLink(node, 'href')
      modifyMedia(node, 'src')
    })
  }

  function modifyLink(node: Node, prop: any) {
    if (has(node, prop)) {
      const url = (node.properties as any)[prop]
      ;(node.properties as any)[prop] = replaceUrl(url, note)
      ;(node.properties as any).target = '_blank'
    }
  }

  function modifyMedia(node: Node, prop: any) {
    if (has(node, prop)) {
      const url = (node.properties as any)[prop]
      ;(node.properties as any)[prop] = replaceUrl(url, note)
      ;(node.properties as any).style = 'max-width: 100%;'
    }
  }
}
