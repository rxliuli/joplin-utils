[joplin-api](../README.md) / [Exports](../modules.md) / [api/ResourceApi](../modules/api_ResourceApi.md) / ResourceApi

# Class: ResourceApi

[api/ResourceApi](../modules/api_ResourceApi.md).ResourceApi

附件资源相关 api

## Table of contents

### Constructors

- [constructor](api_ResourceApi.ResourceApi.md#constructor)

### Methods

- [create](api_ResourceApi.ResourceApi.md#create)
- [fileByResourceId](api_ResourceApi.ResourceApi.md#filebyresourceid)
- [get](api_ResourceApi.ResourceApi.md#get)
- [list](api_ResourceApi.ResourceApi.md#list)
- [remove](api_ResourceApi.ResourceApi.md#remove)
- [update](api_ResourceApi.ResourceApi.md#update)

## Constructors

### constructor

• **new ResourceApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/ResourceApi.ts:14](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L14)

## Methods

### create

▸ **create**(`param`): `Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

Creates a new resource
Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
The "data" field is required, while the "props" one is not. If not specified, default values will be used.

#### Parameters

| Name    | Type                                                                                                                        |
| :------ | :-------------------------------------------------------------------------------------------------------------------------- |
| `param` | { `data`: `ReadStream` } & `Partial`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md)\> |

#### Returns

`Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

#### Defined in

[api/ResourceApi.ts:42](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L42)

---

### fileByResourceId

▸ **fileByResourceId**(`id`): `Promise`<`Buffer`\>

Gets the actual file associated with this resource.

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

[api/ResourceApi.ts:77](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L77)

---

### get

▸ **get**(`id`): `Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

#### Defined in

[api/ResourceApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L26)

▸ **get**<`K`\>(`id`, `fields`): `Promise`<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

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

`Promise`<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>

#### Defined in

[api/ResourceApi.ts:27](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L27)

---

### list

▸ **list**(): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>\>

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>\>

#### Defined in

[api/ResourceApi.ts:16](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L16)

▸ **list**<`K`\>(`pageParam`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\>\>\>

#### Type parameters

| Name | Type                                                                                               |
| :--- | :------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md) |

#### Parameters

| Name        | Type                                                                                                                                                                                                                    |
| :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pageParam` | [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `K`\>\>\>

#### Defined in

[api/ResourceApi.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L17)

---

### remove

▸ **remove**(`id`): `Promise`<`void`\>

TODO 这个 api 存在 bug

**`link`** https://discourse.joplinapp.org/t/pre-release-1-4-is-now-available-for-testing/12247/15?u=rxliuli

#### Parameters

| Name | Type     |
| :--- | :------- |
| `id` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceApi.ts:69](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L69)

---

### update

▸ **update**(`param`): `Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

#### Parameters

| Name    | Type                                                                                                               |
| :------ | :----------------------------------------------------------------------------------------------------------------- |
| `param` | `Pick`<[`ResourceProperties`](../interfaces/modal_ResourceProperties.ResourceProperties.md), `"id"` \| `"title"`\> |

#### Returns

`Promise`<[`ResourceGetRes`](../modules/modal_ResourceGetRes.md#resourcegetres)\>

#### Defined in

[api/ResourceApi.ts:57](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceApi.ts#L57)
