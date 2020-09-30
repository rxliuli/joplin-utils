/// <reference types="node" />
import { ResourceProperties } from '../modal/ResourceProperties';
import { ResourceGetRes } from '../modal/ResourceGetRes';
import * as FormData from 'form-data';
declare class ResourceApi {
    list(): Promise<ResourceGetRes[]>;
    get(id: string): Promise<ResourceGetRes>;
    /**
     * Creates a new resource
     * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
     * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
     * @param fd
     * TODO
     */
    create(fd: FormData): Promise<ResourceGetRes>;
    update(param: Pick<ResourceProperties, 'id' | 'title'>): Promise<ResourceGetRes>;
    remove(id: string): Promise<any>;
    /**
     * Gets the actual file associated with this resource.
     * @param id
     */
    fileByResourceId(id: string): Promise<Buffer>;
}
export declare const resourceApi: ResourceApi;
export {};
//# sourceMappingURL=ResourceApi.d.ts.map