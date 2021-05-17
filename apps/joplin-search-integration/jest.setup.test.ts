import { chrome as jestChrome } from 'jest-chrome'

test('browser is defined in the global scope', () => {
  expect(browser).toBeDefined()
  expect(browser.runtime).toBeDefined()
  // This will be undefined if no mock implementation is provided
  expect(browser.runtime.sendMessage).toBeUndefined()
})

test('browser api methods are defined after implementation in chrome api', () => {
  // You need to add an implementation for each Chrome API method you use
  //   Methods will be present in the Chrome API without implementations
  //     but unused methods in the Browser API will be undefined
  jestChrome.runtime.sendMessage.mockImplementation((message, cb) => {
    cb({ greeting: 'test-response' })
  })

  expect(browser.runtime.sendMessage).toBeDefined()
})

test('chrome is mocked in the global scope', () => {
  expect(chrome).toBeDefined()
  expect(chrome.runtime).toBeDefined()
  expect(chrome.runtime.sendMessage).toBeDefined()
})
