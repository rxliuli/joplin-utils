/**
 * 遍历并映射一棵树的可选参数对象
 */
import { INode } from "./INode";
import { returnItself } from "./returnItself";

interface ITreeMappingOptions<T> {
  /**
   * 遍历子节点之前的操作。默认返回自身
   */
  before?: (node: T, ...args: any[]) => INode;
  /**
   * 遍历子节点之后的操作。默认返回自身
   */
  after?: (node: INode, ...args: any[]) => INode;
  /**
   * 递归的参数生成函数。默认返回一个空数组
   */
  paramFn?: (node: INode, ...args: any[]) => any[];
}

/**
 * 遍历并映射一棵树的每个节点
 * @param root 树节点
 * @param options 其他选项
 * @returns 递归遍历后的树节点
 */
export function treeMapping<T>(
  root: T,
  {
    before = returnItself,
    after = returnItself,
    paramFn = (node, ...args) => [],
  }: Partial<ITreeMappingOptions<T>> = {}
): INode {
  /**
   * 遍历一颗完整的树
   * @param node 要遍历的树节点
   * @param args 每次递归遍历时的参数
   */
  function _treeMapping(node: any, ...args: any[]): INode {
    // 之前的操作
    const _node = before!(node, ...args);
    const _child = _node.child;
    if (!!_child && _child.length > 0) {
      _node.child = _child.map((v) =>
        // 产生一个参数
        _treeMapping(v, ...paramFn(_node, ...args))
      );
    }
    // 之后的操作
    return after(_node, ...args);
  }
  return _treeMapping(root);
}
