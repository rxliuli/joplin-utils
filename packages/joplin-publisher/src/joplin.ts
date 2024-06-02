import { PageUtil, FolderListAllRes, TypeEnum, ResourceProperties, joplinDataApi, ApiConfig, Api } from 'joplin-api'
import { type InputPlugin, type Content, type Resource, wrapResourceLink, wrapContentLink } from '@mark-magic/core'
import { AsyncArray } from '@liuli-util/async'
import { listToTree, treeToList } from '@liuli-util/tree'
import { keyBy } from 'lodash-es'
import path from 'path'
import { extension } from 'mime-types'
import { Image, Link, fromMarkdown, selectAll, toMarkdown } from '@liuli-util/markdown-util'
import filenamify from 'filenamify'

async function getFolders(api: Api): Promise<Record<string, FolderListAllRes & Pick<Content, 'path'>>> {
  const list = await api.folder.listAll()
  const treeList = treeToList(listToTree(list, { id: 'id', children: 'children', parentId: 'parent_id' }), {
    id: 'id',
    children: 'children',
    path: 'path',
  }) as unknown as (FolderListAllRes & Pick<Content, 'path'>)[]
  const map = keyBy(treeList, (item) => item.id)
  const r = keyBy(
    treeList.map((item) => ({ ...item, path: item.path.map((s) => map[s].title) })),
    (item) => item.id,
  )
  return r
}

export function calcTitle(resource: Pick<ResourceProperties, 'id' | 'title' | 'file_extension' | 'mime'>) {
  const title = resource.title ? resource.title : resource.id
  const ext = resource.file_extension ? resource.file_extension : extension(resource.mime)
  if (!ext) {
    return resource.title
  }
  const e = '.' + ext
  if (path.extname(title) === e) {
    return title
  }
  return title + e
}

export function convertContentLink(body: string, resourceIds: string[]): string {
  const root = fromMarkdown(body)
  const list = (selectAll('image,link', root) as (Image | Link)[]).filter((it) => it.url.startsWith(':/'))
  list.forEach((it) => {
    const id = it.url.slice(2)
    if (it.type === 'image' || resourceIds.includes(id)) {
      it.url = wrapResourceLink(it.url.slice(2))
      return
    }
    it.url = wrapContentLink(it.url.slice(2))
  })
  return toMarkdown(root)
}

export function input(options: ApiConfig & { tag: string }): InputPlugin {
  return {
    name: 'joplin',
    async *generate() {
      const api = joplinDataApi(options)
      await api.joplin.ping().catch((err) => {
        console.error(err)
        throw new Error(`Failed to connect to Joplin, please visit /ping`)
      })
      await api.note.list({ limit: 1, fields: ['id'] }).catch(() => {
        throw new Error('The token is invalid')
      })
      const folders = await getFolders(api).catch(() => {
        throw new Error('Failed to retrieve folder list')
      })
      const notes = await PageUtil.pageToAllList((pageParam) =>
        api.search.search({
          ...(pageParam as any),
          fields: ['id'],
          type: TypeEnum.Note,
          query: `tag:${options.tag}`,
        }),
      ).catch(() => {
        throw new Error('Failed to retrieve note list')
      })
      for (const n of notes) {
        const note = await api.note
          .get(n.id, ['id', 'title', 'body', 'user_created_time', 'user_updated_time', 'parent_id'])
          .catch(() => {
            throw new Error('Failed to retrieve note')
          })
        const tags = (
          await api.note.tagsById(n.id).catch(() => {
            throw new Error('Failed to retrieve note tags')
          })
        )
          .filter((item) => item.title !== options.tag)
          .map((it) => it.title)
        const folder = folders[note.parent_id]
        const resources = await AsyncArray.map(
          await api.note.resourcesById(n.id, ['id', 'title', 'file_extension', 'mime']).catch(() => {
            throw new Error('Failed to retrieve note resources')
          }),
          async (item) => {
            return {
              id: item.id,
              name: calcTitle(item),
              raw: Buffer.from(
                await (
                  await api.resource.fileById(item.id).catch((err) => {
                    console.error('Failed to retrieve resource', err)
                    throw new Error('Failed to retrieve resource')
                  })
                ).arrayBuffer(),
              ),
            } as Resource
          },
        )

        const name = (note.title.startsWith('# ') ? note.title.slice(2) : note.title).trim()
        // 找到标题，如果找不到，则添加一级标题
        if (!/^(#+ )/.test(note.body)) {
          note.body = '# ' + name + '\n\n' + note.body.trimStart()
        }
        const inputNote: Content = {
          id: note.id,
          name,
          content: convertContentLink(
            note.body,
            resources.map((item) => item.id),
          ),
          created: note.user_created_time,
          updated: note.user_updated_time,
          path: [...(folder?.path ?? []), filenamify(note.title) + '.md'],
          resources,
          extra: {
            tags,
          },
        }
        yield inputNote
      }
    },
  }
}
