import { PageRes } from '../modal/PageData'
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

/**
 * @link https://joplinapp.org/api/references/rest_api/#events
 */
export class EventApi {
  constructor(private readonly ajax: Ajax) {}

  /**
   * @link https://joplinapp.org/api/references/rest_api/#get-events
   * @param cursor
   * @returns
   */
  async list(cursor?: string): Promise<PageRes<EventProperties> & { cursor: string }> {
    return await this.ajax.get('/events', {
      cursor,
    })
  }
  /**
   * @link https://joplinapp.org/api/references/rest_api/#get-events-id
   * @param id
   * @returns
   */
  async get<K extends keyof EventProperties = keyof EventProperties>(
    id: number,
    fields?: K[],
  ): Promise<PageRes<EventProperties> & { cursor: string }> {
    return await this.ajax.get(`/events/${id}`, { fields })
  }
}
