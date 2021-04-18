import shell from 'shelljs'
import path from 'path'
import ora from 'ora'
import commandExists from 'command-exists'

async function execCommand(execPath: string, cmd: string): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    shell.exec(
      cmd,
      {
        async: true,
        cwd: execPath,
        silent: true,
      },
      (code, stdout, stderr) => {
        if (code !== 0) {
          reject(new Error(stderr))
          return
        }
        resolve(stdout)
      },
    )
  })
}

export async function install(execPath: string) {
  if (!commandExists.sync('yarn')) {
    await execCommand('.', 'npm i -g yarn')
  }
  return await execCommand(execPath, 'yarn')
}

it('测试 yarn', async () => {
  const spinner = ora({ color: 'blue' })
  spinner.start('开始安装依赖')
  try {
    const res = await install(path.resolve(__dirname, './temp/node-example'))
    spinner.stopAndPersist({ text: res })
  } catch (e) {
    console.error(e)
  }
})

it('测试执行 yarn 命令同时返回 stdout/stderr 的情况', async () => {
  await install(path.resolve(__dirname, './temp/node-example'))
})
