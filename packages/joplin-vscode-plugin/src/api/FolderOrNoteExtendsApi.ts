import { CommonType } from 'joplin-api'
import { TypeEnum, noteApi, folderApi, noteExtApi, folderExtApi } from 'joplin-api'
import { BaseProperties } from 'joplin-api'
import { FolderProperties } from 'joplin-api'

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
        await folderExtApi.rename(item.id, item.title)
        break
      case TypeEnum.Note:
        await noteExtApi.rename(item.id, item.title)
        break
    }
  }

  async create(item: Pick<FolderProperties, 'title' | 'parent_id'> & CommonType) {
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
