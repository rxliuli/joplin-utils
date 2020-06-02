import { ResourceProperties } from '../modal/ResourceProperties';
declare class ResourceApi {
    list(): Promise<ResourceProperties[]>;
    get(id: string): Promise<ResourceProperties>;
    fileByResourceId(id: string): Promise<any>;
    create(param: Pick<ResourceProperties, 'title'>): Promise<any>;
    update(param: Pick<ResourceProperties, 'id' | 'title'>): Promise<any>;
    remove(id: string): Promise<ResourceProperties>;
}
export declare const resourceApi: ResourceApi;
export {};
//# sourceMappingURL=ResourceApi.d.ts.map