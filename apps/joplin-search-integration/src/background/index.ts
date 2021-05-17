import { ActionTypeEnum } from './model/ActionTypeEnum'
import { getNoteRoute } from '../pages/options/pages/note/util/getNoteRoute'

console.log('background script')

browser.runtime.onMessage.addListener(
  async (message: { action: ActionTypeEnum; data: any }) => {
    switch (message.action) {
      case ActionTypeEnum.OpenOptionsPage:
        await browser.runtime.openOptionsPage()
        break
      case ActionTypeEnum.OpenNote:
        await browser.tabs.create({
          url: getNoteRoute(message.data.id),
          active: true,
        })
        break
      default:
        break
    }
  },
)
