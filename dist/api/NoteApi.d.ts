import { NoteGetRes } from '../modal/NoteGetRes';
import { NoteProperties } from '../modal/NoteProperties';
import { TagGetRes } from '../modal/TagGetRes';
import { NoteCreateRes } from '../modal/NoteCreateRes';
import { NoteUpdateRes } from '../modal/NoteUpdateRes';
import { ResourceGetRes } from '../modal/ResourceGetRes';
import { RequiredField } from 'liuli-types';
declare class NoteApi {
    list(): Promise<NoteGetRes[]>;
    list<K extends keyof NoteProperties>(fields?: K[]): Promise<Pick<NoteProperties, K>[]>;
    get(id: string): Promise<NoteGetRes>;
    get<K extends keyof NoteProperties>(id: string, fields?: K[]): Promise<Pick<NoteProperties, K>>;
    create(param: RequiredField<Partial<NoteProperties>, 'title'>): Promise<NoteCreateRes>;
    update(param: RequiredField<Partial<NoteProperties>, 'id'>): Promise<NoteUpdateRes>;
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