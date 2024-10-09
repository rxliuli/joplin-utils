import { Element } from 'hast'
// @ts-ignore
import katex from 'katex'
import 'katex/dist/katex.min.css'

// Function to process LaTeX from text nodes
export function processLatex(textNodes: Element[], md: string): void {
  textNodes.forEach((node) => {
    if (
      Array.isArray(node.properties.className) &&
      node.properties.className[0] === 'language-math' &&
      node.properties.className[1] === 'math-inline'
    ) {
      // @ts-ignore
      const text = node.children[0].value
      const renderedLatex = katex.renderToString(text, { throwOnError: false })
      node.type = 'element'
      if (
        node.position &&
        node.position.start.offset &&
        node.position.end.offset &&
        node.position.start.offset + 2 < node.position.end.offset &&
        md.slice(node.position.start.offset, node.position.start.offset + 2) === '$$'
      ) {
        node.tagName = 'div'
        node.properties = { className: 'katex-block' }
      } else {
        node.tagName = 'span'
        node.properties = { className: 'katex-inline' }
      }
      node.children[0] = { type: 'raw', value: renderedLatex }
    }
  })
}

export function unescapeJoplinMathExceptions(textNodes: Node[]): void {
  textNodes.forEach((node) => {
    // @ts-ignore
    if (node.type === 'text') {
      // @ts-ignore
      node.value = node.value.replaceAll('&#36;', '$')
    }
  })
}

export function escapeJoplinMathExceptions(text: string): string {
  // Regular expression to match inline LaTeX and block LaTeX for Joplin
  const latexInlineRegex = /(?<!\\)\$(\S.+?)(?<!\\)(?<!\s)\$/gm // Inline LaTeX
  const latexBlockRegex = /(?<!\\)\$\$(\S.+?)(?<!\\)(?<!\s)\$\$/gm // Block LaTeX
  let escapedText = ''

  text.split(latexBlockRegex).forEach((s1, index: number) => {
    if (index % 2 === 1) {
      escapedText += '$$'
    }
    s1.split(latexInlineRegex).forEach((s2, index: number) => {
      if (index % 2 === 1) {
        escapedText += '$'
      }
      escapedText += s2.replaceAll('$', '&#36;')
      if (index % 2 === 1) {
        escapedText += '$'
      }
    })
    if (index % 2 === 1) {
      escapedText += '$$'
    }
  })
  return escapedText
}
