# joplin api

> [在线 API 文档](https://rxliuli.com/joplin-api), [参考 Joplin API 文档](https://joplinapp.org/api/)

## 简介

Joplin api 的 js 封装，使用 ts 编写，提供完整的类型定义，包含目前所有在文档中公开的 api。

## 快速启动

```ts
config.port = 27583
config.token = '***'
const res = await noteApi.list()
console.log(res)
```

> 更多示例参考: <https://github.com/rxliuli/joplin-api/tree/master/test>

## API 参考

| 对象                | 描述                                              |
| ------------------- | ------------------------------------------------- |
| `folderApi`         | 目录相关 api，例如获取目录树                      |
| `folderExtApi`      | 目录扩展 api，例如移动目录                        |
| `joplinApi`         | joplin 基础 api，例如检查 joplin web 服务是否打开 |
| `noteActionApi`     | 笔记相关动作 api，例如在外部编辑器打开笔记        |
| `noteApi`           | 笔记相关 api，例如获取笔记的内容                  |
| `noteExtApi`        | 笔记扩展 api，例如重命名                          |
| `resourceActionApi` | 资源动作 api，例如在外部编辑器打开附件资源        |
| `resourceApi`       | 资源相关 api，例如上传图片                        |
| `searchApi`         | 搜索相关 api                                      |
| `tagApi`            | 标签相关 api，例如修改笔记的标签                  |
| `config`            | 全局 joplin web clipper 配置                      |
| `PageUtil`          | 分页相关的静态工具类，例如获取全量笔记列表        |

## 约定俗称

- 使用 class 封装 API，例如 note 相关的 API 被封装在 `NoteApi` 类中。
- 同一个功能含义保持统一的命名。例如笔记列表是 `NoteApi.list`。以下为完整对照表

| 含义         | 命名     | 示例             |
| ------------ | -------- | ---------------- |
| 列表         | `list`   | `noteApi.list`   |
| 根据 id 获取 | `get`    | `noteApi.get`    |
| 创建         | `create` | `noteApi.create` |
| 修改         | `update` | `noteApi.update` |
| 删除         | `remove` | `noteApi.remove` |

- 存在一些特殊情况，例如涉及到多个实体的 api，命名则一般是 `操作实体 + by + 依据实体`，例如 根据笔记 id 获取标签列表的 api 是 `noteApi.tagsById`

## 一些问题

- `get` 方法不应该报错，如果不存在应该返回 `null` 而非抛出异常
- 缺少常见的 `rename/move` 函数，而只有更加通用的 `update`

## 其他

两种方式

1. 全局配置
2. 生成新的实例
