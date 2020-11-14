export interface PageParam<T> {
    page?: number;
    limit?: number;
    order_by?: keyof T;
    order_dir?: 'ASC' | 'DESC';
}
/**
 * 分页返回数据
 * @link https://joplinapp.org/api/references/rest_api/#pagination
 */
export interface PageRes<T> {
    has_more: boolean;
    items: T[];
}
//# sourceMappingURL=PageData.d.ts.map