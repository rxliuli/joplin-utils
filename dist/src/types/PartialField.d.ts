/**
 * 声明对象中的指定字段是可选的
 */
export declare type PartialField<T, K extends keyof T> = Partial<Pick<T, K>> & Omit<T, K>;
//# sourceMappingURL=PartialField.d.ts.map