import { loadEnv } from 'vite'
import { it, expect } from 'vitest'

it('test', async () => {
  const r = await loadEnv('development', '/Users/rxliuli/code/web/joplin-utils/packages/joplin-batch')
  console.log(r)
})
