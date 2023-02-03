import { diffBy } from '@liuli-util/array'

interface CacheOptions<T, R> {
  old: T[]
  new: R[]

  id(item: T | R): string
}

export class CacheUtil {
  static diff<T, R>(options: CacheOptions<T, R>) {
    const { left: remove, right: update } = diffBy(options.old, options.new, options.id)
    return {
      remove,
      update,
    }
  }
}
