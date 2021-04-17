import { Command } from 'commander'
import { prompt } from 'enquirer'
import { pathExists, readdir, writeJSON } from 'fs-extra'
import path from 'path'
import { BaseCommanderProgram } from './BaseCommanderProgram'

/**
 * 博客的配置初始化
 */
export class InitConfigProgram implements BaseCommanderProgram {
  async main() {
    const res = await prompt([
      {
        type: 'select',
        name: 'type',
        choices: ['hexo', 'vuepress'],
        message: '集成博客的类型',
        required: true,
      },
      {
        type: 'password',
        name: 'token',
        message: 'joplin web clipper 服务的 token',
        required: true,
      },
      {
        type: 'numeral',
        name: 'port',
        message: 'joplin web clipper 服务的端口号',
        initial: 41184,
        required: true,
      },
      {
        type: 'input',
        name: 'joplinProfilePath',
        message: 'joplin 程序的个人目录',
        required: true,
      },
      {
        type: 'input',
        name: 'tag',
        message: 'joplin 的博客标签',
        initial: 'blog',
        required: true,
      },
      {
        type: 'input',
        name: 'rootPath',
        message: 'hexo/vuepress 目录，一般应该为 .',
        initial: '.',
        required: true,
      },
    ])

    await writeJSON(path.resolve('./.joplin-blog.json'), res, {
      spaces: 2,
    })
  }
}

/**
 * 初始化一些 hexo 博客项目
 */
export class InitHexoProjectProgram implements BaseCommanderProgram {
  async main() {
    const config: { rootPath: string } = await prompt({
      type: 'input',
      name: 'rootPath',
      message: '选择初始化 hexo 的目录，默认为当前目录',
      initial: '.',
    })
    const rootPath = path.resolve(config.rootPath)
    if (!(await pathExists(rootPath))) {
      // 目录不存在
    } else if ((await readdir(rootPath)).length !== 0) {
      // 目录不是空的
    }
  }
}

export const blogInitCommander = () =>
  new Command('init')
    .addCommand(
      new Command('config')
        .description('初始化 .joplin-blog.json 配置')
        .action(() => new InitConfigProgram().main()),
    )
    // .addCommand(
    //   new Command('hexo')
    //     .description('初始化 hexo 博客目录')
    //     .action(() => new InitHexoProjectProgram().main()),
    // )
    .description('一些相关的初始化动作')
