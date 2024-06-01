import { Content, InputPlugin, Resource, wrapContentLink, wrapResourceLink } from '@mark-magic/core'
import joplin from 'joplin-plugin-api'
import { FolderListAllRes, NoteProperties, PageUtil, ResourceProperties, TagGetRes } from 'joplin-api'
import { Image, Link, fromMarkdown, selectAll, toMarkdown } from '@liuli-util/markdown-util'
import path from 'node:path'
import { extension } from 'mime-types'
import { AsyncArray } from '@liuli-util/async'
import { treeToList, listToTree } from '@liuli-util/tree'
import filenamify from 'filenamify'
import { keyBy } from 'lodash-es'

async function getFolders(): Promise<Record<string, FolderListAllRes & Pick<Content, 'path'>>> {
  const list = (await joplin.data.get(['folders'], { as_tree: 1 })) as FolderListAllRes[]
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

function calcTitle(resource: Pick<ResourceProperties, 'id' | 'title' | 'file_extension' | 'mime'>) {
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

function convertContentLink(body: string, resourceIds: string[]): string {
  const root = fromMarkdown(body)
  const list = (selectAll('image,link', root) as (Image | Link)[]).filter((it) => it.url.startsWith(':/'))
  list.forEach((it) => {
    const id = it.url.slice(2)
    if (resourceIds.includes(id)) {
      it.url = wrapResourceLink(it.url.slice(2))
      return
    }
    it.url = wrapContentLink(it.url.slice(2))
  })
  return toMarkdown(root)
}

export function joplinInput(options: { tag: string }): InputPlugin {
  return {
    name: 'joplin',
    async *generate() {
      const folders = await getFolders().catch(() => {
        throw new Error('Failed to retrieve folder list')
      })
      const notes = (await PageUtil.pageToAllList((arg) =>
        joplin.data.get(['search'], { ...arg, fields: ['id', 'title'], query: `tag:${options.tag}` }),
      )) as Pick<NoteProperties, 'id'>[]
      for (const n of notes) {
        const note = await joplin.data
          .get(['notes', n.id], {
            fields: ['id', 'title', 'body', 'user_created_time', 'user_updated_time', 'parent_id'],
          })
          .catch(() => {
            throw new Error('Failed to retrieve note')
          })
        const folder = folders[note.parent_id]
        const tags = (
          (await PageUtil.pageToAllList((arg) => joplin.data.get(['notes', `${n.id}`, 'tags'], arg)).catch(() => {
            throw new Error('Failed to retrieve note tags')
          })) as TagGetRes[]
        )
          .filter((item) => item.title !== options.tag)
          .map((it) => it.title)
        const resources = await AsyncArray.map(
          (await PageUtil.pageToAllList((arg) =>
            joplin.data.get(
              `/notes/${n.id}/resources`.split('/').filter((it) => it.trim().length > 0),
              {
                ...arg,
                fields: ['id', 'title', 'file_extension', 'mime'],
              },
            ),
          ).catch(() => {
            throw new Error('Failed to retrieve note resources')
          })) as ResourceProperties[],
          async (item) => {
            const buffer = (await joplin.data
              .get(`/resources/${item.id}/file`.split('/').filter((it) => it.trim().length > 0))
              .catch(() => {
                throw new Error('Failed to retrieve resource')
              })) as {
              type: 'attachment'
              body: Uint8Array
              contentType: string
              attachmentFilename: string
            }
            return {
              id: item.id,
              name: calcTitle(item),
              raw: Buffer.from(buffer.body),
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
