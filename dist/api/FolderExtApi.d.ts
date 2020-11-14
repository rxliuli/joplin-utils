import { FolderGetRes } from '../modal/FolderGetRes';
declare class FolderExtApi {
    /**
     * 重命名目录
     * @param id
     * @param title
     */
    rename(id: string, title: string): Promise<import("../modal/FolderUpdateRes").FolderUpdateRes>;
    /**
     * 获取一个目录的路径目录列表
     * @param id
     */
    path(id: string): Promise<FolderGetRes[]>;
    /**
     * 将目录移动到另一个目录中
     * @param id
     * @param parentId
     */
    move(id: string, parentId: string): Promise<void>;
}
export declare const folderExtApi: FolderExtApi;
export {};
//# sourceMappingURL=FolderExtApi.d.ts.map