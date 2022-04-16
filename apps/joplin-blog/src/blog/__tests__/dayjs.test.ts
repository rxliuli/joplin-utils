import dayjs from 'dayjs'

it('测试 dayjs', () => {
  expect(dayjs('2019-01-25 00:00:00').format('YYYY-MM-DD HH:mm:ss')).toBe('2019-01-25 00:00:00')
  expect(dayjs('2019-01-25 00:00:00').format('YYYY-MM-DD')).toBe('2019-01-25')
})
