[joplin-api](../README.md) / [Exports](../modules.md) / [api/NoteApi](../modules/api_NoteApi.md) / NoteApi

# Class: NoteApi

[api/NoteApi](../modules/api_NoteApi.md).NoteApi

TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例

## Table of contents

### Constructors

- [constructor](api_NoteApi.NoteApi.md#constructor)

### Methods

- [create](api_NoteApi.NoteApi.md#create)
- [get](api_NoteApi.NoteApi.md#get)
- [list](api_NoteApi.NoteApi.md#list)
- [remove](api_NoteApi.NoteApi.md#remove)
- [resourcesById](api_NoteApi.NoteApi.md#resourcesbyid)
- [tagsById](api_NoteApi.NoteApi.md#tagsbyid)
- [update](api_NoteApi.NoteApi.md#update)

## Constructors

### constructor

• **new NoteApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/NoteApi.ts:20](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L20)

## Methods

### create

▸ **create**(`param`): `Promise`<[`NoteCreateRes`](../modules/modal_NoteCreateRes.md#notecreateres)\>

#### Parameters

| Name    | Type                                                                                                                                                                 |
| :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | [`RequiredField`](../modules/types_RequiredFiled.md#requiredfield)<`Partial`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\>, `"title"`\> |

#### Returns

`Promise`<[`NoteCreateRes`](../modules/modal_NoteCreateRes.md#notecreateres)\>

#### Defined in

[api/NoteApi.ts:44](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L44)

---

### get

▸ **get**(`id`): `Promise`<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres) & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres) & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

#### Defined in

[api/NoteApi.ts:32](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L32)

▸ **get**<`K`\>(`id`, `fields?`): `Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

#### Type parameters

| Name | Type                                                                                                                       |
| :--- | :------------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)`"id"` \| `"parent_id"` \| `"title"` |

#### Parameters

| Name      | Type     |
| :-------- | :------- |
| `id`      | `string` |
| `fields?` | `K`[]    |

#### Returns

`Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

#### Defined in

[api/NoteApi.ts:33](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L33)

---

### list

▸ **list**(): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)\>\>

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`NoteGetRes`](../modules/modal_NoteGetRes.md#notegetres)\>\>

#### Defined in

[api/NoteApi.ts:22](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L22)

▸ **list**<`K`\>(`pageParam`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\>\>\>

#### Type parameters

| Name | Type                                                                                                                       |
| :--- | :------------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)`"id"` \| `"parent_id"` \| `"title"` |

#### Parameters

| Name        | Type                                                                                                                                                                                                        |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageParam` | [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\>\>\>

#### Defined in

[api/NoteApi.ts:23](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L23)

---

### remove

▸ **remove**(`id`): `Promise`<`void`\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/NoteApi.ts:57](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L57)

---

### resourcesById

▸ **resourcesById**(`id`): `Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)[]\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)[]\>

#### Defined in

[api/NoteApi.ts:69](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L69)

▸ **resourcesById**<`K`\>(`id`, `fields`): `Promise`<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)[]\>

#### Type parameters

| Name | Type                                                                                                                  |
| :--- | :-------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md)`"id"` \| `"title"` |

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `id`     | `string` |
| `fields` | `K`[]    |

#### Returns

`Promise`<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)[]\>

#### Defined in

[api/NoteApi.ts:70](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L70)

---

### tagsById

▸ **tagsById**(`id`): `Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)[]\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`TagGetRes`](../modules/modal_TagGetRes.md#taggetres)[]\>

#### Defined in

[api/NoteApi.ts:61](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L61)

---

### update

▸ **update**(`param`): `Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

#### Parameters

| Name    | Type                                                                                                                                                              |
| :------ | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | [`RequiredField`](../modules/types_RequiredFiled.md#requiredfield)<`Partial`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\>, `"id"`\> |

#### Returns

`Promise`<[`NoteUpdateRes`](../modules/modal_NoteUpdateRes.md#noteupdateres)\>

#### Defined in

[api/NoteApi.ts:50](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/NoteApi.ts#L50)
