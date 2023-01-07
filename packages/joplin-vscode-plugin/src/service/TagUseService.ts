import { TagGetRes } from 'joplin-api'
import { mkdirp, pathExists, readJson, writeJson } from '@liuli-util/fs-extra'
import path from 'path'

interface TagUseEntity {
  id: string
  lastUseTime: number
  title: string
}

export class TagUseService {
  constructor(private readonly configPath: string) {}

  private async init() {
    if (!(await pathExists(this.configPath))) {
      await mkdirp(path.dirname(this.configPath))
      await writeJson(this.configPath, {
        tagUse: [],
      })
    }
  }

  async getMap(): Promise<Map<string, TagUseEntity>> {
    await this.init()
    const list: TagUseEntity[] = (await readJson(this.configPath)).tagUse
    return list.reduce((res, item) => res.set(item.id, item), new Map<string, TagUseEntity>())
  }

  async save(tags: Pick<TagGetRes, 'id' | 'title'>[]) {
    await this.init()
    const db = await readJson(this.configPath)
    const map = await this.getMap()
    tags.forEach((tag) => {
      map.set(tag.id, {
        id: tag.id,
        title: tag.title,
        lastUseTime: Date.now(),
      } as TagUseEntity)
    })
    await writeJson(this.configPath, {
      ...db,
      tagUse: [...map.values()],
    })
  }
}
