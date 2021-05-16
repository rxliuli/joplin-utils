import { folderApi, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { groupBy } from '@liuli-util/array'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { treeFilter, treeMap } from '@liuli-util/tree'

export class WikiUtil {
  static async getJoplinSidebar(tag: string) {
    const folderList = await folderApi.listAll()
    const noteList = await PageUtil.pageToAllList((pageParam) =>
      searchApi.search({
        ...(pageParam as any),
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
          'parent_id',
        ],
        type: TypeEnum.Note,
        query: `tag:${tag}`,
      }),
    )
    const noteGroupMap = groupBy(
      noteList.map((note) => ({
        ...note,
        title: JoplinMarkdownUtil.trimTitle(note.title),
        type_: TypeEnum.Note,
      })),
      (note) => note.parent_id,
    )
    const options = {
      id: 'id',
      children: 'children',
    } as const
    return treeFilter(
      treeMap(
        folderList,
        (item) => {
          const noteChildren = noteGroupMap.get(item.id) || []
          return {
            ...item,
            children: [...(item.children || []), ...noteChildren],
          }
        },
        options,
      ),
      (item) =>
        item.type_ === TypeEnum.Note ||
        (item.type_ === TypeEnum.Folder && item.children!.length !== 0),
      options,
    )
  }
}
