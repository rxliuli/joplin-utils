/**
 * 双向 map
 * 主要功能应该有
 * 一次 set 可以自动设置 值 <=> 键 的映射关系
 * 可以通过 key 获取所有与之关联的 value
 * 可以通过 value 获取与之相关联的 key
 * 可以通过 delete key 删除所有仅在这个 key 里面用到的 value
 */
export class BiMultiMap<K, V> {
  private readonly map = new Map<K | V, V | K>()

  set(k: K, v: V): void
  set(k: V, v: K): void
  set(k: K | V, v: K | V) {
    if (this.has(k) || this.has(v)) {
      this.delete(k)
    }
    this.map.set(k, v)
    this.map.set(v, k)
  }

  get(k: K): V | undefined
  get(k: V): K | undefined
  get(k: K | V): V | K | undefined {
    return this.map.get(k) as any
  }

  has(k: K | V): boolean {
    return this.map.has(k)
  }

  delete(k: K | V) {
    if (!this.map.has(k)) {
      return
    }
    this.map.delete(this.map.get(k)!)
    this.map.delete(k)
  }

  keys(): (K | V)[] {
    return Array.from(this.map.keys())
  }
}
