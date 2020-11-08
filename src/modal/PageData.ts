export interface PageParam<T> {
  cursor?: string
  order_by?: keyof T
  order_dir?: 'ASC' | 'DESC'
  limit?: number
}

/**
 * 分页返回数据
 * @link https://joplinapp.org/api/references/rest_api/#pagination
 */
export interface PageRes<T> {
  cursor?: string
  items: T[]
}
