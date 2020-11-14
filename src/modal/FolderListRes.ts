import { FolderProperties } from './FolderProperties'

export type FolderListRes = Pick<FolderProperties, 'id' | 'parent_id' | 'title'>
