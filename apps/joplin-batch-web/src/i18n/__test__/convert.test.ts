import { treeEach } from '@liuli-util/tree'
import zhCN from '../zhCN.json'
import { AsyncArray } from '@liuli-util/async'
import path from 'path'
import { readdir, readJson, writeJson } from 'fs-extra'
import { GeneratorCommandProgram } from '@liuli-util/i18next-dts-gen'

/**
 * 用于转换
 * @param v
 */
export function flatObject(v: object) {
  const res: Record<string, string> = {}
  function inner(v: object | string, path: string[]) {
    if (typeof v === 'string') {
      res[path.join('.')] = v
      return
    }
    Object.entries(v).forEach(([k, v]) => {
      inner(v, [...path, k])
    })
  }
  Object.entries(v).forEach(([k, v]) => {
    inner(v, [k])
  })
  return res
}

async function migrate2To3(dirs: string[]) {
  await AsyncArray.forEach(dirs, async (dir) => {
    await AsyncArray.map(await readdir(path.resolve(dir)), async (file) => {
      const jsonPath = path.resolve(dir, file as string)
      await writeJson(jsonPath, flatObject(await readJson(jsonPath)), {
        spaces: 2,
      })
    })
  })
  await new GeneratorCommandProgram().main({
    dirs,
    language: 'en',
    watch: false,
  })
}
it('转换', async () => {
  await migrate2To3([
    path.resolve(
      'C:\\Users\\rxliuli\\Code\\Web\\joplin-utils\\apps\\joplin-batch-web\\src\\i18n',
    ),
  ])
})
