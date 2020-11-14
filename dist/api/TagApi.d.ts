import { TagProperties } from '../modal/TagProperties';
import { TagGetRes } from '../modal/TagGetRes';
import { NoteGetRes } from '../modal/NoteGetRes';
import { NoteTagRelated } from '../modal/NoteTagRelated';
import { PageParam, PageRes } from '../modal/PageData';
import { FieldsParam } from '../modal/FieldsParam';
declare class TagApi {
    list(): Promise<PageRes<TagGetRes>>;
    list<K extends keyof TagProperties>(pageParam: PageParam<TagProperties> & FieldsParam<K>): Promise<PageRes<Pick<TagProperties, K>>>;
    get(id: string): Promise<TagGetRes>;
    create(param: Pick<TagProperties, 'title'>): Promise<TagGetRes>;
    update(param: Pick<TagProperties, 'id' | 'title'>): Promise<TagGetRes>;
    remove(id: string): Promise<TagProperties>;
    notesByTagId({ id, ...others }: {
        id: string;
    } & PageParam<TagProperties>): Promise<PageRes<NoteGetRes[]>>;
    /**
     * Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).
     * @param tagId
     * @param noteId
     */
    addTagByNoteId(tagId: string, noteId: string): Promise<NoteTagRelated | null>;
    removeTagByNoteId(tagId: string, noteId: string): Promise<void>;
}
export declare const tagApi: TagApi;
export {};
//# sourceMappingURL=TagApi.d.ts.map