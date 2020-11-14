import { NoteProperties } from './NoteProperties'

export type NoteGetRes = Pick<NoteProperties, 'id' | 'title' | 'parent_id'>
