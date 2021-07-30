import { diffBy } from '@liuli-util/array'

interface CacheOptions<T, R> {
  old: T[]
  new: R[]
  id(item: T | R): string
  updateTime(item: T | R): number
}

export class CacheUtil {
  static diff<T, R>(options: CacheOptions<T, R>) {
    const { left: remove, common: exist } = diffBy(
      options.old,
      options.new,
      options.id,
    )
    const existNoteIdSet = new Set(exist.map(options.id))
    const { common: noChangeNoteList } = diffBy(
      options.old.filter((item) => existNoteIdSet.has(options.id(item))),
      options.new.filter((item) => existNoteIdSet.has(options.id(item))),
      options.updateTime,
    )
    const noChangeNoteIdSet = new Set(noChangeNoteList.map(options.id))
    const update = options.new.filter(
      (item) => !noChangeNoteIdSet.has(options.id(item)),
    )
    return {
      remove,
      update,
    }
  }
}
