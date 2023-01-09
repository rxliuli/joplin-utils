import { mkdirp, pathExists, readFile, remove, open, close, writeFile } from 'fs-extra'
import path from 'path'
import { beforeEach, expect, it } from 'vitest'
import { resourceApi } from '../../JoplinApiGenerator'
import fetch from 'node-fetch'
import { FormData } from 'formdata-polyfill/esm.min.js'
import { Blob } from 'fetch-blob'

const tempPath = path.resolve(__dirname, '.temp')
beforeEach(async () => {
  await remove(tempPath)
  await mkdirp(tempPath)
  Reflect.set(globalThis, 'fetch', fetch)
  Reflect.set(globalThis, 'FormData', FormData)
  Reflect.set(globalThis, 'Blob', Blob)
})

it('create empty file and polyfill', async () => {
  const emptyPath = path.resolve(tempPath, 'test.km.svg')
  const handle = await open(emptyPath, 'w')
  try {
    expect(await pathExists(emptyPath)).toBeTruthy()
    const r = await resourceApi.create({
      title: path.basename(emptyPath),
      data: new Blob([await readFile(emptyPath)]),
    })
    expect(r).not.undefined
  } finally {
    await close(handle)
  }
})

it('create file and polyfill', async () => {
  const fsPath = path.resolve(__dirname, '../assets/resourcesByFileId.png')
  const data = await readFile(fsPath)
  const r = await resourceApi.create({
    title: path.basename(fsPath),
    data: new Blob([data]),
  })
  expect(r).not.undefined
  expect(data).deep.eq(await resourceApi.fileByResourceId(r.id))
})

it('update file', async () => {
  const emptyPath = path.resolve(tempPath, 'test.km.svg')
  const fsPath = path.resolve(__dirname, '../assets/resourcesByFileId.png')
  const handle = await open(emptyPath, 'w')
  try {
    expect(await pathExists(emptyPath)).toBeTruthy()
    const r = await resourceApi.create({
      title: path.basename(emptyPath),
      data: new Blob([await readFile(emptyPath)]),
    })
    expect(r).not.undefined
    const data = await readFile(fsPath)
    await resourceApi.update({ id: r.id, data: new Blob([data]) })
    expect(data).deep.eq(await resourceApi.fileByResourceId(r.id))
  } finally {
    await close(handle)
  }
})
