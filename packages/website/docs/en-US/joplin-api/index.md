# Joplin API

> [API Documentation](https://joplin-utils.rxliuli.com/api/joplin-api/), [Official Joplin Documentation](https://joplinapp.org/api/references/rest_api/)

## Introduction

A JavaScript wrapper for the Joplin API written in TypeScript. It provides complete type definitions and covers all currently documented APIs.

## Quick Start

```ts
import { config, noteApi } from 'joplin-api'

config.baseUrl = 'http://127.0.0.1:27583'
config.token = '***'
const res = await noteApi.list()
console.log(res)
```

> More examples can be found at: <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API Reference

| Object              | Description                                                                    |
| ------------------- | ------------------------------------------------------------------------------ |
| `eventApi`          | Event-related API, such as fetching note revision history                      |
| `folderApi`         | Folder-related API, such as retrieving the folder tree                         |
| `folderExtApi`      | Folder extension API, such as moving folders                                   |
| `joplinApi`         | Basic Joplin API, such as checking if the Joplin web service is running        |
| `noteActionApi`     | Note action API, such as opening notes in an external editor                   |
| `noteApi`           | Note-related API, such as fetching the content of notes                        |
| `noteExtApi`        | Note extension API, such as renaming notes                                     |
| `resourceActionApi` | Resource action API, such as opening attachments in an external editor         |
| `resourceApi`       | Resource-related API, such as uploading images                                 |
| `searchApi`         | Search-related API                                                             |
| `tagApi`            | Tag-related API, such as modifying note tags                                   |
| `config`            | Global Joplin web clipper configuration                                        |
| `PageUtil`          | Static utility class for pagination, such as retrieving the full list of notes |

## Conventions

- The API is wrapped in classes, such as note-related APIs being encapsulated in the `NoteApi` class.
- The same functionality has consistent naming. For instance, the note list is `NoteApi.list`. Here is the full comparison table:

| Function  | Naming   | Example          |
| --------- | -------- | ---------------- |
| List      | `list`   | `noteApi.list`   |
| Get by ID | `get`    | `noteApi.get`    |
| Create    | `create` | `noteApi.create` |
| Update    | `update` | `noteApi.update` |
| Delete    | `remove` | `noteApi.remove` |

- There are some special cases. For example, in APIs involving multiple entities, the naming is generally `actionEntity + by + referenceEntity`. For example, the API for getting the tag list by note ID is `noteApi.tagsById`.

## Some Issues

- The `get` method should not throw an error. If an item does not exist, it should return `null` instead of throwing an exception.
