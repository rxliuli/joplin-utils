import { NoteGetRes } from '../modal/NoteGetRes';
import { TypeEnum } from '../modal/TypeEnum';
declare class SearchApi {
    search(options: {
        query: string;
        type?: TypeEnum;
    }): Promise<NoteGetRes[]>;
}
export declare const searchApi: SearchApi;
export {};
//# sourceMappingURL=SearchApi.d.ts.map