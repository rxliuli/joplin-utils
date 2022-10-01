import { NoteApi } from './NoteApi'
// noinspection ES6PreferShortImport
import { IntBool } from '../types/IntBool'
import { Ajax } from '../util/ajax'
import { NoteUpdateRes } from '../model/NoteUpdateRes'

export class NoteExtApi {
  private readonly noteApi: NoteApi

  constructor(ajax: Ajax) {
    this.noteApi = new NoteApi(ajax)
  }

  /**
   * 重命名笔记
   * @param id
   * @param title
   */
  rename(id: string, title: string): Promise<NoteUpdateRes> {
    return this.noteApi.update({ id, title })
  }

  /**
   * 将笔记移动到指定目录
   * @param id
   * @param parentId
   */
  move(id: string, parentId: string): Promise<NoteUpdateRes> {
    return this.noteApi.update({ id, parent_id: parentId })
  }

  /**
   * 切换 to-do 的状态
   * @param id
   * @param completed
   */
  async toggleTodo(id: string, completed?: IntBool): Promise<void> {
    const note = await this.noteApi.get(id, ['id', 'is_todo', 'todo_completed'])
    if (!note.is_todo) {
      return
    }
    await this.noteApi.update({
      id: note.id,
      todo_completed: completed || (note.todo_completed === 0 ? 1 : 0),
    })
  }
}
