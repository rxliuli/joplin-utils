# Joplin API

## Introduction

JavaScript wrapper for the Joplin data API, written in TypeScript, providing complete type definitions, including all currently publicly documented APIs.

## Usage

```ts
import { joplinDataApi } from 'joplin-api'

const api = joplinDataApi({
  type: 'rest',
  baseUrl: 'http://127.0.0.1:27583',
  token: '***',
})
// Or in plugin
const api = joplinDataApi({
  type: 'plugin',
})

const res = await api.note.list()
console.log(res)
```

> For more examples, refer to: <https://github.com/rxliuli/joplin-utils/tree/master/packages/joplin-api/src/api/__tests__>

## API Reference

| Object               | Description                                                            |
| -------------------- | ---------------------------------------------------------------------- |
| `api.event`          | Event-related API, e.g., get note modification history                 |
| `api.folder`         | Folder-related API, e.g., obtain folder tree                           |
| `api.folderExt`      | Extended folder API, e.g., move folder                                 |
| `api.joplin`         | Basic joplin API, e.g., check if joplin web service is open            |
| `api.noteAction`     | Note action API, e.g., open note in external editor                    |
| `api.note`           | Note-related API, e.g., get note content                               |
| `api.noteExt`        | Extended note API, e.g., rename                                        |
| `api.resourceAction` | Resource action API, e.g., open attachment resource in external editor |
| `api.resource`       | Resource-related API, e.g., upload image                               |
| `api.search`         | Search-related API                                                     |
| `api.tag`            | Tag-related API, e.g., modify note tags                                |
| `PageUtil`           | Static pagination utility class, e.g., get the full list of notes      |

> [API Documentation](https://joplin-utils.rxliuli.com/api/joplin-api/)
