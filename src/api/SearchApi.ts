import { NoteGetRes } from '../modal/NoteGetRes'
// noinspection ES6PreferShortImport
import { TypeEnum } from '../modal/TypeEnum'
import { ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'

class SearchApi {
  private static readonly TypeEnumMap: Record<TypeEnum, string> = {
    [TypeEnum.Note]: 'note',
    [TypeEnum.Folder]: 'folder',
    [TypeEnum.Setting]: 'setting',
    [TypeEnum.Resource]: 'resource',
    [TypeEnum.Tag]: 'tag',
    [TypeEnum.NoteTag]: 'note_tag',
    [TypeEnum.Search]: 'search',
    [TypeEnum.Alarm]: 'alarm',
    [TypeEnum.MasterKey]: 'master_key',
    [TypeEnum.ItemChange]: 'item_change',
    [TypeEnum.NoteResource]: 'note_resource',
    [TypeEnum.ResourceLocalState]: 'resource_local_state',
    [TypeEnum.Revision]: 'revision',
    [TypeEnum.Migration]: 'migration',
    [TypeEnum.SmartFilter]: 'smart_filter',
  }

  async search<K extends keyof NoteGetRes>(
    param: { query: string; type?: TypeEnum } & PageParam<Pick<NoteGetRes, K>> &
      FieldsParam<K>,
  ) {
    SearchApi.TypeEnumMap['8'] = ''
    const { type, ...others } = param
    return ajax.get<PageRes<Pick<NoteGetRes, K>>>('/search', {
      ...others,
      type: SearchApi.TypeEnumMap[type!],
    })
  }
}

export const searchApi = new SearchApi()
