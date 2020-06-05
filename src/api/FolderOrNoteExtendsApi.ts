import { CommonType } from 'joplin-api/dist/modal/CommonType'
import { TypeEnum, noteApi, folderApi } from 'joplin-api'
import { BaseProperties } from 'joplin-api/dist/modal/BaseProperties'
import { FolderProperties } from 'joplin-api/dist/modal/FolderProperties'

class FolderOrNoteExtendsApi {
  async delete(item: Pick<BaseProperties, 'id'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await folderApi.remove(item.id)
        break
      case TypeEnum.Note:
        await noteApi.remove(item.id)
        break
    }
  }
  // 需要专门的 api 支持
  async rename(item: Pick<BaseProperties, 'id' | 'title'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await folderApi.update({
          id: item.id,
          title: item.title,
        })
        break
      case TypeEnum.Note:
        // 这里的 api 有问题
        await noteApi.update({
          id: item.id,
          title: item.title,
        } as any)
        break
    }
  }
  async create(
    item: Pick<FolderProperties, 'title' | 'parent_id'> & CommonType,
  ) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await folderApi.create({
          title: item.title,
          parent_id: item.parent_id,
        })
        break
      case TypeEnum.Note:
        await noteApi.create({
          title: item.title,
          parent_id: item.parent_id,
          body: '',
        })
        break
    }
  }
}
export const folderOrNoteExtendsApi = new FolderOrNoteExtendsApi()
