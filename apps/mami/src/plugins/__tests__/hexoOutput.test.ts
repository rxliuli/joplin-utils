import { mkdirp, remove, readFile, pathExists } from '@liuli-util/fs-extra'
import path from 'path'
import { beforeEach, expect, it } from 'vitest'
import { convert, InputPlugin, Note, Resource } from '../../convert'
import { hexoOutput } from '../hexoOutput'

const tempPath = path.resolve(__dirname, '.temp')
beforeEach(async () => {
  await remove(tempPath)
  await mkdirp(tempPath)
})

it('hexoOutput', async () => {
  const generateVirtual: InputPlugin = {
    name: 'generateVirtual',
    async *generate() {
      yield { id: 'test1', title: 'test1', content: '', resources: [] as Resource[] } as Note
      yield {
        id: 'test2',
        title: 'test2',
        content: '',
        resources: [
          {
            id: 'test',
            title: path.basename(__filename),
            raw: await readFile(__filename),
          },
        ] as Resource[],
      } as Note
    },
  }
  await convert({
    root: tempPath,
    plugins: [generateVirtual, hexoOutput()],
  })

  expect(await pathExists(path.resolve(tempPath, 'source/_posts/test1.md'))).to.be.true
  expect(await pathExists(path.resolve(tempPath, 'source/_posts/test2.md'))).to.be.true
  expect(await pathExists(path.resolve(tempPath, 'source/resource/test.ts'))).to.be.true
})
