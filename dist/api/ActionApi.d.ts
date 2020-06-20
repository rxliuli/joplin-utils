declare class ActionApi {
    openAndWatch(noteId: string): Promise<any>;
    stopWatching(noteId: string): Promise<any>;
    noteIsWatched(noteId: string): Promise<any>;
    private static baseAction;
}
export declare const actionApi: ActionApi;
export {};
//# sourceMappingURL=ActionApi.d.ts.map