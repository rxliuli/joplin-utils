import { noteApi } from './NoteApi'
// noinspection ES6PreferShortImport
import { TypeEnum } from '../modal/TypeEnum'
import { NoteGetRes } from '../modal/NoteGetRes'
import { IntBool } from '../types/IntBool'

class NoteExtApi {
  /**
   * 重命名笔记
   * @param id
   * @param title
   */
  rename(id: string, title: string) {
    return noteApi.update({ id, title })
  }

  /**
   * 将笔记移动到指定目录
   * @param id
   * @param parentId
   */
  move(id: string, parentId: string) {
    return noteApi.update({ id, parent_id: parentId })
  }

  /**
   * 切换 to-do 的状态
   * @param id
   * @param completed
   */
  async toggleTodo(id: string, completed?: IntBool) {
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
      todo_completed: completed || (note.todo_completed === 0 ? 1 : 0),
    })
  }
}

export const noteExtApi = new NoteExtApi()
