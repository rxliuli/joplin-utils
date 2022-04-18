import path from 'path'
import { GlobalContext } from '../state/GlobalContext'

export class JoplinNoteUtil {
  /**
   * 根据文件名获取笔记 id
   * @param fileName
   */
  static getNoteIdByFileName(fileName?: string) {
    if (!fileName) {
      return null
    }
    const tempNoteDirPath = path.resolve(GlobalContext.context.globalStorageUri.fsPath, '.tempNote')
    return GlobalContext.openNoteMap.get(path.isAbsolute(fileName) ? fileName : path.resolve(tempNoteDirPath, fileName))
  }

  /**
   * 消除第一行可能包含的 # 字符号
   * @param title
   */
  static trimTitleStart(title: string) {
    return title.startsWith('#') ? title.substr(1).trimLeft() : title
  }

  static titleFromBody(body: string) {
    if (!body) return ''
    const mdLinkRegex = /!?\[([^\]]+?)\]\(.+?\)/g
    const emptyMdLinkRegex = /!?\[\]\((.+?)\)/g
    const filterRegex = /^[# \n\t*`-]*/
    const lines = body.trim().split('\n')
    const title = lines[0].trim()
    return title.replace(filterRegex, '').replace(mdLinkRegex, '$1').replace(emptyMdLinkRegex, '$1').substring(0, 80)
  }
}
