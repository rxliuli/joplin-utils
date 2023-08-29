import { NoteProperties } from 'joplin-api'
import { CommonType } from 'joplin-api'
import { noteApi, TypeEnum, folderApi } from 'joplin-api'
import * as vscode from 'vscode'

class JoplinNoteApi {
  async get(
    id: string,
  ): Promise<Pick<NoteProperties, 'id' | 'parent_id' | 'title' | 'is_todo' | 'todo_completed'> & CommonType> {
    return {
      ...(await noteApi.get(id, ['id', 'parent_id', 'title', 'is_todo', 'todo_completed', 'user_updated_time'])),
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
      await folderApi.notesByFolderId(folderId, [
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
  async loadLastNoteList(): Promise<(vscode.QuickPickItem & { id: string })[]> {
    const list = await noteApi.list({
      fields: ['id', 'title', 'body'],
      limit: 20,
      order_dir: 'DESC',
      order_by: 'user_updated_time',
    })
    return list.items.map(
      (item) =>
        ({
          label: item.title,
          id: item.id,
          alwaysShow: true,
        } as vscode.QuickPickItem & { id: string }),
    )
  }
}

export const joplinNoteApi = new JoplinNoteApi()
