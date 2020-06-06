# joplin api

> [参考 API 文档](https://joplinapp.org/api/)

## 简介

Joplin api 的 js 封装，使用 ts 编写，提供完整的类型定义，包含目前所有在文档中公开的 api。

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
