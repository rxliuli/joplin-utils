import envPaths from 'env-paths'
import * as git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import fs from 'fs'
import { globby } from 'globby'
import { convert } from '@mark-magic/core'
import * as hexo from '@mark-magic/plugin-hexo'
import * as joplin from '@mark-magic/plugin-joplin'
import { withProgress } from './withProgress'
import { emptyDir, pathExists } from 'fs-extra'
import { get } from 'lodash-es'

export async function publish(options: { token: string; username: string; repo: string; tag: string }) {
  const dir = envPaths(`joplin-publisher/${options.username}/${options.repo}`).data
  console.log('dir:', dir)
  await withProgress({ title: 'Processing start' }, async (process) => {
    // 如果不存在，拉取仓库
    await git.setConfig({
      fs,
      dir,
      path: 'user.name',
      value: 'Joplin Publisher',
    })
    async function cloneRepo() {
      process.report({ message: 'Cloning remote repository' })
      try {
        await git.clone({
          fs,
          http,
          dir,
          url: `https://github.com/${options.username}/${options.repo}`,
        })
        return true
      } catch (err) {
        console.error('Failed to clone remote repository', err)
        process.report({ message: 'Failed to clone remote repository' })
        return false
      }
    }
    if (!(await pathExists(dir))) {
      if (!(await cloneRepo())) {
        return
      }
    } else {
      try {
        process.report({ message: 'Pulling remote repository' })
        await git.pull({ fs, http, dir, singleBranch: true })
      } catch (err) {
        if (get(err, 'code') === 'NotFoundError') {
          await emptyDir(dir)
          if (!(await cloneRepo())) {
            return
          }
        }
        console.error('Failed to pull remote repository', err)
        process.report({ message: 'Failed to pull remote repository' })
        return
      }
    }

    // 通过 mark-magic 生成 md 文件
    try {
      await convert({
        input: joplin.input({ type: 'plugin', tag: options.tag }),
        output: hexo.output({ path: dir }),
      }).on('generate', ({ content }) => {
        console.log('progress:', content.name)
        process.report({ message: `Processing ${content.name}` })
      })
    } catch (err) {
      console.error('Failed to generate markdown file', err)
      process.report({ message: 'Failed to generate markdown file' })
      return
    }
    // 推送到远端
    try {
      process.report({ message: 'Pushing to remote repository' })
      await stageAllChanges({ dir })
      await git.commit({
        fs,
        dir,
        message: `Update ${new Date().toISOString()}`,
      })
      await git.push({ fs, http, dir, onAuth: () => ({ username: options.username, password: options.token }) })
    } catch (err) {
      if (get(err, 'data.statusCode') === 403 && !!get(err, 'data.response')) {
        console.log('Failed to push to remote repository', get(err, 'data'))
        process.report({ message: `Failed to push to remote repository: ${get(err, 'data.response')}` })
        return
      }
      console.error('Failed to push to remote repository', err)
      process.report({ message: 'Failed to push to remote repository' })
      return
    }
    process.report({ message: 'Publish success' })
  })
}

async function stageAllChanges({ dir }: { dir: string }) {
  // 使用 globby 获取所有文件（包括隐藏文件和子目录中的文件）
  const files = await globby(['**/*', '**/.*'], { cwd: dir, dot: true, gitignore: true, ignore: ['.git/**'] })

  // Stage all files
  for (const file of files) {
    await git.add({ fs, dir, filepath: file })
  }

  // 获取索引状态矩阵
  const statusMatrix = await git.statusMatrix({ fs, dir })

  // 移除已删除的文件
  for (const [filepath, , workdirStatus] of statusMatrix) {
    if (workdirStatus === 0) {
      await git.remove({ fs, dir, filepath })
    }
  }
}
