import { FolderProperties } from 'joplin-api/dist/modal/FolderProperties'

export class FolderExtendsApi {
  /**
   * 重命名目录
   * @param param
   */
  rename(param: Pick<FolderProperties, 'id' | 'title'>) {
    throw new Error('no impl')
  }

  /**
   * 将目录移动到指定目录
   * @param folderId
   * @param movedParentId
   */
  move(folderId: string, movedParentId: string) {
    throw new Error('no impl')
  }
}
