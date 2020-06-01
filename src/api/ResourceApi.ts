import { ResourceProperties } from '../modal/ResourceProperties'
import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'

class ResourceApi {
  async list() {
    return (
      await axios.get<ResourceProperties[]>(ApiUtil.baseUrl('/resources'))
    ).data
  }
  async get(id: string) {
    return (
      await axios.get<ResourceProperties>(ApiUtil.baseUrl(`/resources/${id}`))
    ).data
  }
  async fileByResourceId(id: string) {
    return (await axios.get(ApiUtil.baseUrl(`/resources/${id}/file`))).data
  }
  async create(param: Pick<ResourceProperties, 'title'>) {
    return (await axios.post(ApiUtil.baseUrl('/resources'), param)).data
  }
  async update(param: Pick<ResourceProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (await axios.post(ApiUtil.baseUrl(`/resources/${id}`), others)).data
  }
  async remove(id: string) {
    return (
      await axios.delete<ResourceProperties>(
        ApiUtil.baseUrl(`/resources/${id}`)
      )
    ).data
  }
}

export const resourceApi = new ResourceApi()
