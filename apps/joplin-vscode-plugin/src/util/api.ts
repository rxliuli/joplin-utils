import { noteApi } from 'joplin-api'
import * as vscode from 'vscode'

/**
 * 加载最后编辑的一些笔记
 * @private
 */
export async function loadLastNoteList(): Promise<(vscode.QuickPickItem & { id: string })[]> {
  const list = await noteApi.list({
    fields: ['id', 'title'],
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
