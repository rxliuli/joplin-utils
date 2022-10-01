import { expect, it } from 'vitest'
import { figletPromise } from '../utils'

it('测试 figletPromise', async () => {
  console.log(await figletPromise('joplin-blog'))
})
