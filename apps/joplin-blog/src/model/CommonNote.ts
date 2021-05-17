import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'
import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'
import { TagProperties } from 'joplin-api/dist/modal/TagProperties'

export type CommonNote = Pick<NoteProperties, 'id' | 'title' | 'body'> & {
  createdTime: number
  updatedTime: number
}

export type CommonResource = Pick<
  ResourceProperties,
  'id' | 'file_extension' | 'title'
>

export type CommonTag = Pick<TagProperties, 'id' | 'title'>
