import { Element } from 'hast'
// @ts-ignore
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Function to process LaTeX from text nodes and return new children
export function processLatex(textNodes: Node[]): Element[] {
  const newChildren: Element[] = [] // Collect new child elements for the root

  textNodes.forEach((node) => {
    // @ts-ignore
    const text = node.value

    // Regular expression to match inline LaTeX and block LaTeX
    const latexInlineRegex = /\$(.+?)\$/g // Inline LaTeX
    const latexBlockRegex = /\$\$(.+?)\$\$/g // Block LaTeX

    // Split text into parts based on block LaTeX first
    let parts = text.split(latexBlockRegex)

    parts.forEach((part: string, index: number) => {
      if (index % 2 === 1) {
        // If it's an odd index, it is block LaTeX
        const latex = part.trim()
        const renderedLatex = katex.renderToString(latex, { throwOnError: false })

        // Push rendered block LaTeX as a new element of type 'html'
        newChildren.push({
          type: 'element',
          tagName: 'div',
          properties: { className: 'katex-block' },
          children: [{ type: 'raw', value: renderedLatex }],
        })
      } else {
        // If it's an even index, it is regular text or inline LaTeX
        const inlineParts = part.split(latexInlineRegex)

        inlineParts.forEach((inlinePart, inlineIndex) => {
          if (inlineIndex % 2 === 1) {
            // If it's an odd index, it is inline LaTeX
            const latex = inlinePart.trim()
            const renderedLatex = katex.renderToString(latex, { throwOnError: false })

            // Push rendered inline LaTeX as a new element of type 'html'
            newChildren.push({
              type: 'element',
              tagName: 'span',
              properties: { className: 'katex-inline' },
              children: [{ type: 'raw', value: renderedLatex }],
            })
          } else if (inlinePart.trim()) {
            newChildren.push({
              type: 'element',
              tagName: 'span',
              properties: {},
              children: [{ type: 'text', value: inlinePart }],
            })
          }
        })
      }
    })
  })

  return newChildren
}
