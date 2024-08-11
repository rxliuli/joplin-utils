[Documentation](../../packages.md) / [joplin-api](../index.md) / EventApi

# Class: EventApi

## Link

https://joplinapp.org/api/references/rest_api/#events

## Constructors

### new EventApi()

> **new EventApi**(`ajax`): [`EventApi`](EventApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`EventApi`](EventApi.md)

#### Defined in

[api/EventApi.ts:23](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/EventApi.ts#L23)

## Methods

### get()

#### Link

https://joplinapp.org/api/references/rest_api/#get-events-id

#### Param

#### get(id)

> **get**(`id`): `Promise`\<[`EventGetRes`](../type-aliases/EventGetRes.md)\>

##### Parameters

• **id**: `number`

##### Returns

`Promise`\<[`EventGetRes`](../type-aliases/EventGetRes.md)\>

##### Link

https://joplinapp.org/api/references/rest_api/#get-events-id

##### Param

##### Defined in

[api/EventApi.ts:42](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/EventApi.ts#L42)

#### get(id, fields)

> **get**\<`K`\>(`id`, `fields`): `Promise`\<`Pick`\<[`EventProperties`](../interfaces/EventProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Type Parameters

• **K** _extends_ keyof [`EventProperties`](../interfaces/EventProperties.md)

##### Parameters

• **id**: `number`

• **fields**: `K`[]

##### Returns

`Promise`\<`Pick`\<[`EventProperties`](../interfaces/EventProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>

##### Link

https://joplinapp.org/api/references/rest_api/#get-events-id

##### Param

##### Defined in

[api/EventApi.ts:43](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/EventApi.ts#L43)

---

### list()

#### Link

https://joplinapp.org/api/references/rest_api/#get-events

#### Param

#### list(param)

> **list**(`param`?): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`EventListRes`](../type-aliases/EventListRes.md)\> & `object`\>

##### Parameters

• **param?**

• **param.cursor?**: `string`

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`EventListRes`](../type-aliases/EventListRes.md)\> & `object`\>

##### Link

https://joplinapp.org/api/references/rest_api/#get-events

##### Param

##### Defined in

[api/EventApi.ts:25](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/EventApi.ts#L25)

#### list(param)

> **list**\<`K`\>(`param`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`EventProperties`](../interfaces/EventProperties.md), `K`\>\> & `object`\>

##### Type Parameters

• **K** _extends_ keyof [`EventProperties`](../interfaces/EventProperties.md)

##### Parameters

• **param**

• **param.cursor?**: `string`

• **param.fields**: `K`[]

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`EventProperties`](../interfaces/EventProperties.md), `K`\>\> & `object`\>

##### Link

https://joplinapp.org/api/references/rest_api/#get-events

##### Param

##### Defined in

[api/EventApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/EventApi.ts#L26)
