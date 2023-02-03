import path from 'path'
import { CommonNote, CommonResource } from '../model/CommonNote'
import { pathExists, readJson, writeJson } from '@liuli-util/fs-extra'

type CacheNote = Pick<CommonNote, 'id' | 'updatedTime'>
type CacheResource = Pick<CommonResource, 'id' | 'user_updated_time'>

export interface CacheConfig {
  note: CacheNote[]
  resource: CacheResource[]
}

class CacheCommanderProgram {
  private cachePath = path.resolve('.joplin-cache.json')
  private readonly defaultCacheConfig: CacheConfig = {
    note: [],
    resource: [],
  }
  async init() {
    await this.write(this.defaultCacheConfig)
  }

  async write(cache: CacheConfig) {
    await writeJson(this.cachePath, cache)
  }

  async read() {
    if (!(await pathExists(this.cachePath))) {
      await this.init()
    }
    return (await readJson(this.cachePath)) as CacheConfig
  }
}

export const cacheCommanderProgram = new CacheCommanderProgram()
