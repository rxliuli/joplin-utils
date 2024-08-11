[Documentation](../../packages.md) / [joplin-api](../index.md) / NoteApi

# Class: NoteApi

TODO 可以考虑使用 fields() 方法设置然后产生一个新的 Api 实例

## Constructors

### new NoteApi()

> **new NoteApi**(`ajax`): [`NoteApi`](NoteApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`NoteApi`](NoteApi.md)

#### Defined in

[api/NoteApi.ts:20](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L20)

## Methods

### create()

> **create**(`param`): `Promise`\<[`NoteCreateRes`](../type-aliases/NoteCreateRes.md)\>

#### Parameters

• **param**: `RequiredField`\<`Partial`\<[`NoteProperties`](../interfaces/NoteProperties.md)\>, `"title"`\>

#### Returns

`Promise`\<[`NoteCreateRes`](../type-aliases/NoteCreateRes.md)\>

#### Defined in

[api/NoteApi.ts:39](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L39)

---

### get()

#### get(id)

> **get**(`id`): `Promise`\<[`NoteGetRes`](../type-aliases/NoteGetRes.md) & [`CommonType`](../interfaces/CommonType.md)\>

##### Parameters

• **id**: `string`

##### Returns

`Promise`\<[`NoteGetRes`](../type-aliases/NoteGetRes.md) & [`CommonType`](../interfaces/CommonType.md)\>

##### Defined in

[api/NoteApi.ts:30](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L30)

#### get(id, fields)

> **get**\<`K`\>(`id`, `fields`?): `Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Type Parameters

• **K** _extends_ keyof [`NoteProperties`](../interfaces/NoteProperties.md) = `"id"` \| `"title"` \| `"parent_id"`

##### Parameters

• **id**: `string`

• **fields?**: `K`[]

##### Returns

`Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Defined in

[api/NoteApi.ts:31](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L31)

---

### list()

#### list(undefined)

> **list**(): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)\>\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)\>\>

##### Defined in

[api/NoteApi.ts:22](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L22)

#### list(pageParam)

> **list**\<`K`\>(`pageParam`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\>\>\>

##### Type Parameters

• **K** _extends_ keyof [`NoteProperties`](../interfaces/NoteProperties.md) = `"id"` \| `"title"` \| `"parent_id"`

##### Parameters

• **pageParam**: [`PageParam`](../interfaces/PageParam.md)\<[`NoteProperties`](../interfaces/NoteProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\>\>\>

##### Defined in

[api/NoteApi.ts:23](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L23)

---

### remove()

> **remove**(`id`): `Promise`\<`void`\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/NoteApi.ts:48](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L48)

---

### resourcesById()

#### resourcesById(id)

> **resourcesById**(`id`): `Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)[]\>

##### Parameters

• **id**: `string`

##### Returns

`Promise`\<[`ResourceGetRes`](../type-aliases/ResourceGetRes.md)[]\>

##### Defined in

[api/NoteApi.ts:59](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L59)

#### resourcesById(id, fields)

> **resourcesById**\<`K`\>(`id`, `fields`): `Promise`\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)[]\>

##### Type Parameters

• **K** _extends_ keyof [`ResourceProperties`](../interfaces/ResourceProperties.md) = `"id"` \| `"title"`

##### Parameters

• **id**: `string`

• **fields**: `K`[]

##### Returns

`Promise`\<`Pick`\<[`ResourceProperties`](../interfaces/ResourceProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)[]\>

##### Defined in

[api/NoteApi.ts:60](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L60)

---

### tagsById()

> **tagsById**(`id`): `Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)[]\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)[]\>

#### Defined in

[api/NoteApi.ts:52](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L52)

---

### update()

> **update**(`param`): `Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

#### Parameters

• **param**: `RequiredField`\<`Partial`\<[`NoteProperties`](../interfaces/NoteProperties.md)\>, `"id"`\>

#### Returns

`Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

#### Defined in

[api/NoteApi.ts:43](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteApi.ts#L43)
