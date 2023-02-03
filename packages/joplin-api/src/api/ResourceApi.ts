import { ResourceProperties } from '../model/ResourceProperties'
import { ResourceGetRes } from '../model/ResourceGetRes'
import { PageParam, PageRes } from '../model/PageData'
import { FieldsParam } from '../model/FieldsParam'
import { CommonType } from '../model/CommonType'
import { Ajax } from '../util/ajax'
import { RequiredField } from '../types/RequiredFiled'
import type { Blob as BufferBlob } from 'buffer'

/**
 * 附件资源相关 api
 */
export class ResourceApi {
  constructor(private ajax: Ajax) {}

  async list(): Promise<PageRes<ResourceGetRes>>
  async list<K extends keyof ResourceProperties>(
    pageParam: PageParam<ResourceProperties> & FieldsParam<K>,
  ): Promise<PageRes<Pick<ResourceProperties, K>>>
  async list(
    pageParam?: PageParam<ResourceProperties> & FieldsParam<ResourceGetRes>,
  ): Promise<PageRes<ResourceGetRes>> {
    return await this.ajax.get<PageRes<ResourceGetRes>>('/resources', pageParam)
  }

  async get(id: string): Promise<ResourceGetRes>
  async get<K extends keyof ResourceProperties = keyof Omit<ResourceGetRes, 'type_'>>(
    id: string,
    fields: K[],
  ): Promise<Pick<ResourceProperties, K> & CommonType>
  async get<K extends keyof ResourceProperties = keyof Omit<ResourceGetRes, 'type_'>>(
    id: string,
    fields?: K[],
  ): Promise<ResourceGetRes> {
    return await this.ajax.get<ResourceGetRes>(`/resources/${id}`, { fields })
  }

  /**
   * Creates a new resource
   * TODO 目前大批量上传文件仍有问题
   * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
   * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
   * @param param
   */
  async create(param: { data: Blob | BufferBlob } & Partial<ResourceProperties>): Promise<ResourceProperties> {
    const { data, ...others } = param
    return (await this.ajax.postFormData('/resources', 'post', {
      props: JSON.stringify(others),
      data: data,
      filename: param.filename,
    })) as ResourceProperties
  }

  async update(
    param: RequiredField<Partial<ResourceProperties>, 'id'> & { data?: Blob | BufferBlob },
  ): Promise<ResourceGetRes> {
    const { id, data, ...others } = param
    return await this.ajax.postFormData<ResourceGetRes>(`/resources/${id}`, 'put', {
      props: JSON.stringify(others),
      data: data,
      filename: param.filename,
    })
  }

  /**
   * TODO 这个 api 存在 bug
   * @param id
   */
  async remove(id: string): Promise<void> {
    return await this.ajax.delete(`/resources/${id}`)
  }

  /**
   * Gets the actual file associated with this resource.
   * @param id
   */
  async fileByResourceId(id: string): Promise<Buffer> {
    const resp = await this.ajax.get<any>(
      `/resources/${id}/file`,
      {},
      {
        responseType: 'arraybuffer',
      },
    )
    return Buffer.from(resp, 'binary')
  }

  async fileById(id: string): Promise<Blob> {
    return await this.ajax.get<any>(
      `/resources/${id}/file`,
      {},
      {
        responseType: 'blob',
      },
    )
  }
}
