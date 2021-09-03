[joplin-api](../README.md) / [Exports](../modules.md) / [api/NoteExtApi](../modules/api_NoteExtApi.md) / NoteExtApi

# Class: NoteExtApi

[api/NoteExtApi](../modules/api_NoteExtApi.md).NoteExtApi

## Table of contents

### Constructors

- [constructor](api_NoteExtApi.NoteExtApi.md#constructor)

### Properties

- [noteApi](api_NoteExtApi.NoteExtApi.md#noteapi)

### Methods

- [move](api_NoteExtApi.NoteExtApi.md#move)
- [rename](api_NoteExtApi.NoteExtApi.md#rename)
- [toggleTodo](api_NoteExtApi.NoteExtApi.md#toggletodo)

## Constructors

### constructor

• **new NoteExtApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/NoteExtApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteExtApi.ts#L10)

## Properties

### noteApi

• `Private` **noteApi**: [`NoteApi`](api_NoteApi.NoteApi.md)

#### Defined in

[api/NoteExtApi.ts:8](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteExtApi.ts#L8)

## Methods

### move

▸ **move**(`id`, `parentId`): `Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

将笔记移动到指定目录

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `id`       | `string` |
| `parentId` | `string` |

#### Returns

`Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

#### Defined in

[api/NoteExtApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteExtApi.ts#L26)

---

### rename

▸ **rename**(`id`, `title`): `Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

重命名笔记

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `id`    | `string` |
| `title` | `string` |

#### Returns

`Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

#### Defined in

[api/NoteExtApi.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteExtApi.ts#L17)

---

### toggleTodo

▸ **toggleTodo**(`id`, `completed?`): `Promise`<`void`\>

切换 to-do 的状态

#### Parameters

| Name         | Type                                             |
| :----------- | :----------------------------------------------- |
| `id`         | `string`                                         |
| `completed?` | [`IntBool`](../modules/types_IntBool.md#intbool) |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteExtApi.ts:35](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteExtApi.ts#L35)
