[Documentation](../../packages.md) / [joplin-api](../index.md) / ResourceApi

# Class: ResourceApi

附件资源相关 api

## Constructors

### new ResourceApi()

> **new ResourceApi**(`ajax`): [`ResourceApi`](ResourceApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`ResourceApi`](ResourceApi.md)

#### Defined in

[api/ResourceApi.ts:13](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L13)

## Methods

### create()

> **create**(`param`): `Promise`\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\>

Creates a new resource
TODO 目前大批量上传文件仍有问题
Creating a new resource is special because you also need to upload the file. Unlike other API calls, this one must have the "multipart/form-data" Content-Type. The file data must be passed to the "data" form field, and the other properties to the "props" form field. An example of a valid call with cURL would be:
The "data" field is required, while the "props" one is not. If not specified, default values will be used.

#### Parameters

• **param**: `object` & `Partial`\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\>

#### Returns

`Promise`\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\>

#### Defined in

[api/ResourceApi.ts:44](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L44)

---

### fileById()

> **fileById**(`id`): `Promise`\<`Blob`\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`Blob`\>

#### Defined in

[api/ResourceApi.ts:85](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L85)

---

### fileByResourceId()

> **fileByResourceId**(`id`): `Promise`\<`Buffer`\>

Gets the actual file associated with this resource.

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`Buffer`\>

#### Defined in

[api/ResourceApi.ts:74](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L74)

---

### get()

#### get(id)

> **get**(`id`): `Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>

##### Parameters

• **id**: `string`

##### Returns

`Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>

##### Defined in

[api/ResourceApi.ts:25](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L25)

#### get(id, fields)

> **get**\<`K`\>(`id`, `fields`): `Promise`\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Type Parameters

• **K** _extends_ keyof [`ResourceProperties`](../interfaces/ResourceProperties.md) = `"id"` \| `"title"`

##### Parameters

• **id**: `string`

• **fields**: `K`[]

##### Returns

`Promise`\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Defined in

[api/ResourceApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L26)

---

### list()

#### list(undefined)

> **list**(): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>\>

##### Defined in

[api/ResourceApi.ts:15](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L15)

#### list(pageParam)

> **list**\<`K`\>(`pageParam`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\>\>\>

##### Type Parameters

• **K** _extends_ keyof [`ResourceProperties`](../interfaces/ResourceProperties.md)

##### Parameters

• **pageParam**: [`PageParam`](../interfaces/PageParam.md)\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\>\>\>

##### Defined in

[api/ResourceApi.ts:16](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L16)

---

### remove()

> **remove**(`id`): `Promise`\<`void`\>

TODO 这个 api 存在 bug

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/ResourceApi.ts:66](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L66)

---

### update()

> **update**(`param`): `Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>

#### Parameters

• **param**: `Required`\<`Pick`\<`Partial`\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\>, `"id"`\>\> & `Omit`\<`Partial`\<[`ResourceProperties`](../interfaces/ResourceProperties.md)\>, `"id"`\> & `object`

#### Returns

`Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)\>

#### Defined in

[api/ResourceApi.ts:53](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceApi.ts#L53)
