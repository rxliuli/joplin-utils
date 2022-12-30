import browser from 'webextension-polyfill'

browser.runtime.onMessage.addListener((message) => {
  switch (message.action) {
    case 'open':
      const url = browser.runtime.getURL(`/options/index.html?id=${message.id}`)
      browser.tabs.create({ url, active: true })
      break
    default:
      break
  }
})

export {}
