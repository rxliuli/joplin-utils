import { AsyncArray } from '@liuli-util/async'
import { mkdirp, writeFile } from '@liuli-util/fs-extra'
import path from 'path'
import { ConvertConfig, Note, OutputPlugin } from '../convert'

function addMeta(note: Note): string {
  // TODO 需要修改 markdown 的 yaml meta
  return note.content
}

export function hexoOutput(): OutputPlugin {
  let config: ConvertConfig, _postsPath: string, resourcePath: string
  return {
    name: 'hexoOutput',
    async config(options) {
      config = options
      const root = options.root ?? path.resolve()
      _postsPath = path.resolve(root, 'source/_posts')
      resourcePath = path.resolve(root, 'source/resource')
      await mkdirp(_postsPath)
      await mkdirp(resourcePath)
    },
    async handle(note) {
      await writeFile(path.resolve(_postsPath, note.id + '.md'), addMeta(note))
      await AsyncArray.forEach(note.resources, async (item) => {
        await writeFile(path.resolve(resourcePath, item.id + path.extname(item.title)), item.raw)
      })
    },
  }
}
