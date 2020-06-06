import { FolderProperties } from 'joplin-api/dist/modal/FolderProperties'
import { folderApi } from 'joplin-api'

class FolderExtendsApi {
  /**
   * 重命名目录
   * @param param
   */
  rename(param: Pick<FolderProperties, 'id' | 'title'>) {
    return folderApi.update({
      id: param.id,
      title: param.title,
    })
  }

  /**
   * 将目录移动到指定目录
   * @param folderId
   * @param movedParentId
   */
  move(folderId: string, movedParentId: string) {
    //这里的类型定义有问题
    // return folderApi.update({
    //   id: folderId,
    //   parent_id: movedParentId,
    // })
  }
}

export const folderExtendsApi = new FolderExtendsApi()
