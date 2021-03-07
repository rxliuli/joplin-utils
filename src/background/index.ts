console.log('background script')

browser.runtime.onMessage.addListener(async (message: { action: 'openOptionsPage' }) => {
  switch (message.action) {
    case 'openOptionsPage':
      await browser.runtime.openOptionsPage()
      break
    default:
      break
  }
})
