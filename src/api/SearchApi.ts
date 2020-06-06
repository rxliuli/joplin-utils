import axios from 'axios'
import { ApiUtil } from '../util/ApiUtil'
import { NoteGetRes } from '../modal/NoteGetRes'
import { TypeEnum } from '../modal/TypeEnum'

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

  async search(param: { query: string; type?: TypeEnum }) {
    SearchApi.TypeEnumMap['8'] = ''
    const { type, ...others } = param
    const res = await axios.get<NoteGetRes[]>(
      ApiUtil.baseUrl('/search', {
        ...others,
        type: SearchApi.TypeEnumMap[type!],
      }),
    )
    return res.data
  }
}

export const searchApi = new SearchApi()
