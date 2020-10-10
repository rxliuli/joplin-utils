import { openFileByOS } from '../../src/util/openFileByOS'
import path = require('path')

it('测试 openFileByOS', function () {
  openFileByOS(path.resolve(__dirname, './resource/test.png'))
})
