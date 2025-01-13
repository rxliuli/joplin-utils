[Documentation](../../packages.md) / [joplin-api](../index.md) / ResourceActionApi

# Class: ResourceActionApi

## Constructors

### new ResourceActionApi()

> **new ResourceActionApi**(`ajax`): [`ResourceActionApi`](ResourceActionApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`ResourceActionApi`](ResourceActionApi.md)

#### Defined in

[api/ResourceActionApi.ts:11](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceActionApi.ts#L11)

## Methods

### noteIsWatched()

> **noteIsWatched**(`resourceId`): `Promise`\<`boolean`\>

#### Parameters

• **resourceId**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/ResourceActionApi.ts:25](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceActionApi.ts#L25)

---

### openAndWatch()

> **openAndWatch**(`resourceId`): `Promise`\<`void`\>

#### Parameters

• **resourceId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/ResourceActionApi.ts:13](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceActionApi.ts#L13)

---

### stopWatching()

> **stopWatching**(`resourceId`): `Promise`\<`void`\>

#### Parameters

• **resourceId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/ResourceActionApi.ts:21](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceActionApi.ts#L21)

---

### watch()

> **watch**(`resourceId`): `Promise`\<`void`\>

#### Parameters

• **resourceId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/ResourceActionApi.ts:17](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/ResourceActionApi.ts#L17)
