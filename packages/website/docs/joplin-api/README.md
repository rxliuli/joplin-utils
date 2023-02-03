# joplin api

> [API documentation](https://joplin-utils.rxliuli.com/api/joplin-api/), [Joplin official document](https://joplinapp.org/api/references/rest_api/)

## Introduction

Joplin api's js package, written in ts, provides a complete type definition, including all currently exposed api in the
document.

## Quick Start

```ts
import { config, noteApi } from 'joplin-api'

config.baseUrl = 'http://127.0.0.1:27583'
config.token = '***'
const res = await noteApi.list()
console.log(res)
```

> More examples reference: <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API Reference

| Object              | Description                                                                       |
| ------------------- | --------------------------------------------------------------------------------- |
| `eventApi`          | event-related api, such as getting note modification history                      |
| `folderApi`         | Directory-related api, such as getting directory tree                             |
| `folderExtApi`      | Directory extension api, such as mobile directory                                 |
| `joplinApi`         | joplin basic api, such as checking whether joplin web service is open             |
| `noteActionApi`     | Note-related action api, such as opening a note in an external editor             |
| `noteApi`           | Note related api, such as getting the content of the note                         |
| `noteExtApi`        | Note extension api, such as renaming                                              |
| `resourceActionApi` | Resource action api, such as opening an attachment resource in an external editor |
| `resourceApi`       | Resource-related api, such as uploading pictures                                  |
| `searchApi`         | Search related api                                                                |
| `tagApi`            | Tag related api, such as modifying the tag of a note                              |
| `config`            | Global joplin web clipper configuration                                           |
| `PageUtil`          | Paging-related static tools, such as getting the full list of notes               |

## Conventional name

- Use class to encapsulate API, for example note related API is encapsulated in `NoteApi` class.
- Keep the same naming for the same function meaning. For example, the note list is `NoteApi.list`. The following is a
  complete comparison table

| Meaning   | Naming   | Examples         |
| --------- | -------- | ---------------- |
| List      | `list`   | `noteApi.list`   |
| Get by id | `get`    | `noteApi.get`    |
| Create    | `create` | `noteApi.create` |
| Modify    | `update` | `noteApi.update` |
| Remove    | `remove` | `noteApi.remove` |

- There are some special cases, such as APIs involving multiple entities, the naming is
  generally `operation entity + by + according to entity`, for example, the API to get the tag list according to the
  note id is `noteApi.tagsById`
