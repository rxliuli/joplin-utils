# 更新记录

## 0.5.1

- docs: 更新 readme
- fix: 修复 joplin-api 生成和部署文档
- fix: 修复上传文件时没有指定文件名会导致 mime 错误的问题

## 0.5.0

- feat: 更新依赖的 nodejs 为 18，不再包含 fetch/FormData 的 polyfill
- feat: 更新使用 nodejs 18 并修复无法请求 localhost 的问题
- feat: 添加将 Buffer 上传到 joplin 的示例
- refactor: 重构单元测试
- feat: 升级 joplin-api，不再依赖 node-fetch/form-data，由外部自行填充
- feat: 修复 joplin-api/joplin-blog 中的错误
- feat: 基本 esm 迁移
- feat: 实现侧边栏的拖拽功能

## 0.3.3

- fix: 修复 NoteActionApi/ResourceActionApi 类型定义错误

## 0.3.2

- fix: 修复 ResourceApi.update 类型定义错误
- fix: 修复 joplin-api/joplin-plugin-api homepage 配置错误的问题
- refactor: 使用 joplin.data api 替代 joplin api（主要是为了处理文件上传的问题）
- docs: 更新 api 文档发布位置，避免与手动编写的文档冲突
- fix: 修复 postFormData 时 fetch/FormData 不存在的问题
- docs: 将 joplin-api/joplin-plugin-api 的文档均生成 html 作为在线文档，整合文档中仅包含链接
- fix: 修复 joplin-api 创建资源类型定义的问题（应该允许指定标题之外的其他元数据）
- fix: 修复 tagApi.notesByTagId 的类型错误
- chore: 更新文档发布相关的脚本
- chore: 删除 joplin-api 的 prettier 配置及相关依赖，使用根目录统一的 @liuli-util/prettier 配置包
- build: 修复 resource api 直接引入了 FormData 的问题

## 0.3.1

- chore: 删除无关的依赖，修复一些小问题
- docs: 修复引用的 joplin 官方 api 文档链接失效的错误
- chore: 将 lerna 替换为 yarn 2
- chore: 更新依赖项 @liuli-util/cli 和 @liuli-util/shell
- docs: 修正 joplin api 测试参考链接为新仓库
- chore: 使用 @liuli-util/shell 替换 shx
- refactor: 升级 @liuli-util/cli，使用 ts 配置文件
- refactor: 升级 @liuli-util/cli，使用 defineConfig 替代 define 辅助函数
- refactor: 升级 @liuli-util/cli，使用 define 辅助函数
- chore: 升级 @liuli-util/cli
- refactor: 使用 `import().default` 加载 `node-fetch` 的默认导出
- refactor: 使用 import() 动态引入 polyfill 避免必然加载
- chore: 将 ts 编译目标设置为 es2015 以使用 import()，修改 jest 运行时环境为 node（而非默认的 jsdom）
- fix: 修复在 vite 中直接使用 `import 'node-fetch'` 引发的依赖找不到的错误（明明在 webpack 可以自动处理掉的）
- fix: 修复 joplin-api 的 module 引用文件名错误的问题
- refactor: 修改暴露的 config 变量的类型定义为 Config
- docs: 修改因为仓库变动需要变更的链接
- build: 修复迁移过来的子模块的基本打包问题
- build: 移动 joplin-api 模块到 libs/joplin-api 目录并且删除 yarn.lock

## 0.3.0

- test: 禁用掉测试将父目录指向子级的作死行为
- fix: 修复 JoplinApiGenerator 导出的对象方法没有绑定 this 的问题（主要因为需要 this.ajax）
- fix: 修复 ajax.request 函数读取错误的 config 的问题
- build: 删除 wallaby 配置文件，该项目不适合使用所见即所得测试，因为会产生副作用（数据库）
- build: 将中文 README 重命名为大写下划线风格
- build: 将 jest 单独的配置文件删除出去
- refactor: 将 api 重构为支持生成所有的 api 对象的方式，同时兼容之前的全局配置模式
- build: 将 docs npm script 暴露出来以供 ci 使用
- build: 添加 GitHub Actions 自动发布 npm 包

## 0.2.7

- build: 修改 jest 测试启动器，将 joplin token 从环境变量读取
- test: 修复一些单元测试的错误（仍遗留 4 个）

## 0.2.6

- fix: 修复 joplin `searchApi.search` 与 `PageUtil.pageToAllList` 不能同时使用的错误
  ref: https://github.com/rxliuli/joplin-api/issues/4

## 0.2.5

- 修复打包后 dist 目录不存在的错误

## 0.2.4

- 修正开发时依赖 `shx` 被声明到 dependencies 的错误

## 0.2.3

- 修正 `noteApi.resourcesById` 的类型，添加 fields 参数

## 0.2.2

- 修复 `noteApi.get` 返回类型中没有声明 `type_` 字段的错误
