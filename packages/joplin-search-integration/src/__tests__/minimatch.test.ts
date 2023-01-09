import micromatch from 'minimatch'
import { it, expect } from 'vitest'

it('micromatch', () => {
  expect(micromatch('https://www.google.com.hk/search?newwindow=1&q=windows', 'https://www.google.com.*/search?*')).true
  expect(micromatch('https://www.google.com/search?newwindow=1&q=windows', 'https://www.google.com/search?*')).true
  expect(micromatch('https://github.com/', 'https://www.google.com/search?*')).false
})
