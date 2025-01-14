import { CommonType } from 'joplin-api'
import { TypeEnum } from 'joplin-api'
import { BaseProperties } from 'joplin-api'
import { FolderProperties } from 'joplin-api'
import { GlobalContext } from '../constants/context'

export class FolderOrNoteExtendsApi {
  async remove(item: Pick<BaseProperties, 'id'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await GlobalContext.api.folder.remove(item.id)
        break
      case TypeEnum.Note:
        await GlobalContext.api.note.remove(item.id)
        break
    }
  }

  async rename(item: Pick<BaseProperties, 'id' | 'title'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        await GlobalContext.api.folderExt.rename(item.id, item.title)
        break
      case TypeEnum.Note:
        await GlobalContext.api.noteExt.rename(item.id, item.title)
        break
    }
  }

  async create(item: Pick<FolderProperties, 'title' | 'parent_id'> & CommonType) {
    switch (item.type_) {
      case TypeEnum.Folder:
        return await GlobalContext.api.folder.create({
          title: item.title,
          parent_id: item.parent_id,
        })
      case TypeEnum.Note:
        return await GlobalContext.api.note.create({
          title: item.title,
          parent_id: item.parent_id,
          body: '',
        })
      default:
        throw new Error('no impl')
    }
  }
}
