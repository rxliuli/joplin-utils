import { FolderProperties } from './FolderProperties';
import { CommonType } from './CommonType';
export declare type FolderListAllRes = Pick<FolderProperties, 'id' | 'parent_id' | 'title'> & {
    note_count: number;
    children?: FolderListAllRes[];
} & CommonType;
//# sourceMappingURL=FolderListAllRes.d.ts.map