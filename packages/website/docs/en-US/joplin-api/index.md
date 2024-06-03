# Joplin API

## Introduction

TypeScript encapsulation of the Joplin data API for use in both plugins and standalone applications.

## Usage

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

> For more examples, refer to: <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API Reference

| Object               | Description                                                               |
| -------------------- | ------------------------------------------------------------------------- |
| `api.event`          | Event-related API, such as getting note modification history              |
| `api.folder`         | Folder-related API, such as getting the directory tree                    |
| `api.folderExt`      | Folder extension API, such as moving directories                          |
| `api.joplin`         | Basic Joplin API, such as checking if Joplin web service is open          |
| `api.noteAction`     | Note action related API, such as opening notes in an external editor      |
| `api.note`           | Note-related API, such as getting note content                            |
| `api.noteExt`        | Note extension API, such as renaming notes                                |
| `api.resourceAction` | Resource action API, such as opening resources in an external editor      |
| `api.resource`       | Resource-related API, such as uploading images                            |
| `api.search`         | Search-related API                                                        |
| `api.tag`            | Tag-related API, such as modifying note tags                              |
| `PageUtil`           | Static utility class for pagination, such as getting a full list of notes |

> [API Documentation](https://joplin-utils.rxliuli.com/api/joplin-api/)
