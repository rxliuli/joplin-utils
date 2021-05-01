# 更新记录

## v0.3.0

- test: 禁用掉测试将父目录指向子级的作死行为
- fix: 修复 JoplinApiGenerator 导出的对象方法没有绑定 this 的问题（主要因为需要 this.ajax）
- fix: 修复 ajax.request 函数读取错误的 config 的问题
- build: 删除 wallaby 配置文件，该项目不适合使用所见即所得测试，因为会产生副作用（数据库）
- build: 将中文 README 重命名为大写下划线风格
- build: 将 jest 单独的配置文件删除出去
- refactor: 将 api 重构为支持生成所有的 api 对象的方式，同时兼容之前的全局配置模式
- build: 将 docs npm script 暴露出来以供 ci 使用
- build: 添加 GitHub Actions 自动发布 npm 包

## v0.2.7

- build: 修改 jest 测试启动器，将 joplin token 从环境变量读取
- test: 修复一些单元测试的错误（仍遗留 4 个）

## v0.2.6

- fix: 修复 joplin `searchApi.search` 与 `PageUtil.pageToAllList` 不能同时使用的错误
  ref: https://github.com/rxliuli/joplin-api/issues/4

## v0.2.5

- 修复打包后 dist 目录不存在的错误

## v0.2.4

- 修正开发时依赖 `shx` 被声明到 dependencies 的错误

## v0.2.3

- 修正 `noteApi.resourcesById` 的类型，添加 fields 参数

## v0.2.2

- 修复 `noteApi.get` 返回类型中没有声明 `type_` 字段的错误
