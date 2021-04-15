# 更新记录

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
