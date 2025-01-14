import { NoteProperties, TypeEnum } from 'joplin-api'
import { CommonType } from 'joplin-api'
import * as vscode from 'vscode'
import { GlobalContext } from '../constants/context'

class JoplinNoteApi {
  async get(
    id: string,
  ): Promise<Pick<NoteProperties, 'id' | 'parent_id' | 'title' | 'is_todo' | 'todo_completed'> & CommonType> {
    return {
      ...(await GlobalContext.api.note.get(id, [
        'id',
        'parent_id',
        'title',
        'is_todo',
        'todo_completed',
        'user_updated_time',
      ])),
      type_: TypeEnum.Note,
    }
  }

  async notesByFolderId(
    folderId: string,
  ): Promise<
    (Pick<NoteProperties, 'id' | 'parent_id' | 'title' | 'is_todo' | 'todo_completed' | 'user_updated_time'> &
      CommonType)[]
  > {
    return (
      await GlobalContext.api.folder.notesByFolderId(folderId, [
        'id',
        'parent_id',
        'title',
        'is_todo',
        'todo_completed',
        'user_updated_time',
      ])
    )
      .map((note) => ({
        ...note,
        type_: TypeEnum.Note,
      }))
      .sort((a, b) => b.user_updated_time - a.user_updated_time)
  }

  /**
   * 加载最后编辑的一些笔记
   * @private
   */
  async loadLastNoteList(): Promise<(vscode.QuickPickItem & { id: string; parent_id: string })[]> {
    const list = await GlobalContext.api.note.list({
      fields: ['id', 'title', 'body', 'parent_id'],
      limit: 20,
      order_dir: 'DESC',
      order_by: 'user_updated_time',
    })
    return list.items.map((item) => ({
      label: item.title,
      id: item.id,
      alwaysShow: true,
      parent_id: item.parent_id,
    }))
  }
}

export const joplinNoteApi = new JoplinNoteApi()
