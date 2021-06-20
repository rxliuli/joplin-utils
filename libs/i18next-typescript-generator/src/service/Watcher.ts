import { watch } from 'chokidar'
import path from 'path'
import { exhaustMapByParam } from '../util/exhaustMapByParam'

/**
 * 目录监视器
 */
export class Watcher {
  watchDirs(dirs: string[], callback: (dir: string) => Promise<void>) {
    const _callback = exhaustMapByParam(callback)
    return watch(
      dirs.map((dir) => path.join(dir, '*.json')),
      {
        depth: 1,
      },
    ).on('all', async (eventName, filePath, status) => {
      await _callback(path.dirname(filePath))
    })
  }
}
