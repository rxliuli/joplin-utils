import { fileURLToPath } from 'url'
import { expect, it, describe, beforeEach } from 'vitest'
import * as path from 'path'
import { createEmptyFile } from '../createEmptyFile'
import { FileHandle, readFile, rm } from 'node:fs/promises'
import { mkdir } from 'fs/promises'

describe('测试 createEmptyFile', () => {
  const tempPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '.temp')
  beforeEach(async () => {
    await rm(tempPath, { force: true, recursive: true })
    await mkdir(tempPath, { recursive: true })
  })
  it.skip('基本示例', async () => {
    const filePath = path.resolve(tempPath, 'test.drawio.svg')
    let handle: FileHandle
    try {
      handle = await createEmptyFile(filePath)
      expect(await readFile(filePath, 'utf-8')).toBe('')
    } finally {
      await handle!.close()
    }
  })
})
