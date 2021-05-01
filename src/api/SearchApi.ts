// noinspection ES6PreferShortImport
import { TypeEnum } from '../modal/TypeEnum'
import { Ajax } from '../util/ajax'
import { PageParam, PageRes } from '../modal/PageData'
import { FieldsParam } from '../modal/FieldsParam'
import { NoteProperties } from '../modal/NoteProperties'
import { CommonType } from '../modal/CommonType'

export class SearchApi {
  constructor(private ajax: Ajax) {}

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

  async search<K extends keyof NoteProperties>(
    param: { query: string; type?: TypeEnum } & PageParam<NoteProperties> &
      FieldsParam<K>,
  ): Promise<PageRes<Pick<NoteProperties, K> & CommonType>> {
    SearchApi.TypeEnumMap['8'] = ''
    const { type, ...others } = param
    return this.ajax.get<PageRes<Pick<NoteProperties, K> & CommonType>>(
      '/search',
      {
        ...others,
        type: SearchApi.TypeEnumMap[type!],
      },
    )
  }
}
