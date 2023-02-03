import { ResourceProperties } from 'joplin-api'
import { NoteProperties } from 'joplin-api'
import { TagProperties } from 'joplin-api'

export type CommonNote = Pick<NoteProperties, 'id' | 'title' | 'body'> & {
  createdTime: number
  updatedTime: number
}

export type CommonResource = Pick<ResourceProperties, 'id' | 'file_extension' | 'title' | 'user_updated_time'>

export type CommonTag = Pick<TagProperties, 'id' | 'title'>
