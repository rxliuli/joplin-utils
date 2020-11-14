/**
 * 等待指定的时间/等待指定表达式成立
 * 如果未指定等待条件则立刻执行
 * 注: 此实现在 nodejs 10- 会存在宏任务与微任务的问题，切记 async-await 本质上还是 Promise 的语法糖，实际上并非真正的同步函数！！！即便在浏览器，也不要依赖于这种特性。
 * @param param 等待时间/等待条件
 * @returns Promise 对象
 */
export declare function wait(param?: number | ((...args: any[]) => boolean)): Promise<void>;
//# sourceMappingURL=wait.d.ts.map