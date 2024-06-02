# Joplin API

## 介绍

Joplin data API 的 JavaScript 封装，使用 TypeScript 编写，提供完整的类型定义，包含目前所有在文档中公开的 api。

## 使用

```ts
import { joplinDataApi } from 'joplin-api'

const api = joplinDataApi({
  type: 'rest',
  baseUrl: 'http://127.0.0.1:27583',
  token: '***',
})
// or in plugin
const api = joplinDataApi({
  type: 'plugin',
})

const res = await api.note.list()
console.log(res)
```

> 更多示例参考: <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API 参考

| 对象                 | 描述                                              |
| -------------------- | ------------------------------------------------- |
| `api.event`          | 事件相关的 api，例如获取笔记修改历史              |
| `api.folder`         | 目录相关 api，例如获取目录树                      |
| `api.folderExt`      | 目录扩展 api，例如移动目录                        |
| `api.joplin`         | joplin 基础 api，例如检查 joplin web 服务是否打开 |
| `api.noteAction`     | 笔记相关动作 api，例如在外部编辑器打开笔记        |
| `api.note`           | 笔记相关 api，例如获取笔记的内容                  |
| `api.noteExt`        | 笔记扩展 api，例如重命名                          |
| `api.resourceAction` | 资源动作 api，例如在外部编辑器打开附件资源        |
| `api.resource`       | 资源相关 api，例如上传图片                        |
| `api.search`         | 搜索相关 api                                      |
| `api.tag`            | 标签相关 api，例如修改笔记的标签                  |
| `PageUtil`           | 分页相关的静态工具类，例如获取全量笔记列表        |

> [API 文档](https://joplin-utils.rxliuli.com/api/joplin-api/)
