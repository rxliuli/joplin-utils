declare class NoteActionApi {
    openAndWatch(noteId: string): Promise<unknown>;
    stopWatching(noteId: string): Promise<unknown>;
    /**
     * @deprecated 已废弃，请使用 {@link isWatch}
     * @param noteId
     */
    noteIsWatched(noteId: string): Promise<unknown>;
    isWatch(noteId: string): Promise<unknown>;
    private static baseAction;
}
/**
 * @deprecated 已废弃，请使用 {@link noteActionApi}
 */
export declare const actionApi: NoteActionApi;
export declare const noteActionApi: NoteActionApi;
export {};
//# sourceMappingURL=NoteActionApi.d.ts.map