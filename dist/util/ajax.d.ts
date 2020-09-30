export declare type Method = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
export declare type ResponseType = 'arraybuffer' | 'blob' | 'document' | 'json' | 'text' | 'stream';
interface Config {
    url: string;
    method?: Method;
    data?: any;
    headers?: object;
    responseType?: ResponseType;
}
/**
 * 封装 ajax 请求
 * @param config
 */
export declare function request<R>(config: Config): Promise<R>;
declare class Ajax {
    get<R>(url: string, data?: any, config?: Omit<Config, 'url' | 'data' | 'method'>): Promise<R>;
    post<R>(url: string, data?: any, config?: Omit<Config, 'url' | 'data' | 'method'>): Promise<R>;
    put<R>(url: string, data?: any, config?: Omit<Config, 'url' | 'data' | 'method'>): Promise<R>;
    delete<R>(url: string, data?: any, config?: Omit<Config, 'url' | 'data' | 'method'>): Promise<R>;
}
export declare const ajax: Ajax;
export {};
//# sourceMappingURL=ajax.d.ts.map