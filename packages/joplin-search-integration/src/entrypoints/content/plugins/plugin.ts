import { NoteProperties } from 'joplin-api'

export type SearchNote = Pick<NoteProperties, 'id' | 'title'>

export interface SearchPlugin {
  name: string
  match(url: URL): boolean
  getQuery(): string | undefined
  createRenderRoot(): HTMLDivElement
}
