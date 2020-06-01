const pkg = require('joplin-api')
const { hello } = require('joplin-api')

describe('test', () => {
  it('simple example', () => {
    pkg.hello()
    hello()
  })
})
