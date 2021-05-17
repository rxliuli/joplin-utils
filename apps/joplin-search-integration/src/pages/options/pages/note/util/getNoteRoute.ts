/**
 * 获取笔记视图的 url
 * @param id
 */
export function getNoteRoute(id: string) {
  if (!window?.browser?.runtime) {
    return ''
  }
  return browser.runtime.getURL(`/pages/options/index.html#/note/${id}`)
}
