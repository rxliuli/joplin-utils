import { FolderProperties } from './FolderProperties'
import { CommonType } from './CommonType'

export type FolderUpdateRes = Pick<
  FolderProperties,
  | 'id'
  | 'title'
  | 'created_time'
  | 'updated_time'
  | 'user_created_time'
  | 'user_updated_time'
  | 'encryption_cipher_text'
  | 'encryption_applied'
  | 'parent_id'
  | 'is_shared'
> &
  CommonType
