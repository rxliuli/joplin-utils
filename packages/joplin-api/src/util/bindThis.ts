function getAllMethods(obj: any) {
  let methods: string[] = []
  let currentObj = obj

  while (currentObj && currentObj !== Object.prototype) {
    const props = Object.getOwnPropertyNames(currentObj)
    methods = methods.concat(props.filter((prop) => typeof currentObj[prop] === 'function'))
    currentObj = Object.getPrototypeOf(currentObj)
  }

  return [...new Set(methods)]
}

export function bindThis<T extends object>(obj: T): T {
  const methods = getAllMethods(obj)
  methods.forEach((key) => {
    const k = key as keyof T
    if (k !== 'constructor' && typeof obj[k] === 'function') {
      obj[k] = obj[k].bind(obj)
    }
  })
  return obj
}
