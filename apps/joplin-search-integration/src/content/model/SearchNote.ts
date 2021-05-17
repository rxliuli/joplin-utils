import { NoteProperties } from 'joplin-api/dist/modal/NoteProperties'

export type SearchNote = Pick<NoteProperties, 'id' | 'title'>
