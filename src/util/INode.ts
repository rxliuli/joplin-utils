/**
 * 基本的 Node 节点可选项参数
 */
export interface IParamNode<T> {
  /**
   * 树结点的 id 属性名
   */
  id: number | string
  /**
   * 树结点的父节点 id 属性名
   */
  parentId: number | string | null | undefined
  /**
   * 树结点的子节点数组属性名
   */
  child: T[]
  /**
   * 树结点的全路径属性名
   */
  path: string | null | undefined
}

/**
 * 基本的 Node 节点结构定义接口
 */
export interface INode extends IParamNode<INode> {}
