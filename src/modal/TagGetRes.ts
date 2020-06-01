import { TagProperties } from './TagProperties'
import { CommonType } from './CommonType'

export type TagGetRes = Pick<
  TagProperties,
  | 'id'
  | 'title'
  | 'created_time'
  | 'updated_time'
  | 'user_created_time'
  | 'user_updated_time'
  | 'encryption_cipher_text'
  | 'encryption_applied'
  | 'is_shared'
> &
  CommonType
