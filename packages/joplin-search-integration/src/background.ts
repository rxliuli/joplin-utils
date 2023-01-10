import browser from 'webextension-polyfill'

browser.runtime.onMessage.addListener(async (message) => {
  switch (message.action) {
    case 'open':
      const p = new URLSearchParams(location.search)
      const { action, ...args } = message
      Object.entries(args).forEach(([k, v]) => (Array.isArray(v) ? v.forEach((i) => p.set(k, i)) : p.set(k, String(v))))
      const url = browser.runtime.getURL(`/options/index.html?${p.toString()}`)
      const t = (await browser.tabs.query({ active: true, currentWindow: true }))[0]
      await browser.tabs.create({ url, active: true, index: (t?.index ?? 0) + 1 })
      break
    default:
      break
  }
})

export {}
