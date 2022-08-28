import { chrome } from 'jest-chrome'

// @ts-expect-error we need to set this to use browser polyfill
chrome.runtime.id = 'test id'
Object.assign(global, { chrome })

// We need to require this after we setup jest chrome
// eslint-disable-next-line @typescript-eslint/no-var-requires
const browser = require('webextension-polyfill')
Object.assign(global, { browser })
