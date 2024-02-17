# joplin api

> [API Documentation](https://joplin-utils.rxliuli.com/api/joplin-api/), [Joplin Official Documentation](https://joplinapp.org/api/references/rest_api/)

## Introduction

The js wrapper for Joplin api, written in ts, provides a complete type definition, incorporating all currently publicly documented apis.

## Quickstart

```ts
import { config, noteApi } from 'joplin-api'

config.baseUrl = 'http://127.0.0.1:27583'
config.token = '***'
const res = await noteApi.list()
console.log(res)
```

> For more examples, refer to <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API Reference

| Object              | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| `eventApi`          | Event-related apis, such as obtaining note modification history                 |
| `folderApi`         | Directory related apis, such as fetching directory tree                         |
| `folderExtApi`      | Directory extension api, such as moving directories                             |
| `joplinApi`         | Basic joplin api, for example, check if joplin web service is running           |
| `noteActionApi`     | Note-related action apis, such as opening notes in an external editor           |
| `noteApi`           | Note-related api, such as obtaining the content of notes                        |
| `noteExtApi`        | Note extension api, such as renaming                                            |
| `resourceActionApi` | Resource action apis, such as opening attached resources in an external editor  |
| `resourceApi`       | Resource related api, for example uploading pictures                            |
| `searchApi`         | Search-related api                                                              |
| `tagApi`            | Tag related api, such as modifying the tag of notes                             |
| `config`            | Global joplin web clipper configuration                                         |
| `PageUtil`          | Pagination related static utility class, such as obtaining a full list of notes |

## Naming Conventions

- Use class to encapsulate API, for example, the API related to note is encapsulated in the `NoteApi` class.
- The same functionality keeps a unified name, such as the note list is `NoteApi.list`. Here is the complete comparison table

| Implication | Naming   | Example          |
| ----------- | -------- | ---------------- |
| List        | `list`   | `noteApi.list`   |
| Get by id   | `get`    | `noteApi.get`    |
| Create      | `create` | `noteApi.create` |
| Update      | `update` | `noteApi.update` |
| Delete      | `remove` | `noteApi.remove` |

- There are some special cases, for example, api involving multiple entities, the naming is usually `operation entity + by + according to entity`, for example, the api of getting the tag list by note id is `noteApi.tagsById`

## Some Issues

- The `get` method should not error out, if it does not exist it should return `null` instead of throwing an exception
