import { IntBool } from '../types/IntBool';
declare class NoteExtApi {
    /**
     * 重命名笔记
     * @param id
     * @param title
     */
    rename(id: string, title: string): Promise<import("../modal/NoteUpdateRes").NoteUpdateRes>;
    /**
     * 将笔记移动到指定目录
     * @param id
     * @param parentId
     */
    move(id: string, parentId: string): Promise<import("../modal/NoteUpdateRes").NoteUpdateRes>;
    /**
     * 切换 to-do 的状态
     * @param id
     * @param completed
     */
    toggleTodo(id: string, completed?: IntBool): Promise<void>;
}
export declare const noteExtApi: NoteExtApi;
export {};
//# sourceMappingURL=NoteExtApi.d.ts.map