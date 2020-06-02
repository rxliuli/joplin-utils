import { NoteGetRes } from '../modal/NoteGetRes';
import { NoteProperties } from '../modal/NoteProperties';
import { TagGetRes } from '../modal/TagGetRes';
import { NoteCreateRes } from '../modal/NoteCreateRes';
import { NoteUpdateRes } from '../modal/NoteUpdateRes';
import { ResourceGetRes } from '../modal/ResourceGetRes';
declare type NoteCreateParam = Pick<NoteProperties, 'title' | 'parent_id'> & (Pick<NoteProperties, 'body'> | Pick<NoteProperties, 'body_html'>);
declare class NoteApi {
    list(): Promise<NoteGetRes[]>;
    get(id: string): Promise<NoteGetRes>;
    create(param: NoteCreateParam & Partial<Pick<NoteProperties, 'id'>>): Promise<NoteCreateRes>;
    update(param: Omit<NoteCreateParam, 'parent_id'> & Pick<NoteProperties, 'id'> & (Pick<NoteProperties, 'body'> | Pick<NoteProperties, 'body_html'>)): Promise<NoteUpdateRes>;
    /**
     * @param id
     * @throws Error: Request failed with status code 404
     */
    remove(id: string): Promise<any>;
    tagsById(id: string): Promise<TagGetRes[]>;
    resourcesById(id: string): Promise<ResourceGetRes[]>;
}
export declare const noteApi: NoteApi;
export {};
//# sourceMappingURL=NoteApi.d.ts.map