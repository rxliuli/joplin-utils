import { ResourceProperties } from '../modal/ResourceProperties';
import { ResourceGetRes } from '../modal/ResourceGetRes';
declare class ResourceApi {
    list(): Promise<ResourceGetRes[]>;
    get(id: string): Promise<ResourceGetRes>;
    /**
     * Creates a new resource
     * Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
     * The "data" field is required, while the "props" one is not. If not specified, default values will be used.
     * @param param
     * TODO
     */
    create(param: Pick<ResourceProperties, 'title'>): Promise<ResourceGetRes>;
    update(param: Pick<ResourceProperties, 'id' | 'title'>): Promise<ResourceGetRes>;
    remove(id: string): Promise<string>;
    /**
     * Gets the actual file associated with this resource.
     * @param id
     */
    fileByResourceId(id: string): Promise<any>;
}
export declare const resourceApi: ResourceApi;
export {};
//# sourceMappingURL=ResourceApi.d.ts.map