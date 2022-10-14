import path from 'path'

/**
 * 向上查找目录
 * @param cwd
 * @param predicate
 */
export function findParent(cwd: string, predicate: (dir: string) => boolean): string | null
export function findParent(cwd: string, predicate: (dir: string) => Promise<boolean>): Promise<string | null>
export function findParent<T extends (dir: string) => boolean | Promise<boolean>, R extends string | null>(
  cwd: string,
  predicate: T,
): ReturnType<T> extends Promise<any> ? Promise<R> : R {
  const res = predicate(cwd)
  function f(res: boolean): string | null {
    if (res) {
      return cwd
    }
    const parent = path.dirname(cwd)
    if (parent === cwd) {
      return null
    }
    return findParent(parent, predicate as any)
  }

  return res instanceof Promise ? res.then(f) : (f(res) as any)
}
