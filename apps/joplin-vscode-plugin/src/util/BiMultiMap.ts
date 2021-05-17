/**
 * 双向 map
 * 主要功能应该有
 * 一次 set 可以自动设置 值 <=> 键 的映射关系
 * 可以通过 key 获取所有与之关联的 value
 * 可以通过 value 获取与之相关联的 key
 * 可以通过 delete key 删除所有仅在这个 key 里面用到的 value
 */
export class BiMultiMap<K, V> {
  private readonly map = new Map<K, Set<V>>()

  set(k: K, v: V) {
    if (!this.map.has(k)) {
      this.map.set(k, new Set())
    }
    const vSet = this.map.get(k)!
    vSet.add(v)
    this.map.set(k, vSet)
  }

  getByKey(k: K): V[] {
    if (!this.map.has(k)) {
      return []
    }
    return Array.from(this.map.get(k)!)
  }

  getByValue(v: V): K[] {
    return Array.from(this.map.entries()).filter(([_k, vs]) => vs.has(v)).map(([k]) => k)
  }

  deleteByKey(k: K) {
    return this.map.delete(k)
  }

  get size() {
    return this.map.size
  }
}
