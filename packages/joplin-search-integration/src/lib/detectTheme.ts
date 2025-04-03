export function detectBackground() {
  const bodyBgColor = window.getComputedStyle(document.body).backgroundColor
  const [r, g, b] = bodyBgColor.match(/\d+/g)!.map(Number)
  const brightness = (r * 299 + g * 587 + b * 114) / 1000
  return brightness !== 0 && brightness < 128
}

export function detectTheme() {
  // 1. 检查系统偏好
  const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

  // 2. 分析背景色
  const isDarkBg = detectBackground()

  // 3. 检查特定的CSS类或属性
  const htmlClasses = document.documentElement.classList
  const bodyClasses = document.body.classList
  const hasDarkClass =
    htmlClasses.contains('dark') ||
    bodyClasses.contains('dark') ||
    htmlClasses.contains('dark-theme') ||
    bodyClasses.contains('dark-theme')

  // 4. 分析页面的整体颜色方案
  const elements = document.querySelectorAll('body, body *')
  let darkElements = 0
  let totalElements = elements.length

  elements.forEach((el) => {
    const style = window.getComputedStyle(el)
    const color = style.color
    const bgColor = style.backgroundColor
    if (color && bgColor) {
      const [r, g, b] = color.match(/\d+/g)!.map(Number)
      const brightness = (r * 299 + g * 587 + b * 114) / 1000
      if (brightness !== 0 && brightness < 128) darkElements++
    }
  })

  const isDarkScheme = darkElements / totalElements > 0.6

  // 根据网站进行特定处理
  const host = location.hostname
  if (host.includes('google')) {
    return hasDarkClass || isDarkBg
  } else if (host.includes('bing')) {
    return htmlClasses.contains('b_dark') || isDarkBg
  } else if (host.includes('duckduckgo')) {
    return htmlClasses.contains('dark-bg') || isDarkBg
  } else if (host.includes('baidu')) {
    return isDarkBg
  }

  // 如果没有特定处理，综合判断
  return [prefersDarkMode, isDarkBg, hasDarkClass, isDarkScheme].filter(Boolean).length >= 2
}
