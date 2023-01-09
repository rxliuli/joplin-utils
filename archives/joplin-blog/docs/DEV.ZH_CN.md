# 开发

## 环境要求

- nodejs >= v12
- joplin >= v1.4
- vscode
- 全局依赖: yarn, lerna

## 启动开发环境

下载并初始化

```sh
# 使用 git 克隆项目
git clone -b dev https://github.com/rxliuli/joplin-blog.git
# 安装依赖并初始化一些设置
yarn && yarn setup
```

启动一个测试

导航到 `apps/joplin-blog/src/blog/__tests__/Application.test.ts`，运行其中的单元测试，如果没有什么问题，将会在 `./temp` 目录下看到生成的文件。

> 注 1：其中的 token/port 需要在环境变量设置
> 注 2：无论如何，我都建议你启动[开发模式的 Joplin](https://joplinapp.org/api/references/development_mode/) 进行测试。

## 模块分割

- apps
  - joplin-blog: cli 核心
- examples
  - hexo-example: hexo 的示例博客项目
  - vuepress-example: vuepress 的示例博客项目
- libs
  - i18next-typescript-generator: i18next 的 typescript 类型定义生成器
