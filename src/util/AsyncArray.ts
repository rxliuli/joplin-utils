function isNullOrUndefined(object: any): object is null | undefined {
  return object === undefined || object === null
}

/**
 * 操作类型
 */
enum ActionType {
  forEach = 'forEach',
  filter = 'filter',
  map = 'map',
  flatMap = 'flatMap',
  sort = 'sort',
  reduce = 'reduce',
  reduceRight = 'reduceRight',
  findIndex = 'findIndex',
  find = 'find',
  every = 'every',
  some = 'some',
  parallel = 'parallel',
  serial = 'serial',
}

/**
 * 保存高阶函数传入的异步操作
 * @field 异步操作的类型
 * @field 异步操作
 */
class Action {
  public static Type = ActionType

  constructor(public readonly type: ActionType, public readonly args: any[]) {
    this.type = type
    this.args = args
  }
}

/**
 * 异步的 reduce 回调函数类型
 */
type AsyncArrayReduceCallback<T, R, IArray> = (
  res: R,
  item: T,
  index: number,
  arr: IArray,
) => Promise<R>
/**
 * 异步的数组一般迭代类型
 */
type AsyncArrayCallback<T, R, IArray> = (
  item: T,
  index: number,
  arr: IArray,
) => Promise<R>

/**
 * 抽象异步数组，实现了一些公共的函数
 */
abstract class InnerBaseAsyncArray<T> {
  /**
   * 内部的数组
   */
  protected _arr: T[]

  /**
   * 构造函数
   * @param args 数组初始元素
   */
  constructor(args: T[] = []) {
    this._arr = args
  }

  /**
   * 异步的 forEach
   * @param fn 异步迭代函数
   */
  public abstract async forEach(
    fn: AsyncArrayCallback<T, void, any>,
  ): Promise<void>

  /**
   * 异步的 filter
   * @param fn 异步过滤函数
   * @returns 过滤后的新数组
   */
  public abstract async filter(
    fn: AsyncArrayCallback<T, boolean, any>,
  ): Promise<any>

  /**
   * 异步的 map
   * @param fn 异步映射函数
   * @returns 经过映射产生的新的异步数组
   */
  public abstract async map<R>(fn: AsyncArrayCallback<T, R, any>): Promise<any>

  /**
   * 异步的 flatMap
   * @param fn 异步映射函数，产生一个新的数组
   * @returns 压平一层的数组
   */
  public abstract async flatMap<R>(
    fn: AsyncArrayCallback<T, R[], any>,
  ): Promise<any>

  /**
   * 将整个数组排序
   * @param fn 比较函数
   * @returns 排序后的数组
   */
  public async sort(
    fn?: (t1: T, t2: T) => Promise<number>,
  ): Promise<InnerAsyncArray<T>> {
    if (fn === undefined) {
      return new InnerAsyncArray(this._arr.sort())
    }
    const arr: Array<[T, number]> = this._arr.map(
      (v, i) => [v, i] as [T, number],
    )

    async function _sort<V>(
      arr: V[],
      fn: (v1: V, v2: V) => Promise<number>,
    ): Promise<V[]> {
      // 边界条件，如果传入数组的值
      if (arr.length <= 1) {
        return arr
      }
      // 根据中间值对数组分治为两个数组
      const medianIndex = Math.floor(arr.length / 2)
      const medianValue = arr[medianIndex]
      const left = []
      const right = []
      for (let i = 0, len = arr.length; i < len; i++) {
        if (i === medianIndex) {
          continue
        }
        const v = arr[i]
        if ((await fn(v, medianValue)) <= 0) {
          left.push(v)
        } else {
          right.push(v)
        }
      }
      return (await _sort(left, fn))
        .concat([medianValue])
        .concat(await _sort(right, fn))
    }

    return new InnerAsyncArray<T>(
      await (await _sort(arr, ([t1], [t2]) => fn(t1, t2))).map(
        ([_v, i]) => this._arr[i],
      ),
    )
  }

  /**
   * 异步的 reduce
   * @param fn 归纳函数
   * @param res 初始值，默认为第一个元素
   * @returns 归纳后的值
   */
  public abstract async reduce<R = T>(
    fn: AsyncArrayReduceCallback<T, R, any>,
    res?: R,
  ): Promise<R>

