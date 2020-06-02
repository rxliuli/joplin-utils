import { TagProperties } from '../modal/TagProperties';
declare class TagApi {
    list(): Promise<TagProperties[]>;
    get(id: string): Promise<TagProperties>;
    create(param: Pick<TagProperties, 'title'>): Promise<any>;
    update(param: Pick<TagProperties, 'id' | 'title'>): Promise<any>;
    remove(id: string): Promise<TagProperties>;
    notesByTagId(id: string): Promise<any>;
    /**
     * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
     * @param id
     */
    updateNotesByTagId(id: string): Promise<any>;
    removeNotesByNoteId(tagId: string, noteId: string): Promise<any>;
}
export declare const tagApi: TagApi;
export {};
//# sourceMappingURL=TagApi.d.ts.map