import { FolderProperties } from '../modal/FolderProperties';
import { FolderListRes } from '../modal/FolderListRes';
import { FolderGetRes } from '../modal/FolderGetRes';
import { FolderCreateRes } from '../modal/FolderCreateRes';
import { FolderUpdateRes } from '../modal/FolderUpdateRes';
import { NoteGetRes } from '../modal/NoteGetRes';
import { PageParam, PageRes } from '../modal/PageData';
import { FieldsParam } from '../modal/FieldsParam';
import { RequiredField } from '../types/RequiredFiled';
import { FolderListAllRes } from '../modal/FolderListAllRes';
import { NoteProperties } from '../modal/NoteProperties';
/**
 * 目录相关 api
 */
declare class FolderApi {
    list(): Promise<PageRes<FolderListRes>>;
    list<K extends keyof FolderProperties = keyof FolderListRes>(pageParam: PageParam<FolderProperties> & FieldsParam<K>): Promise<PageRes<Pick<FolderProperties, K>>>;
    /**
     * 使用特殊的 as_tree 参数来恢复旧的行为
     */
    listAll(): Promise<FolderListAllRes[]>;
    get(id: string): Promise<FolderGetRes>;
    create(param: RequiredField<Partial<FolderProperties>, 'title'>): Promise<FolderCreateRes>;
    update(param: RequiredField<Partial<FolderProperties>, 'id'>): Promise<FolderUpdateRes>;
    remove(id: string): Promise<string>;
    notesByFolderId(id: string): Promise<NoteGetRes[]>;
    notesByFolderId<K extends keyof NoteProperties = keyof NoteGetRes>(id: string, fields: K[]): Promise<Pick<NoteProperties, K>[]>;
}
export declare const folderApi: FolderApi;
export {};
//# sourceMappingURL=FolderApi.d.ts.map