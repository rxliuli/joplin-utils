import { CommonType } from '../model/CommonType'
import { PageRes } from '../model/PageData'
import { Ajax } from '../util/ajax'

export interface EventProperties {
  id: number //
  item_type: number // The item type (see table above for the list of item types)
  item_id: string // The item ID
  type: number // The type of change - either 1 (created), 2 (updated) or 3 (deleted)
  created_time: number // When the event was generated
  source: number // Unused
  before_change_item: string // Unused
}

export type EventGetRes = Pick<EventProperties, 'id' | 'item_type' | 'item_id' | 'type' | 'created_time'> & CommonType

export type EventListRes = Pick<EventProperties, 'id' | 'item_type' | 'item_id' | 'type' | 'created_time'>

/**
 * @link https://joplinapp.org/api/references/rest_api/#events
 */
export class EventApi {
  constructor(private readonly ajax: Ajax) {}

  async list(param?: { cursor?: string }): Promise<PageRes<EventListRes> & { cursor: string }>
  async list<K extends keyof EventProperties>(param: {
    cursor?: string
    fields: K[]
  }): Promise<PageRes<Pick<EventProperties, K>> & { cursor: string }>
  /**
   * @link https://joplinapp.org/api/references/rest_api/#get-events
   * @param param
   * @returns
   */
  async list<K extends keyof EventProperties>(param?: {
    cursor?: string
    fields?: K[]
  }): Promise<PageRes<EventProperties> & { cursor: string }> {
    return await this.ajax.get('/events', param)
  }

  get(id: number): Promise<EventGetRes>
  get<K extends keyof EventProperties>(id: number, fields: K[]): Promise<Pick<EventProperties, K> & CommonType>
  /**
   * @link https://joplinapp.org/api/references/rest_api/#get-events-id
   * @param id
   * @returns
   */
  async get<K extends keyof EventProperties = keyof EventProperties>(
    id: number,
    fields?: K[],
  ): Promise<EventProperties & CommonType & { cursor: string }> {
    return await this.ajax.get(`/events/${id}`, { fields })
  }
}
