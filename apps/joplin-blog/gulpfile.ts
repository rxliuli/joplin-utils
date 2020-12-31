import { readFile, remove, writeFile } from 'fs-extra'
import * as path from 'path'

/**
 * 删除 dist 目录
 */
export async function clean() {
  await remove(path.resolve(__dirname, 'dist'))
}

async function addBanner(filePath: string, banner: string) {
  const options = {
    encoding: 'utf-8',
  }
  await writeFile(
    filePath,
    banner + (await readFile(filePath, options)),
    options,
  )
}

/**
 * 添加顶部的 cli 横幅
 */
export async function addCliBanner() {
  await addBanner(
    path.resolve(__dirname, 'dist/bin.js'),
    '#!/usr/bin/env node\n',
  )
}
