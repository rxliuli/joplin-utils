import { FolderProperties } from './FolderProperties'
import { CommonType } from './CommonType'

export type FolderCreateRes = Pick<
  FolderProperties,
  | 'id'
  | 'title'
  | 'parent_id'
  | 'updated_time'
  | 'created_time'
  | 'user_updated_time'
  | 'user_created_time'
> &
  CommonType
