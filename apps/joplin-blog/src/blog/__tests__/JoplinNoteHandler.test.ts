import { fileURLToPath } from 'url'
import { expect, it, describe, beforeEach } from 'vitest'
import * as path from 'path'
import { remove, mkdirp } from '@liuli-util/fs-extra'
import { fromMarkdown, toMarkdown } from '@liuli-util/markdown-util'

describe('测试 JoplinNoteHandler', () => {
  const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp')
  beforeEach(async () => {
    await remove(tempPath)
    await mkdirp(tempPath)
  })
  it('基本示例', async () => {
    const text = `# test

1. one
2. two
`
    expect(toMarkdown(fromMarkdown(text))).toBe(text)
  })
})
