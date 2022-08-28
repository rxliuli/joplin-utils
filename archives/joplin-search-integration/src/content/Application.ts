import { BaseSearchEngineAdapter } from './engine/BaseSearchEngineAdapter'
import { match } from './util/match'
import { SearchNote } from './model/SearchNote'
import { config, searchApi, TypeEnum } from 'joplin-api'
import { JoplinNoteUtil } from './util/JoplinNoteUtil'
import { getSettings } from './util/getSettings'
import { ActionTypeEnum } from '../background/model/ActionTypeEnum'

export class Application {
  constructor(private engines: BaseSearchEngineAdapter[]) {
  }

  match(): BaseSearchEngineAdapter | undefined {
    const href = location.href
    return this.engines.find((item) =>
      item.matches.some((matchPattern) => match(matchPattern, href)),
    )
  }

  async checkRequireSettings(): Promise<boolean> {
    const settings = await getSettings()
    if (!settings) {
      await browser.runtime.sendMessage({
        action: ActionTypeEnum.OpenOptionsPage,
      })
      return false
    }
    // console.log('settings: ', settings)
    config.token = settings.token
    config.port = settings.port
    return true
  }

  /**
   * 搜索 Joplin 的笔记
   */
  async searchJoplin(keyword: string): Promise<SearchNote[]> {
    const res = await searchApi.search({
      query: keyword,
      type: TypeEnum.Note,
      limit: 10,
      fields: ['id', 'title'],
      order_by: 'user_updated_time',
    })
    return res.items.map((item) => ({
      ...item,
      title: JoplinNoteUtil.trimTitleStart(item.title),
    }))
  }

  async start(): Promise<void> {
    if (!(await this.checkRequireSettings())) {
      console.log('必填设置检查未通过')
      return
    }
    const engine = this.match()
    if (!engine) {
      console.log('没有匹配到任何搜索引擎')
      return
    }
    const keyword = engine.parseKeyword()
    if (keyword === null) {
      console.log('搜索参数不能为空')
      return
    }
    const noteList = await this.searchJoplin(keyword)
    console.log('匹配到搜索引擎: ', engine.name, '，搜索笔记结果是: ', noteList)
    engine.render(noteList)
  }
}
