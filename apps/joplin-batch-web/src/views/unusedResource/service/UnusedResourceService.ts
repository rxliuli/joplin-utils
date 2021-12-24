import { JoplinApiGenerator } from 'joplin-api'
import { AsyncArray, asyncLimiting } from '@liuli-util/async'
import { PageUtil } from 'joplin-api'
import { PromiseUtil } from '../../../common/PromiseUtil'
import { ResourceProperties } from 'joplin-api/dist/modal/ResourceProperties'

export type ProcessInfo = {
  rate: number
  all: number
  title: string
}

export type ProcessEvents = {
  process(options: ProcessInfo): void
}

export class UnusedResourceService {
  constructor(private readonly config: JoplinApiGenerator) {}

  /**
   * 获取所有的资源
   */
  getUnusedResource() {
    return PromiseUtil.warpOnEvent(async (events: ProcessEvents) => {
      const resourceList = (await PageUtil.pageToAllList(
        this.config.resourceApi.list.bind(this.config.resourceApi),
        {
          fields: ['id', 'title', 'mime'] as (keyof ResourceProperties)[],
        },
      )) as Pick<ResourceProperties, 'id' | 'title' | 'mime'>[]
      let i = 0
      return await AsyncArray.filter(
        resourceList,
        asyncLimiting(async (resource) => {
          const res = !(await this.checkUsed(resource.id))
          events.process({
            title: resource.title,
            all: resourceList.length,
            rate: i++,
          })
          return res
        }, 10),
      )
    })
  }

  /**
   * 检查资源是否使用过
   * @param id
   */
  async checkUsed(id: string): Promise<boolean> {
    const res = await this.config.searchApi.search({
      query: `"](:/${id})"`,
    })
    return res.items.length > 0
  }
}
