import { CommonType } from './CommonType'

export interface NoteTagRelated extends CommonType {
  id: string
  tag_id: string
  note_id: string
  updated_time: number
  created_time: number
  user_updated_time: number
  user_created_time: number
}
