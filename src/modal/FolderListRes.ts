import { FolderProperties } from './FolderProperties'
import { CommonType } from './CommonType'

export type FolderListRes = Pick<
  FolderProperties,
  'id' | 'parent_id' | 'title'
> & {
  note_count: number
  children?: FolderListRes[]
} & CommonType
