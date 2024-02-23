import { TagGetRes } from 'joplin-api'
import { pathExists } from 'path-exists'
import path from 'path'
import { mkdir, readFile, writeFile } from 'fs/promises'

interface TagUseEntity {
  id: string
  lastUseTime: number
  title: string
}

export class TagUseApi {
  constructor(private readonly configPath: string) {}

  private async init() {
    if (!(await pathExists(this.configPath))) {
      await mkdir(path.dirname(this.configPath), { recursive: true })
      await writeFile(this.configPath, JSON.stringify({ tagUse: [] }))
    }
  }

  async getMap(): Promise<Map<string, TagUseEntity>> {
    await this.init()
    const list: TagUseEntity[] = JSON.parse(await readFile(this.configPath, 'utf-8')).tagUse
    return list.reduce((res, item) => res.set(item.id, item), new Map<string, TagUseEntity>())
  }

  async save(tags: Pick<TagGetRes, 'id' | 'title'>[]) {
    await this.init()
    const db = JSON.parse(await readFile(this.configPath, 'utf-8'))
    const map = await this.getMap()
    tags.forEach((tag) => {
      map.set(tag.id, {
        id: tag.id,
        title: tag.title,
        lastUseTime: Date.now(),
      } as TagUseEntity)
    })
    await writeFile(
      this.configPath,
      JSON.stringify({
        ...db,
        tagUse: [...map.values()],
      }),
    )
  }
}
