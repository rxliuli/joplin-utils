/// <reference types="node" />
import { ResourceProperties } from '../modal/ResourceProperties';
import { ResourceGetRes } from '../modal/ResourceGetRes';
import { ReadStream } from 'fs';
import { PageParam, PageRes } from '../modal/PageData';
import { FieldsParam } from '../modal/FieldsParam';
/**
 * 附件资源相关 api
 */
declare class ResourceApi {
    list(): Promise<PageRes<ResourceGetRes>>;
    list<K extends keyof ResourceProperties>(pageParam: PageParam<ResourceProperties> & FieldsParam<K>): Promise<PageRes<Pick<ResourceProperties, K>>>;
    get(id: string): Promise<ResourceGetRes>;
    /**
     * Creates a new resource
     * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
     * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
     * @param param
     */
    create(param: {
        data: ReadStream;
        title: string;
    }): Promise<ResourceGetRes>;
    update(param: Pick<ResourceProperties, 'id' | 'title'>): Promise<ResourceGetRes>;
    /**
     * TODO 这个 api 存在 bug
     * @link https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/15?u=rxliuli
     * @param id
     */
    remove(id: string): Promise<unknown>;
    /**
     * Gets the actual file associated with this resource.
     * @param id
     */
    fileByResourceId(id: string): Promise<Buffer>;
}
export declare const resourceApi: ResourceApi;
export {};
//# sourceMappingURL=ResourceApi.d.ts.map