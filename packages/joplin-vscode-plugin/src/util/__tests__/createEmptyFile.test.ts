import { fileURLToPath } from 'url'
import { expect, it, describe, beforeEach } from 'vitest'
import { mkdirp, readFile, remove, close } from '@liuli-util/fs-extra'
import * as path from 'path'
import { createEmptyFile } from '../createEmptyFile'

describe('测试 createEmptyFile', () => {
  const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp')
  beforeEach(async () => {
    await remove(tempPath)
    await mkdirp(tempPath)
  })
  it.skip('基本示例', async () => {
    const filePath = path.resolve(tempPath, 'test.drawio.svg')
    let handle: number
    try {
      handle = await createEmptyFile(filePath)
      expect(await readFile(filePath, 'utf-8')).toBe('')
    } finally {
      await close(handle!)
    }
  })
})
