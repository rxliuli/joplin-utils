import type Joplin from './Joplin'

const joplin: Joplin = (globalThis as any).joplin

export default joplin

export * from './types'
