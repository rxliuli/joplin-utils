import { folderApi, noteApi } from 'joplin-api'
import { PageRes } from 'joplin-api/dist/modal/PageData'
import { treeToList } from '@liuli-util/tree'
import { AsyncArray } from '@liuli-util/async'
import * as path from 'path'
import { groupBy, sortBy } from '@liuli-util/array'
import { FolderListAllRes } from 'joplin-api/dist/modal/FolderListAllRes'

type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<
  PageRes<infer U>
>
  ? U
  : never

async function readAll<F extends (...args: any[]) => Promise<any>>(
  fn: F,
  pageParam: Omit<Parameters<F>[0], 'page' | 'limit'>,
  callback: (items: PageResValueType<ReturnType<F>>[]) => Promise<void>,
): Promise<void> {
  for (let i = 1, hasMore = true; hasMore; i++) {
    const res = await fn({
      ...pageParam,
      page: i,
      limit: 100,
    })
    hasMore = res.has_more
    await callback(res.items)
  }
}

interface ExporterConfig {
  rootPath: string
}

/**
 * 导出程序
 */
export class Exporter {
  constructor(private readonly config: ExporterConfig) {}

  exp() {}

  async folder() {
    const tree = await folderApi.listAll()
    const list = treeToList(tree, {
      id: 'id',
      children: 'children',
      path: 'path',
    })
    const pathDuplicateIdSet = new Set(
      [...groupBy(list, (item) => item.path.join('.'))]
        .filter(([k, v]) => v.length === 2)
        .flatMap(([k, v]) => v)
        .map((v) => v.id),
    )
    await AsyncArray.map(
      sortBy(list, (item) => item.path.length),
      async (item) => {
        let folderPath = path.resolve(this.config.rootPath, ...item.path)
        if (pathDuplicateIdSet.has(item.id)) {
          folderPath += '_' + item.id
        }
        return {
          ...item,
          folderPath,
        } as FolderListAllRes & { folderPath: string }
      },
    )
  }

  async note() {
    await readAll(
      noteApi.list,
      {
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
        ],
      },
      async (items) => {},
    )
  }

  async resource() {}

  async tag() {}
}
