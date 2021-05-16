import { TreeOption } from '@liuli-util/tree/dist/treeOption'

export type ReType<T, K extends string> = T & { [P in K]?: ReType<T, K>[] }

/**
 * 将列表转为树
 * @param list
 * @param options
 */
export function listToTree<
  T extends object,
  C extends Pick<TreeOption<T>, 'id'> & {
    parentId: keyof T
    children: string & keyof R
  },
  R extends ReType<T, C['children']>
>(list: T[], options: C): R[] {
  const res: R[] = []
  const fullMap = new Map<T[C['id']], T>(list.map((v) => [v[options.id], v]))

  for (let node of list) {
    const parent: R = fullMap.get(node[options.parentId]) as R
    if (parent) {
      if (!parent[options.children]) {
        parent[options.children] = [] as any
      }
      parent[options.children]!.push(node as any)
    } else {
      res.push(node as any)
    }
  }

  return res
}
