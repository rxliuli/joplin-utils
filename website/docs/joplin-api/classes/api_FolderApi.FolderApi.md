[joplin-api](../README.md) / [Exports](../modules.md) / [api/FolderApi](../modules/api_FolderApi.md) / FolderApi

# Class: FolderApi

[api/FolderApi](../modules/api_FolderApi.md).FolderApi

目录相关 api

## Table of contents

### Constructors

- [constructor](api_FolderApi.FolderApi.md#constructor)

### Methods

- [create](api_FolderApi.FolderApi.md#create)
- [get](api_FolderApi.FolderApi.md#get)
- [list](api_FolderApi.FolderApi.md#list)
- [listAll](api_FolderApi.FolderApi.md#listall)
- [notesByFolderId](api_FolderApi.FolderApi.md#notesbyfolderid)
- [remove](api_FolderApi.FolderApi.md#remove)
- [update](api_FolderApi.FolderApi.md#update)

## Constructors

### constructor

• **new FolderApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/FolderApi.ts:21](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L21)

## Methods

### create

▸ **create**(`param`): `Promise`<[`FolderCreateRes`](../modules/modal_FolderCreateRes.md#foldercreateres)\>

#### Parameters

| Name    | Type                                                                                                                                                                       |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | [`RequiredField`](../modules/types_RequiredFiled.md#requiredfield)<`Partial`<[`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md)\>, `"title"`\> |

#### Returns

`Promise`<[`FolderCreateRes`](../modules/modal_FolderCreateRes.md#foldercreateres)\>

#### Defined in

[api/FolderApi.ts:47](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L47)

---

### get

▸ **get**(`id`): `Promise`<[`FolderGetRes`](../modules/modal_FolderGetRes.md#foldergetres)\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`FolderGetRes`](../modules/modal_FolderGetRes.md#foldergetres)\>

#### Defined in

[api/FolderApi.ts:43](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L43)

---

### list

▸ **list**(): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`FolderListRes`](../modules/modal_FolderListRes.md#folderlistres)\>\>

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`FolderListRes`](../modules/modal_FolderListRes.md#folderlistres)\>\>

#### Defined in

[api/FolderApi.ts:23](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L23)

▸ **list**<`K`\>(`pageParam`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md), `K`\>\>\>

#### Type parameters

| Name | Type                                                                                                                             |
| :--- | :------------------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md)`"id"` \| `"parent_id"` \| `"title"` |

#### Parameters

| Name        | Type                                                                                                                                                                                                              |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageParam` | [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md), `K`\>\>\>

#### Defined in

[api/FolderApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L24)

---

### listAll

▸ **listAll**(): `Promise`<[`FolderListAllRes`](../modules/modal_FolderListAllRes.md#folderlistallres)[]\>

使用特殊的 as_tree 参数来恢复旧的行为

#### Returns

`Promise`<[`FolderListAllRes`](../modules/modal_FolderListAllRes.md#folderlistallres)[]\>

#### Defined in

[api/FolderApi.ts:37](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L37)

---

### notesByFolderId

▸ **notesByFolderId**(`id`): `Promise`<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)[]\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)[]\>

#### Defined in

[api/FolderApi.ts:64](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L64)

▸ **notesByFolderId**<`K`\>(`id`, `fields`): `Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\>[]\>

#### Type parameters

| Name | Type                                                                                                                       |
| :--- | :------------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)`"id"` \| `"parent_id"` \| `"title"` |

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `id`     | `string` |
| `fields` | `K`[]    |

#### Returns

`Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\>[]\>

#### Defined in

[api/FolderApi.ts:65](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L65)

---

### remove

▸ **remove**(`id`): `Promise`<`string`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[api/FolderApi.ts:60](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L60)

---

### update

▸ **update**(`param`): `Promise`<[`FolderUpdateRes`](../modules/modal_FolderUpdateRes.md#folderupdateres)\>

#### Parameters

| Name    | Type                                                                                                                                                                    |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | [`RequiredField`](../modules/types_RequiredFiled.md#requiredfield)<`Partial`<[`FolderProperties`](../interfaces/modal_FolderProperties.FolderProperties.md)\>, `"id"`\> |

#### Returns

`Promise`<[`FolderUpdateRes`](../modules/modal_FolderUpdateRes.md#folderupdateres)\>

#### Defined in

[api/FolderApi.ts:53](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/FolderApi.ts#L53)
