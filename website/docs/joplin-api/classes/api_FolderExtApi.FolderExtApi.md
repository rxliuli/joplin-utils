[joplin-api](../README.md) / [Exports](../modules.md) / [api/FolderExtApi](../modules/api_FolderExtApi.md) / FolderExtApi

# Class: FolderExtApi

[api/FolderExtApi](../modules/api_FolderExtApi.md).FolderExtApi

## Table of contents

### Constructors

- [constructor](api_FolderExtApi.FolderExtApi.md#constructor)

### Properties

- [folderApi](api_FolderExtApi.FolderExtApi.md#folderapi)

### Methods

- [move](api_FolderExtApi.FolderExtApi.md#move)
- [path](api_FolderExtApi.FolderExtApi.md#path)
- [rename](api_FolderExtApi.FolderExtApi.md#rename)

## Constructors

### constructor

• **new FolderExtApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/FolderExtApi.ts:9](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderExtApi.ts#L9)

## Properties

### folderApi

• `Private` **folderApi**: [`FolderApi`](api_FolderApi.FolderApi.md)

#### Defined in

[api/FolderExtApi.ts:7](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderExtApi.ts#L7)

## Methods

### move

▸ **move**(`id`, `parentId`): `Promise`<`void`\>

将目录移动到另一个目录中

#### Parameters

| Name       | Type     |
| :--------- | :------- |
| `id`       | `string` |
| `parentId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/FolderExtApi.ts:40](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderExtApi.ts#L40)

---

### path

▸ **path**(`id`): `Promise`<[`FolderGetRes`](../modules/modal_FolderGetRes.md#foldergetres)[]\>

获取一个目录的路径目录列表

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`FolderGetRes`](../modules/modal_FolderGetRes.md#foldergetres)[]\>

#### Defined in

[api/FolderExtApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderExtApi.ts#L24)

---

### rename

▸ **rename**(`id`, `title`): `Promise`<[`FolderUpdateRes`](../modules/modal_FolderUpdateRes.md#folderupdateres)\>

重命名目录

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `id`    | `string` |
| `title` | `string` |

#### Returns

`Promise`<[`FolderUpdateRes`](../modules/modal_FolderUpdateRes.md#folderupdateres)\>

#### Defined in

[api/FolderExtApi.ts:16](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderExtApi.ts#L16)
