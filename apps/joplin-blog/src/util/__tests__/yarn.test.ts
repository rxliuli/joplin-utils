import path from 'path'
import ora from 'ora'
import { installDeps } from '../utils'

it('测试 yarn', async () => {
  const spinner = ora({ color: 'blue' })
  spinner.start('开始安装依赖')
  try {
    const res = await installDeps(path.resolve(__dirname, './temp/node-example'))
    spinner.stopAndPersist({ text: res })
  } catch (e) {
    console.error(e)
  }
})

it('测试执行 yarn 命令同时返回 stdout/stderr 的情况', async () => {
  await installDeps(path.resolve(__dirname, './temp/node-example'))
})
