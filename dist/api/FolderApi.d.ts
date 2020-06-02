import { FolderProperties } from '../modal/FolderProperties';
import { NoteProperties } from '../modal/NoteProperties';
import { FolderListRes } from '../modal/FolderListRes';
import { FolderGetRes } from '../modal/FolderGetRes';
import { FolderCreateRes } from '../modal/FolderCreateRes';
import { FolderUpdateRes } from '../modal/FolderUpdateRes';
declare class FolderApi {
    list(): Promise<FolderListRes[]>;
    get(id: string): Promise<FolderGetRes>;
    notesByFolderId(id: string): Promise<NoteProperties[]>;
    create(param: Pick<FolderProperties, 'title' | 'parent_id'>): Promise<FolderCreateRes>;
    update(param: Pick<FolderProperties, 'id' | 'title'>): Promise<FolderUpdateRes>;
    remove(id: string): Promise<string>;
}
export declare const folderApi: FolderApi;
export {};
//# sourceMappingURL=FolderApi.d.ts.map