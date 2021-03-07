import { NoteGetRes } from '../modal/NoteGetRes';
import { NoteProperties } from '../modal/NoteProperties';
import { TagGetRes } from '../modal/TagGetRes';
import { NoteCreateRes } from '../modal/NoteCreateRes';
import { NoteUpdateRes } from '../modal/NoteUpdateRes';
import { ResourceGetRes } from '../modal/ResourceGetRes';
import { PageParam, PageRes } from '../modal/PageData';
import { FieldsParam } from '../modal/FieldsParam';
import { RequiredField } from '../types/RequiredFiled';
import { CommonType } from '../modal/CommonType';
import { ResourceProperties } from '../modal/ResourceProperties';
/**
 * TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例
 */
declare class NoteApi {
    list(): Promise<PageRes<NoteGetRes>>;
    list<K extends keyof NoteProperties = keyof NoteGetRes>(pageParam: PageParam<NoteProperties> & FieldsParam<K>): Promise<PageRes<Pick<NoteProperties, K>>>;
    get(id: string): Promise<NoteGetRes & CommonType>;
    get<K extends keyof NoteProperties = keyof NoteGetRes>(id: string, fields?: K[]): Promise<Pick<NoteProperties, K> & CommonType>;
    create(param: RequiredField<Partial<NoteProperties>, 'title'>): Promise<NoteCreateRes>;
    update(param: RequiredField<Partial<NoteProperties>, 'id'>): Promise<NoteUpdateRes>;
    remove(id: string): Promise<unknown>;
    tagsById(id: string): Promise<TagGetRes[]>;
    resourcesById(id: string): Promise<ResourceGetRes[]>;
    resourcesById<K extends keyof ResourceProperties = keyof Omit<ResourceGetRes, 'type_'>>(id: string, fields: K[]): Promise<(Pick<ResourceProperties, K> & CommonType)[]>;
}
export declare const noteApi: NoteApi;
export {};
//# sourceMappingURL=NoteApi.d.ts.map