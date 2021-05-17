import { CommonType } from './CommonType'
import { BaseProperties } from './BaseProperties'

export type NoteTagRelated = CommonType &
  Pick<
    BaseProperties,
    | 'id'
    | 'updated_time'
    | 'created_time'
    | 'user_updated_time'
    | 'user_created_time'
  > & {
    tag_id: string
    note_id: string
  }
