# joplin api

> [Online API documentation](https://rxliuli.com/joplin-api), [Reference API documentation](https://joplinapp.org/api/)

## Introduction

Joplin api's js package, written in ts, provides a complete type definition, including all currently exposed api in the document.

## Conventional name

- Use class to encapsulate API, for example note related API is encapsulated in `NoteApi` class.
- Keep the same naming for the same function meaning. For example, the note list is `NoteApi.list`. The following is a complete comparison table

| Meaning   | Naming   | Examples         |
| --------- | -------- | ---------------- |
| List      | `list`   | `noteApi.list`   |
| Get by id | `get`    | `noteApi.get`    |
| Create    | `create` | `noteApi.create` |
| Modify    | `update` | `noteApi.update` |
| Remove    | `remove` | `noteApi.remove` |

- There are some special cases, such as APIs involving multiple entities, the naming is generally `operation entity + by + according to entity`, for example, the API to get the tag list according to the note id is `noteApi.tagsById`

## some problems

- The `get` method should not report an error, if it does not exist it should return `null` instead of throwing an exception
