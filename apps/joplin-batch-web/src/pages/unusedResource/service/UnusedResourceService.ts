import { JoplinApiGenerator } from 'joplin-api'
import { ResourceGetRes } from 'joplin-api/src/modal/ResourceGetRes'
import { AsyncArray } from '@liuli-util/async'
import { PageUtil } from 'joplin-api'

export class UnusedResourceService {
  constructor(private readonly config: JoplinApiGenerator) {}

  /**
   * 获取所有的资源
   */
  async getUnusedResource(): Promise<ResourceGetRes[]> {
    return await AsyncArray.filter(
      await PageUtil.pageToAllList(() => this.config.resourceApi.list()),
      async (resource) => !(await this.checkUsed(resource.id)),
    )
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
