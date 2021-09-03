[joplin-api](../README.md) / [Exports](../modules.md) / [api/TagApi](../modules/api_TagApi.md) / TagApi

# Class: TagApi

[api/TagApi](../modules/api_TagApi.md).TagApi

## Table of contents

### Constructors

- [constructor](api_TagApi.TagApi.md#constructor)

### Methods

- [addTagByNoteId](api_TagApi.TagApi.md#addtagbynoteid)
- [create](api_TagApi.TagApi.md#create)
- [get](api_TagApi.TagApi.md#get)
- [list](api_TagApi.TagApi.md#list)
- [notesByTagId](api_TagApi.TagApi.md#notesbytagid)
- [remove](api_TagApi.TagApi.md#remove)
- [removeTagByNoteId](api_TagApi.TagApi.md#removetagbynoteid)
- [update](api_TagApi.TagApi.md#update)

## Constructors

### constructor

• **new TagApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/TagApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L10)

## Methods

### addTagByNoteId

▸ **addTagByNoteId**(`tagId`, `noteId`): `Promise`<`null` \| [`NoteTagRelated`](../modules/modal_NoteTagRelated.md#notetagrelated)\>

Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `tagId`  | `string` |
| `noteId` | `string` |

#### Returns

`Promise`<`null` \| [`NoteTagRelated`](../modules/modal_NoteTagRelated.md#notetagrelated)\>

#### Defined in

[api/TagApi.ts:51](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L51)

---

### create

▸ **create**(`param`): `Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Parameters

| Name    | Type                                                                                         |
| :------ | :------------------------------------------------------------------------------------------- |
| `param` | `Pick`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md), `"title"`\> |

#### Returns

`Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Defined in

[api/TagApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L26)

---

### get

▸ **get**(`id`): `Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Defined in

[api/TagApi.ts:22](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L22)

---

### list

▸ **list**(): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>\>

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>\>

#### Defined in

[api/TagApi.ts:12](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L12)

▸ **list**<`K`\>(`pageParam`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md), `K`\>\>\>

#### Type parameters

| Name | Type                                                                                   |
| :--- | :------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md) |

#### Parameters

| Name        | Type                                                                                                                                                                                                        |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageParam` | [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md), `K`\>\>\>

#### Defined in

[api/TagApi.ts:13](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L13)

---

### notesByTagId

▸ **notesByTagId**(`__namedParameters`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)\>\>

#### Parameters

| Name                | Type                                                                                                                                                     |
| :------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `__namedParameters` | { `id`: `string` } & [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md)\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)\>\>

#### Defined in

[api/TagApi.ts:39](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L39)

---

### remove

▸ **remove**(`id`): `Promise`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md)\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md)\>

#### Defined in

[api/TagApi.ts:35](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L35)

---

### removeTagByNoteId

▸ **removeTagByNoteId**(`tagId`, `noteId`): `Promise`<`void`\>

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `tagId`  | `string` |
| `noteId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/TagApi.ts:63](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L63)

---

### update

▸ **update**(`param`): `Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Parameters

| Name    | Type                                                                                                   |
| :------ | :----------------------------------------------------------------------------------------------------- |
| `param` | `Pick`<[`BaseProperties`](../interfaces/modal_BaseProperties.BaseProperties.md), `"id"` \| `"title"`\> |

#### Returns

`Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)\>

#### Defined in

[api/TagApi.ts:30](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/TagApi.ts#L30)
