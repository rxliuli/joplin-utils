import { folderApi } from './FolderApi'
import { FolderGetRes } from '../modal/FolderGetRes'

class FolderExtApi {
  /**
   * 重命名目录
   * @param id
   * @param title
   */
  rename(id: string, title: string) {
    return folderApi.update({ id, title })
  }

  /**
   * 获取一个目录的路径目录列表
   * @param id
   */
  async path(id: string): Promise<FolderGetRes[]> {
    if (id) {
      return []
    }
    const res = await folderApi.get(id)
    if (!res.parent_id) {
      return [res]
    }
    return (await this.path(res.parent_id)).concat([res])
  }

  /**
   * 将目录移动到另一个目录中
   * @param id
   * @param parentId
   */
  async move(id: string, parentId: string) {
    if (id === parentId) {
      return
    }
    const parentPathFolderList = await this.path(parentId)
    if (parentPathFolderList.some((folder) => id === folder.id)) {
      throw new Error('Cannot move directory to subdirectory')
    }
    await folderApi.update({ id, parent_id: parentId })
  }
}

export const folderExtApi = new FolderExtApi()