  /**
   * 异步的 reduceRight
   * @param fn 归纳函数
   * @param res 初始值，默认为最后一个元素
   * @returns 归纳后的值
   */
  public abstract async reduceRight<R = T>(
    fn: AsyncArrayReduceCallback<T, R, any>,
    res?: R,
  ): Promise<R>

  /**
   * 异步 findIndex
   * @param fn 异步查询函数
   * @returns 查询到的第一个值的下标
   */
  public abstract async findIndex(
    fn: AsyncArrayCallback<T, boolean, any>,
  ): Promise<number>

  /**
   * 异步的 find
   * @param fn 异步查询函数
   * @returns 查询到的第一个值
   */
  public async find(
    fn: AsyncArrayCallback<T, boolean, any>,
  ): Promise<T | null> {
    const i = await this.findIndex(fn)
    return i === -1 ? null : this._arr[i]
  }

  /**
   * 异步的 every
   * @param fn 异步匹配函数
   * @returns 是否全部匹配
   */
  public async every(
    fn: AsyncArrayCallback<T, boolean, any>,
  ): Promise<boolean> {
    return (
      (await this.findIndex(async (...args) => !(await fn(...args)))) === -1
    )
  }

  /**
   * 异步的 some
   * @param fn 异步匹配函数
   * @returns 是否有任意一个匹配
   */
  public async some(fn: AsyncArrayCallback<T, boolean, any>): Promise<boolean> {
    return (await this.findIndex(fn)) !== -1
  }

  /**
   * 转换为并发异步数组
   */
  public parallel(): any {
    return new InnerAsyncArrayParallel(this._arr)
  }

  /**
   * 转换为顺序异步数组
   */
  public serial(): any {
    return new InnerAsyncArray(this._arr)
  }

  /**
   * 获取内部数组的值，将返回一个浅复制的数组
   */
  public value(): T[] {
    return this._arr.slice()
  }
}

/**
 * 串行的异步数组
 */
class InnerAsyncArray<T> extends InnerBaseAsyncArray<T> {
  constructor(args?: T[]) {
    super(args)
  }

  public async forEach(
    fn: AsyncArrayCallback<T, void, InnerAsyncArray<T>>,
  ): Promise<void> {
    for (let i = 0, len = this._arr.length; i < len; i++) {
      await fn.call(this, this._arr[i], i, this)
    }
  }

  public async filter(
    fn: AsyncArrayCallback<T, boolean, InnerAsyncArray<T>>,
  ): Promise<InnerAsyncArray<T>> {
    const res = new InnerAsyncArray<T>()
    for (let i = 0, len = this._arr.length; i < len; i++) {
      if (await fn.call(this, this._arr[i], i, this)) {
        res._arr.push(this._arr[i])
      }
    }
    return res
  }

  public async map<R>(
    fn: AsyncArrayCallback<T, R, InnerAsyncArray<T>>,
  ): Promise<InnerAsyncArray<R>> {
    const res = new InnerAsyncArray<R>()
    for (let i = 0, len = this._arr.length; i < len; i++) {
      res._arr.push(await fn.call(this, this._arr[i], i, this))
    }
    return res
  }

  public async flatMap<R>(
    fn: AsyncArrayCallback<T, R[], InnerAsyncArray<T>>,
  ): Promise<InnerAsyncArray<R>> {
    const res = new InnerAsyncArray<R>()
    for (let i = 0, len = this._arr.length; i < len; i++) {
      res._arr.push(...(await fn.call(this, this._arr[i], i, this)))
    }
    return res
  }

  public async reduce<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArray<T>>,
    res?: R,
  ): Promise<R> {
    for (let i = 0, len = this._arr.length; i < len; i++) {
      if (res) {
        res = await fn.call(this, res, this._arr[i], i, this)
      } else {
        res = this._arr[i] as any
      }
    }
    return res as any
  }

  public async reduceRight<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArray<T>>,
    res?: R,
  ): Promise<R> {
    for (let i = this._arr.length - 1; i >= 0; i--) {
      if (res) {
        res = await fn.apply(this, [res, this._arr[i], i, this])
      } else {
        res = this._arr[i] as any
      }
    }
    return res as any
  }

  public async findIndex(
    fn: AsyncArrayCallback<T, boolean, InnerAsyncArray<T>>,
  ): Promise<number> {
    for (let i = 0, len = this._arr.length; i < len; i++) {
      const res = await fn.call(this, this._arr[i], i, this)
      if (res) {
        return i
      }
    }
    return -1
  }
}

