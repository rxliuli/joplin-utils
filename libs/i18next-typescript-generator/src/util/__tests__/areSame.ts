import { Project, Node } from 'ts-morph'
import { format } from 'prettier'

/**
 * 比较两个 ts 代码从 ast 上看是否一致
 * @param text1
 * @param text2
 */
export function areSame(text1: string, text2: string) {
  const project = new Project()
  const leafNodes1 = getLeafNodes(text1)
  const leafNodes2 = getLeafNodes(text2)

  while (true) {
    const leaf1 = leafNodes1.next()
    const leaf2 = leafNodes2.next()

    if (leaf1.done && leaf2.done) return true
    if (leaf1.done || leaf2.done) return false
    if (leaf1.value.getText() !== leaf2.value.getText()) return false
  }

  function* getLeafNodes(text: string) {
    yield* searchNode(
      project.createSourceFile(
        Math.floor(Math.random() * 10000) + '.ts',
        format(text, { parser: 'typescript' }),
      ),
    )

    function* searchNode(node: Node): any {
      const children = node.getChildren()
      if (children.length === 0) {
        yield node
      } else {
        for (const child of children) {
          yield* searchNode(child)
        }
      }
    }
  }
}
