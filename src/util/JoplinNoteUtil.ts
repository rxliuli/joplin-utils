import * as path from 'path'

export class JoplinNoteUtil {
  /**
   * 根据文件名获取笔记 id
   * @param fileName
   */
  static getNoteIdByFileName(fileName?: string) {
    if (!fileName) {
      return null
    }
    const joplinMdRegexp = new RegExp(`${path.sep}edit-(\\w{32})\\.md$`)
    console.log('focus: ', fileName, joplinMdRegexp.exec(fileName))
    if (!joplinMdRegexp.test(fileName)) {
      return null
    }
    return joplinMdRegexp.exec(fileName)![1]
  }

  /**
   * 消除第一行可能包含的 # 字符号
   * @param title
   */
  static trimTitleStart(title: string) {
    return title.startsWith('#') ? title.substr(1).trimLeft() : title
  }
}
