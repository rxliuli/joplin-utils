import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { noteApi, TypeEnum } from 'joplin-api'
import { FolderOrNote } from '../model/FolderOrNote'
import { NoteGetRes } from 'joplin-api/dist/modal/NoteGetRes'
import { FolderListRes } from 'joplin-api/dist/modal/FolderListRes'

class NoteExtendsApi {
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
  /**
   * 切换 todo 的状态
   */
  async toggleTodoState(id: string) {
    const item = await noteApi.get(id)
    if (item.type_ !== TypeEnum.Note) {
      return
    }
    const note = item as NoteGetRes
    if (!note.is_todo) {
      return
    }
    await noteApi.update({
      id: note.id,
      todo_completed: note.todo_completed === 0 ? 1 : 0,
    })
  }
}

export const noteExtendsApi = new NoteExtendsApi()
