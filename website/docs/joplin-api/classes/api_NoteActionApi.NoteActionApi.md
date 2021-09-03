[joplin-api](../README.md) / [Exports](../modules.md) / [api/NoteActionApi](../modules/api_NoteActionApi.md) / NoteActionApi

# Class: NoteActionApi

[api/NoteActionApi](../modules/api_NoteActionApi.md).NoteActionApi

## Table of contents

### Constructors

- [constructor](api_NoteActionApi.NoteActionApi.md#constructor)

### Methods

- [baseAction](api_NoteActionApi.NoteActionApi.md#baseaction)
- [isWatch](api_NoteActionApi.NoteActionApi.md#iswatch)
- [noteIsWatched](api_NoteActionApi.NoteActionApi.md#noteiswatched)
- [openAndWatch](api_NoteActionApi.NoteActionApi.md#openandwatch)
- [stopWatching](api_NoteActionApi.NoteActionApi.md#stopwatching)

## Constructors

### constructor

• **new NoteActionApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/NoteActionApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L10)

## Methods

### baseAction

▸ `Private` **baseAction**(`action`, `noteId`): `Promise`<`void`\>

#### Parameters

| Name     | Type         |
| :------- | :----------- |
| `action` | `ActionEnum` |
| `noteId` | `string`     |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteActionApi.ts:32](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L32)

---

### isWatch

▸ **isWatch**(`noteId`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `noteId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteActionApi.ts:28](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L28)

---

### noteIsWatched

▸ **noteIsWatched**(`noteId`): `Promise`<`void`\>

**`deprecated`** 已废弃，请使用 [isWatch](api_NoteActionApi.NoteActionApi.md#iswatch)

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `noteId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteActionApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L24)

---

### openAndWatch

▸ **openAndWatch**(`noteId`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `noteId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteActionApi.ts:12](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L12)

---

### stopWatching

▸ **stopWatching**(`noteId`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `noteId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteActionApi.ts:16](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteActionApi.ts#L16)
