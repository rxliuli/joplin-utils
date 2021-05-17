import { NoteProperties } from './NoteProperties'
import { CommonType } from './CommonType'

export type NoteCreateRes = Pick<
  NoteProperties,
  | 'id'
  | 'title'
  | 'body'
  | 'parent_id'
  | 'markup_language'
  | 'updated_time'
  | 'created_time'
  | 'source'
  | 'source_application'
  | 'user_updated_time'
  | 'user_created_time'
> &
  CommonType
