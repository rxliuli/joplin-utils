chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  switch (message.action) {
    case 'open':
      const url = chrome.runtime.getURL(`/options/index.html?id=${message.id}`)
      chrome.tabs.create({ url, active: true })
      break
    default:
      break
  }
})

export {}
