export interface PageParam<T> {
  page?: number
  limit?: number
  order_by?: keyof T
  order_dir?: 'ASC' | 'DESC'
}

export interface PageRes<T> {
  has_more: boolean
  items: T[]
}
