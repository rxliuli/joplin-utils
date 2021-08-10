export class DOMEditorUtil {
  /**
   * 将文本写入到剪切版
   * @param text
   */
  static async writeClipboard(text: string): Promise<void> {
    await navigator.clipboard.writeText(text)
  }
}
