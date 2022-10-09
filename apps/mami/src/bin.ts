import { readFile } from '@liuli-util/fs-extra'

console.log(await readFile(new URL(import.meta.url), 'utf-8'))
