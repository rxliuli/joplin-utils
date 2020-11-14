import { TypeEnum } from '../modal/TypeEnum';
import { PageParam, PageRes } from '../modal/PageData';
import { FieldsParam } from '../modal/FieldsParam';
import { NoteProperties } from '../modal/NoteProperties';
declare class SearchApi {
    private static readonly TypeEnumMap;
    search<K extends keyof NoteProperties>(param: {
        query: string;
        type?: TypeEnum;
    } & PageParam<Pick<NoteProperties, K>> & FieldsParam<K>): Promise<PageRes<Pick<NoteProperties, K>>>;
}
export declare const searchApi: SearchApi;
export {};
//# sourceMappingURL=SearchApi.d.ts.map