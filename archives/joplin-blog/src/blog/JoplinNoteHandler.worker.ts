import { CommonNote, CommonResource, CommonTag } from '../model/CommonNote'
import { JoplinNoteHandler } from './JoplinNoteHandler'
import { JoplinMarkdownUtil } from '../util/JoplinMarkdownUtil'
import { fromMarkdown } from '@liuli-util/markdown-util'

function _convertNote(
  note: CommonNote & { tags: CommonTag[]; resources: CommonResource[] },
  rule: {
    note: `${string}{id}`
    resource: `${string}{id}.{file_extension}`
  },
) {
  return JoplinNoteHandler.format(
    JoplinNoteHandler.convertLink(fromMarkdown(JoplinMarkdownUtil.trimBodyHeader(note.body)), note, {
      convertNote(id: string): string {
        return rule.note.replace('{id}', id)
      },
      convertResource(resource: CommonResource): string {
        return rule.resource.replace('{id}', resource.id).replace('{file_extension}', resource.file_extension)
      },
    }),
  )
}

export const convertJoplinNote = _convertNote
