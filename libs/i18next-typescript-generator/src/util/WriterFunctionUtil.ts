import {
  UnionTypeNode,
  WriterFunction,
  WriterFunctionOrValue,
  Writers,
} from 'ts-morph'

type NativeTypeLiteral = 'string' | 'number' | 'boolean'

/**
 * ts-morph 的一些 WriterFunction 工具函数
 */
export class WriterFunctionUtil {
  /**
   * tuple 类型
   * @param types
   */
  static tuple(
    types: { name: string; type: NativeTypeLiteral | WriterFunctionOrValue }[],
  ): WriterFunction {
    return (writer) => {
      writer.write('[')
      for (let token of types) {
        writer.write(token.name)
        writer.write(': ')
        if (typeof token.type === 'function') {
          token.type(writer)
        } else {
          writer.write(token.type.toString())
        }
        writer.write(', ')
      }
      writer.write(']')
    }
  }

  /**
   * 字面量类型
   * @param type
   */
  static literal(type: string | number): WriterFunction {
    return (writer) => {
      if (typeof type === 'number') {
        writer.write(type.toString())
        return
      }
      writer.write("'")
      writer.write(type.replace(new RegExp("'", 'g'), "\\'"))
      writer.write("'")
    }
  }

  /**
   * 对 {@link Writers#union} 的增强
   * 当数组为空时返回 never
   * 当数组只有一个给元素时返回第一个元素
   * 否则返回 union
   * @param types
   */
  static union(
    types: NativeTypeLiteral | WriterFunctionOrValue[],
  ): string | WriterFunction {
    if (types.length < 1) {
      return 'never'
    }
    if (types.length === 1) {
      const type = types[0]
      return typeof type === 'function' ? type : type.toString()
    }
    return (Writers.unionType as any)(...types)
  }
}
