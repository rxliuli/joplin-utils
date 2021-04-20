import figlet from 'figlet'
import shell, { ExecOptions } from 'shelljs'
import commandExists from 'command-exists'
import { add, commit, init, statusMatrix } from 'isomorphic-git'
import { remove } from 'fs-extra'
import path from 'path'
import fs from 'fs'
import { AsyncArray } from '@liuli-util/async'

/**
 * 生成一个字符画
 * @param txt
 * @param options
 */
export function figletPromise(
  txt: string,
  options?: figlet.Options,
): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    figlet(txt, options, (error, result) => {
      if (error) {
        reject(error)
        return
      }
      resolve(result!)
    })
  })
}

/**
 * 执行 cmd 命令
 * @param execPath
 * @param cmd
 * @param options
 */
export async function execCommand(
  execPath: string,
  cmd: string,
  options?: Omit<ExecOptions, 'cwd'>,
): Promise<string> {
  return new Promise<string>(async (resolve, reject) => {
    shell.exec(
      cmd,
      {
        async: true,
        cwd: execPath,
        silent: true,
        ...options,
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

/**
 * 使用 yarn 安装依赖
 * @param execPath
 */
export async function installDeps(execPath: string) {
  if (!commandExists.sync('yarn')) {
    await execCommand('.', 'npm i -g yarn')
  }
  return await execCommand(execPath, 'yarn')
}

/**
 * 重置 git
 */
export async function resetGit(rootPath: string) {
  await remove(path.resolve(rootPath, '.git'))
  const repo = {
    dir: rootPath,
    fs,
  }
  await init(repo)
  await AsyncArray.forEach(
    await statusMatrix(repo),
    async ([filepath, , worktreeStatus]) => {
      worktreeStatus ? await add({ ...repo, filepath }) : await remove(filepath)
    },
  )
  await commit({
    ...repo,
    message: 'Initial Commit',
    author: {
      name: 'rxliuli',
      email: 'rxliuli@gmail.com',
    },
  })
}
