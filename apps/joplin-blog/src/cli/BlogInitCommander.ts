import { Command } from 'commander'
import { prompt } from 'enquirer'
import {
  mkdirp,
  pathExists,
  readdir,
  readJSON,
  remove,
  writeJSON,
} from 'fs-extra'
import path from 'path'
import { BaseCommanderProgram } from './BaseCommanderProgram'
import { HexoInstance } from '../util/HexoInstance'
import ora from 'ora'
import { deploy, execCommand } from '../util/utils'

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
 * 初始化 hexo 博客项目
 */
export class InitHexoProjectProgram implements BaseCommanderProgram {
  constructor(private hexoInstance: HexoInstance) {}

  private readonly spinner = ora({ color: 'blue' })

  async main() {
    const rootPath = this.hexoInstance.config.rootPath
    if (!(await pathExists(rootPath))) {
      console.info('目录不存在，已自动创建')
      await mkdirp(rootPath)
    } else if ((await readdir(rootPath)).length !== 0) {
      console.error('目录不是空的，已经终止命令')
      return
    }
    // 初始化 hexo 项目
    const hexoInstance = new HexoInstance({ rootPath })
    this.spinner.start('开始生成 hexo 项目')
    await hexoInstance.init((options) => {
      this.spinner.text = `正在生成 hexo 项目: ${options.title} ${
        options.rate
      }${options.all ? `/${options.all}` : ''}`
    })
    this.spinner.stopAndPersist({ text: '结束生成 hexo 项目' })

    this.spinner.start('安装依赖，可能需要较长的时间')
    await hexoInstance.installDeps()
    this.spinner.stopAndPersist({ text: '结束安装依赖' })

    await this.resetGit()

    await execCommand(rootPath, 'yarn server', {
      silent: false,
    })
  }

  /**
   * 其实这里只需要删除 clone 下来的 .git 目录就好了
   */
  async resetGit() {
    const rootPath = this.hexoInstance.config.rootPath
    await remove(path.resolve(rootPath, '.git'))
  }
}

/**
 * 部署 hexo 项目打包后的静态资源
 */
export class DeployStaticProgram implements BaseCommanderProgram {
  async main(): Promise<void> {
    const config = await readJSON(path.resolve('./.joplin-blog.json'))
    await deploy(path.resolve('./public'), {
      user: config.deploy.user,
      repo: config.deploy.repo,
      token: config.deploy.token,
    })
  }
}

export const blogInitCommander = () =>
  new Command('init')
    .addCommand(
      new Command('config')
        .description('初始化 .joplin-blog.json 配置')
        .action(() => new InitConfigProgram().main()),
    )
    .addCommand(
      new Command('hexo')
        .description('初始化 hexo 博客目录')
        .option('-d, --dir <path>', '初始化 hexo 的目录，默认为当前目录', '.')
        .action(async (options: { dir?: string }) => {
          await new InitHexoProjectProgram(
            new HexoInstance({
              rootPath: options.dir || '.',
            }),
          ).main()
        }),
    )
    .description('一些相关的初始化动作')

export const blogDeployCommander = () =>
  new Command('deploy')
    .description('部署 hexo 项目打包后的静态资源到 GitHub Pages')
    .action(() => new DeployStaticProgram().main())
