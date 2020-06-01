import { NoteProperties } from './NoteProperties'
import { CommonType } from './CommonType'

export type NoteGetRes = Pick<
  NoteProperties,
  | 'id'
  | 'title'
  | 'is_todo'
  | 'todo_completed'
  | 'parent_id'
  | 'updated_time'
  | 'user_updated_time'
  | 'user_created_time'
  | 'encryption_applied'
> &
  CommonType
