import ora from 'ora'
import { wait } from '@liuli-util/async'
;(async () => {
  const spinner = ora({
    color: 'blue',
  })

  spinner.start()
  spinner.text = '开始扫描'
  let rate = 0
  await new Promise<void>((resolve) => {
    const interval = setInterval(() => {
      rate++
      spinner.text = `进度: ${rate}/100`
      if (rate === 10) {
        clearInterval(interval)
        resolve()
      }
    }, 100)
  })
  spinner.text = '扫描完成'
  spinner.stopAndPersist()

  spinner.start()
  spinner.text = '过滤数据'
  spinner.stopAndPersist()

  await wait(3_000)
})()