/**
 * 并发的异步数组
 */
class InnerAsyncArrayParallel<T> extends InnerBaseAsyncArray<T> {
  constructor(args?: T[]) {
    super(args)
  }

  public async forEach(
    fn: AsyncArrayCallback<T, void, InnerAsyncArrayParallel<T>>,
  ): Promise<void> {
    await this._all(fn)
  }

  public async filter(
    fn: AsyncArrayCallback<T, boolean, InnerAsyncArrayParallel<T>>,
  ): Promise<InnerAsyncArrayParallel<T>> {
    const res = await this._all(fn)
    const result = new InnerAsyncArrayParallel<T>()
    for (let i = 0, len = res.length; i < len; i++) {
      if (res[i]) {
        result._arr.push(this._arr[i])
      }
    }
    return result
  }

  public async map<R>(
    fn: AsyncArrayCallback<T, R, InnerAsyncArrayParallel<T>>,
  ): Promise<InnerAsyncArrayParallel<R>> {
    return new InnerAsyncArrayParallel(await this._all(fn))
  }

  public async flatMap<R>(
    fn: AsyncArrayCallback<T, R[], InnerAsyncArrayParallel<T>>,
  ): Promise<InnerAsyncArrayParallel<R>> {
    const res = await this._all(fn)
    return new InnerAsyncArrayParallel(res.flat())
  }

  public sort(
    fn: (t1: T, t2: T) => Promise<number>,
  ): Promise<InnerAsyncArray<T>> {
    throw new Error('Method not implemented.')
  }

  public async reduce<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArrayParallel<T>>,
    res?: R,
  ): Promise<R> {
    for (let i = 0, len = this._arr.length; i < len; i++) {
      if (res) {
        res = await fn.call(this, res, this._arr[i], i, this)
      } else {
        res = this._arr[i] as any
      }
    }
    return res as any
  }

  public async reduceRight<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArrayParallel<T>>,
    res?: R,
  ): Promise<R> {
    for (let i = this._arr.length - 1; i >= 0; i--) {
      if (res) {
        res = await fn.apply(this, [res, this._arr[i], i, this])
      } else {
        res = this._arr[i] as any
      }
    }
    return res as any
  }

  public async findIndex(
    fn: AsyncArrayCallback<T, boolean, InnerAsyncArrayParallel<T>>,
  ): Promise<number> {
    return (await this._all(fn)).findIndex((v) => v)
  }

  private async _all<R>(
    fn: AsyncArrayCallback<T, R, InnerAsyncArrayParallel<T>>,
  ): Promise<R[]> {
    return await Promise.all(
      this._arr.map((v, i) => fn.apply(this, [v, i, this])),
    )
  }
}

/**
 * 异步数组
 */
export class AsyncArray<T> implements PromiseLike<any> {
  /**
   * 为内置数组赋值
   * 此处自动重新计算 length 属性
   */
  public set _arr(arr: T[]) {
    this.__arr = arr
    this.length = this.__arr.length
  }

  public get _arr() {
    return this.__arr
  }

  /**
   * 提供一个函数方便根据已有的数组或类数组（Set/Map）创建 {@link AsyncArray}
   * @param arr 一个可迭代元素
   * @returns 创建一个新的异步数组包装
   */
  public static from<T>(
    arr: Iterable<T> | ArrayLike<T> | null | undefined,
  ): AsyncArray<T> {
    const result = new AsyncArray<T>([])
    if (isNullOrUndefined(arr)) {
      throw new Error('arr not is null')
    }
    result._arr = Array.from(arr)
    return result
  }

  /**
   * 内部数组的长度，用于让 {@link AsyncArray} 的实例能作为 {@link Array.from} 的参数
   */
  public length = 0
  /**
   * 内部的数组
   */
  private __arr!: T[]
  // noinspection TypeScriptFieldCanBeMadeReadonly
  /**
   * 保存的任务数组
   */
  private _tasks: Action[]

