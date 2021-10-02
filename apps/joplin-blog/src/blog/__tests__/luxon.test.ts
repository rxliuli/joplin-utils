import { DateTime } from 'luxon'

it('测试 luxon', () => {
  console.log(DateTime.now().toFormat('yyyy-LL-dd hh:mm:ss'))
})
