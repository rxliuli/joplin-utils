import { ActionTypeEnum } from './model/ActionTypeEnum'

console.log('background script')

browser.runtime.onMessage.addListener(
  async (message: { action: ActionTypeEnum; data: any }) => {
    switch (message.action) {
      case ActionTypeEnum.OpenOptionsPage:
        await browser.runtime.openOptionsPage()
        break
      case ActionTypeEnum.OpenNote:
        await browser.tabs.create({
          url: `chrome-extension://gmkdjdbgpnfppnolhplppjfidknejkbm/pages/options/index.html#/note/${message.data.id}`,
          active: true,
        })
        break
      default:
        break
    }
  },
)
