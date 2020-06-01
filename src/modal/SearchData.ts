import { NoteProperties } from './NoteProperties'
import { SearchTypeEnum } from './SearchTypeEnum'

export type SearchData = Pick<
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
> & {
  type_: SearchTypeEnum
}
