# 参与项目

## 如何贡献

主要分为两方面

- 开发
  - 实现未完成的功能
  - 提出新的 idea 并实现
- 非开发
  - 帮助翻译文档、国际化的配置文件
  - 编写 vscode 与 joplin 的结合文档
  - 编写参与开发的文档

## 环境要求

- nodejs >= v12
- joplin >= v1.4
- yarn

## 启动项目

1. 使用 vscode 打开项目
2. 修改 _.vscode/launch.json_ 配置，修改以下配置项
   > 个人建议同时启动 joplin electron 项目，避免在真实的个人笔记上进行测试，插件可能错误的破坏真实笔记。
   - `configurations/env`
     - `JOPLIN_TOKEN`
     - `JOPLIN_PORT`
3. 使用 `yarn watch` 启动 tsc 监视模式
4. 使用 `F5` 运行调试模式

## 项目结构

- `docs`: joplin 在线文档
- `resources`: 图标资源
- `src`: 源代码
  - `api`: 一些 `joplin-api` 中目前不存在的功能增强
  - `config`: 插件配置相关处理
  - `model`: 提供 view 的 `NodePrivider` 实现类
  - `service`: 一些其他的服务实现
  - `util`: 通用工具代码
- `package.nls*.json`: 国际化配置文件
