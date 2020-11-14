declare class ResourceActionApi {
    openAndWatch(resourceId: string): Promise<unknown>;
    watch(resourceId: string): Promise<unknown>;
    stopWatching(resourceId: string): Promise<unknown>;
    noteIsWatched(resourceId: string): Promise<unknown>;
    private static baseAction;
}
export declare const resourceActionApi: ResourceActionApi;
export {};
//# sourceMappingURL=ResourceActionApi.d.ts.map