import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { noteApi } from 'joplin-api'

export class NoteExtendsApi {
  /**
   * 重命名笔记
   * @param param
   */
  rename(param: Pick<NoteProperties, 'id' | 'title'>) {
    return noteApi.update({
      id: param.id,
      title: param.title,
    })
  }

  /**
   * 将笔记移动到指定目录
   * @param noteId
   * @param movedParentId
   */
  move(noteId: string, movedParentId: string) {
    throw new Error('no impl')
  }
}
