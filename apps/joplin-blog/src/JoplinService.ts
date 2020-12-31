import { config, PageUtil, searchApi, TypeEnum } from 'joplin-api'
import { CommonNote } from './model/CommonNote'

export class JoplinService {
  constructor(private readonly token: string, private readonly port = 41184) {
    config.token = token
    config.port = port
  }

  /**
   * 根据 tag 查找笔记列表
   * @param tag
   */
  async findByTag(tag: string) {
    const list = await PageUtil.pageToAllList((pageParam) =>
      searchApi.search({
        ...(pageParam as any),
        fields: [
          'id',
          'title',
          'body',
          'user_created_time',
          'user_updated_time',
        ],
        type: TypeEnum.Note,
        query: `tag:${'blog'}`,
      }),
    )
    return list.map(
      ({ id, title, body, user_created_time, user_updated_time }) =>
        ({
          id,
          title,
          body,
          createdTime: user_created_time,
          updatedTime: user_updated_time,
        } as CommonNote),
    )
  }
}
