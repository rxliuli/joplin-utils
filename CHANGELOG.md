# 更新记录

## v0.2.6 - 2021-04-14

- fix: 修复 joplin searchApi.search 与 PageUtil.pageToAllList 不能同时使用的错误 ref: https://github.com/rxliuli/joplin-api/issues/4

## v0.2.5 - 2021-03-07

- 修复打包后 dist 目录不存在的错误

## v0.2.4 - 2021-03-07

- 修正开发时依赖 shx 被声明到 dependencies 的错误

## v0.2.3 - 2020-12-25

- 修正 NoteApi.resourcesById 的类型，添加 fields 参数

## v0.2.2 - 2020-12-21

- 修复 noteApi.get 返回类型中没有声明 type_ 字段的错误
