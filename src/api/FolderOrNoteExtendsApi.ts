import { CommonType } from 'joplin-api/dist/modal/CommonType'
import { TypeEnum, noteApi, folderApi } from 'joplin-api'
import { BaseProperties } from 'joplin-api/dist/modal/BaseProperties'
import { FolderProperties } from 'joplin-api/dist/modal/FolderProperties'
import { folderExtendsApi } from './FolderExtendsApi'
import { noteExtendsApi } from './NoteExtendsApi'

export class FolderOrNoteExtendsApi {
  async remove(item: Pick<BaseProperties, 'id'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await folderApi.remove(item.id)
        break
      case TypeEnum.Note:
        await noteApi.remove(item.id)
        break
    }
  }
  async rename(item: Pick<BaseProperties, 'id' | 'title'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await folderExtendsApi.rename({
          id: item.id,
          title: item.title,
        })
        break
      case TypeEnum.Note:
        await noteExtendsApi.rename({
          id: item.id,
          title: item.title,
        })
        break
    }
  }
  async create(
    item: Pick<FolderProperties, 'title' | 'parent_id'> & CommonType,
  ) {
    switch (item.type_) {
      case TypeEnum.Folder:
        return await folderApi.create({
          title: item.title,
          parent_id: item.parent_id,
        })
      case TypeEnum.Note:
        return await noteApi.create({
          title: item.title,
          parent_id: item.parent_id,
          body: '',
        })
      default:
        throw new Error('no impl')
    }
  }
}
