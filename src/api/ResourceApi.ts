import { ResourceProperties } from '../modal/ResourceProperties'
import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'
import { ResourceGetRes } from '../modal/ResourceGetRes'

class ResourceApi {
  async list() {
    return (await axios.get<ResourceGetRes[]>(ApiUtil.baseUrl('/resources')))
      .data
  }
  async get(id: string) {
    return (
      await axios.get<ResourceGetRes>(ApiUtil.baseUrl(`/resources/${id}`))
    ).data
  }
  /**
   * Creates a new resource
   * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
   * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
   * @param param
   * TODO
   */
  async create(param: Pick<ResourceProperties, 'title'>) {
    return (
      await axios.post<ResourceGetRes>(ApiUtil.baseUrl('/resources'), param)
    ).data
  }

  async update(param: Pick<ResourceProperties, 'id' | 'title'>) {
    const { id, ...others } = param
    return (
      await axios.post<ResourceGetRes>(
        ApiUtil.baseUrl(`/resources/${id}`),
        others,
      )
    ).data
  }
  async remove(id: string) {
    return (await axios.delete<string>(ApiUtil.baseUrl(`/resources/${id}`)))
      .data
  }

  /**
   * Gets the actual file associated with this resource.
   * @param id
   */
  async fileByResourceId(id: string) {
    const resp = await axios.get(ApiUtil.baseUrl(`/resources/${id}/file`), {
      responseType: 'arraybuffer',
    })
    return Buffer.from(resp.data, 'binary')
  }
}

export const resourceApi = new ResourceApi()
