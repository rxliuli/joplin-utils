/**
 * 绑定 this
 */
export class BindThisUtil {
  static bindClassMethod<T extends object>(instance: T): T {
    const excludeFieldSet = new Set<PropertyKey>(['constructor'])
    Reflect.ownKeys(Reflect.getPrototypeOf(instance))
      .filter(
        (field) =>
          !excludeFieldSet.has(field) &&
          instance[field as keyof T] instanceof Function,
      )
      .forEach((_field) => {
        const field = _field as keyof T
        Reflect.set(instance, field, (instance[field] as any).bind(instance))
      })
    return instance
  }
}
