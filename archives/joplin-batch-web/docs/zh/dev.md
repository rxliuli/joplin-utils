# 参与项目

## 如何贡献

主要分为两方面

- 开发
  - 实现未完成的功能
  - 提出新的 idea 并实现
- 非开发
  - 帮助翻译文档、国际化的配置文件
  - 编写参与开发的文档
  - 发现问题并在 issue 中提出

## 环境要求

- nodejs >= v12
- joplin >= v1.4
- yarn

## 启动项目

1. 在项目根目录运行 `yarn setup` 命令
2. 导航到 _cd apps/joplin-batch-web_
3. 运行 `yarn dev` 命令启动本地开发环境

## 项目结构

- `docs`: 一些文档
- `src`: 源代码
  - `@types`: 扩展类型定义
  - `common`: 通用工具代码
  - `constants`: 项目中的常量
  - `i18n`: 国际化的配置文件
  - `pages`: 页面组件
    - `*`
      - `index.ts`: 路由页面入口
      - `*Page.tsx`: 页面级组件
      - `service`: 一些可以抽离出来的逻辑代码
