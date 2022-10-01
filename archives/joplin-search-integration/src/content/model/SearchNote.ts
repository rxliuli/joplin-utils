import { NoteProperties } from 'joplin-api'

export type SearchNote = Pick<NoteProperties, 'id' | 'title'>
