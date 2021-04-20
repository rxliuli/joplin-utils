import path from 'path'
import git from 'isomorphic-git'
import http from 'isomorphic-git/http/node'
import * as fs from 'fs'
import { ProcessHook } from '../blog/Application'
import { installDeps } from './utils'

export interface HexoInstanceConfig {
  rootPath: string
}

export class HexoInstance {
  constructor(readonly config: HexoInstanceConfig) {
    this.config.rootPath = path.resolve(this.config.rootPath)
    this.config = Object.freeze(this.config)
  }

  static readonly remoteUrl = 'https://github.com/rxliuli/hexo-starter'

  /**
   * 初始化一个 hexo 项目
   */
  async init(onProcess: ProcessHook) {
    await git.clone({
      url: HexoInstance.remoteUrl,
      dir: this.config.rootPath,
      fs,
      http,
      onProgress: (info) =>
        onProcess({
          title: info.phase,
          rate: info.loaded,
          all: info.total,
        }),
    })
  }

  /**
   * 检查是否为 hexo 项目
   */
  // async check() {
  //   const rootPath = this.config.rootPath
  //   const pkgJsonPath = path.resolve(rootPath, 'package.json')
  //   const configPath = path.resolve(rootPath, '_config.yml')
  //   if (
  //     (await AsyncArray.map([pkgJsonPath, configPath], pathExists)).includes(
  //       false,
  //     )
  //   ) {
  //     return false
  //   }
  //   const pkgJson = await readJson(pkgJsonPath)
  //   return pkgJson.hexo
  // }

  async installDeps() {
    await installDeps(this.config.rootPath)
  }
}
