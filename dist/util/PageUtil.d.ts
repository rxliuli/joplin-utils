import { PageParam, PageRes } from '../modal/PageData';
declare type PageResValueType<T extends Promise<PageRes<any>>> = T extends Promise<PageRes<infer U>> ? U : never;
export declare class PageUtil {
    /**
     * 最大分页数量
     * @private
     */
    private static readonly MaxLimit;
    /**
     * 循环获取所有分页的数据
     * 每次都获取最大分页数量，尽可能减少请求次数
     */
    static pageToAllList<F extends (pageParam: PageParam<any> & Record<string, any>) => Promise<PageRes<any>>>(fn: F, pageParam?: Omit<Parameters<F>[0], 'page' | 'limit'>): Promise<PageResValueType<ReturnType<F>>[]>;
}
export {};
//# sourceMappingURL=PageUtil.d.ts.map