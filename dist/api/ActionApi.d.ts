declare class ActionApi {
    openAndWatch(noteId: string): Promise<unknown>;
    stopWatching(noteId: string): Promise<unknown>;
    noteIsWatched(noteId: string): Promise<unknown>;
    private static baseAction;
}
export declare const actionApi: ActionApi;
export {};
//# sourceMappingURL=ActionApi.d.ts.map