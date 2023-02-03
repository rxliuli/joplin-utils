import { treeToList } from '@liuli-util/tree'
import { folderApi, noteApi, PageUtil } from 'joplin-api'
import { NoteProperties } from 'joplin-api'

export class CheckParentNotebookService {
  async check(): Promise<Pick<NoteProperties, 'id' | 'title' | 'parent_id'>[]> {
    const folderIdSet = new Set(
      treeToList(await folderApi.listAll(), {
        id: 'id',
        path: 'path',
        children: 'children',
      }).map((folder) => folder.id),
    )
    const list = await PageUtil.pageToAllList(noteApi.list.bind(noteApi), {
      fields: ['id', 'title', 'parent_id'],
      order_by: 'user_updated_time',
      order_dir: 'DESC',
    })
    return list.filter((item) => !folderIdSet.has(item.parent_id))
  }
}
