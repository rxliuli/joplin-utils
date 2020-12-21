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
    /**
     * TODO 目前这里不指定 fields 时会发生错误，这应该是个 bug
     * @link https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/14?u=rxliuli
     * @param id
     */
    resourcesById(id: string): Promise<ResourceGetRes[]>;
}
export declare const noteApi: NoteApi;
export {};
//# sourceMappingURL=NoteApi.d.ts.map