  /**
   * 构造函数
   * @param args 任意个参数
   */
  constructor(args: T[]) {
    this._arr = Array.from(args)
    /**
     * @field 保存异步任务
     * @type {Action[]}
     */
    this._tasks = []
  }

  public filter(
    fn: AsyncArrayCallback<
      T,
      boolean,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): AsyncArray<T> {
    return this._addTask(new Action(Action.Type.filter, [fn]))
  }

  public map<R>(
    fn: AsyncArrayCallback<
      T,
      R,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): AsyncArray<R> {
    return this._addTask(new Action(Action.Type.map, [fn])) as any
  }

  public flatMap<R>(
    fn: AsyncArrayCallback<
      T,
      R[],
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): AsyncArray<R> {
    return this._addTask(new Action(Action.Type.flatMap, [fn])) as any
  }

  public sort(fn?: (a: T, b: T) => number): AsyncArray<T> {
    return this._addTask(new Action(Action.Type.sort, [fn]))
  }

  public parallel(): AsyncArray<T> {
    return this._addTask(new Action(Action.Type.parallel, []))
  }

  public serial(): AsyncArray<T> {
    return this._addTask(new Action(Action.Type.serial, []))
  }

  public forEach(
    fn: AsyncArrayCallback<
      T,
      void,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): Promise<void> {
    return this._addTask(new Action(Action.Type.forEach, [fn])).then()
  }

  public some(
    fn: AsyncArrayCallback<
      T,
      boolean,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): Promise<boolean> {
    return this._addTask(new Action(Action.Type.some, [fn])).then()
  }

  public every(
    fn: AsyncArrayCallback<
      T,
      boolean,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): Promise<boolean> {
    return this._addTask(new Action(Action.Type.every, [fn])).then()
  }

  public find(
    fn: AsyncArrayCallback<
      T,
      boolean,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): Promise<T | null> {
    return this._addTask(new Action(Action.Type.find, [fn])).then()
  }

  public findIndex(
    fn: AsyncArrayCallback<
      T,
      boolean,
      InnerAsyncArray<T> | InnerAsyncArrayParallel<T>
    >,
  ): Promise<number> {
    return this._addTask(new Action(Action.Type.findIndex, [fn])).then()
  }

  public reduce<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArray<T>>,
    res?: R,
  ): Promise<R> {
    return this._addTask(new Action(Action.Type.reduce, [fn, res])).then()
  }

  public reduceRight<R = T>(
    fn: AsyncArrayReduceCallback<T, R, InnerAsyncArray<T>>,
    res?: R,
  ): Promise<R> {
    return this._addTask(new Action(Action.Type.reduceRight, [fn, res])).then()
  }

  /**
   * 终结整个链式操作并返回结果，可以使用 await 等待当前实例开始计算
   */
  public async then<TResult1 = any, TResult2 = never>(
    onfulfilled?:
      | ((value: any) => TResult1 | PromiseLike<TResult1>)
      | undefined
      | null,
    onrejected?:
      | ((reason: any) => TResult2 | PromiseLike<TResult2>)
      | undefined
      | null,
  ): Promise<any> {
    try {
      let asyncArray = new InnerAsyncArray(this._arr)
      let result: any = this._arr
      for (const task of this._tasks) {
        asyncArray = await Reflect.apply(
          Reflect.get(asyncArray, task.type),
          asyncArray,
          task.args,
        )
        if (asyncArray instanceof InnerBaseAsyncArray) {
          result = asyncArray.value()
        } else {
          if (!isNullOrUndefined(onfulfilled)) {
            onfulfilled(result)
          }
          return asyncArray
        }
      }
      if (!isNullOrUndefined(onfulfilled)) {
        onfulfilled(result)
      }
      return result
    } catch (err) {
      if (!isNullOrUndefined(onrejected)) {
        onrejected(err)
      }
    }
  }

  /**
   * @deprecated 已废弃，请直接使用 await 进行等待获取结果值即可
   */
  public value(): Promise<any> {
    return this.then()
  }

  /**
   * 允许使用 for-of 遍历内部的 _arr
   */
  public *[Symbol.iterator]() {
    for (const kv of this._arr) {
      yield kv
    }
  }

  private _addTask(task: Action): AsyncArray<T> {
    const result = new AsyncArray(this._arr)
    result._tasks = [...this._tasks, task]
    return result
  }
}