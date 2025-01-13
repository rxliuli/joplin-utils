[Documentation](../../packages.md) / [joplin-api](../index.md) / NoteActionApi

# Class: NoteActionApi

## Constructors

### new NoteActionApi()

> **new NoteActionApi**(`ajax`): [`NoteActionApi`](NoteActionApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`NoteActionApi`](NoteActionApi.md)

#### Defined in

[api/NoteActionApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/NoteActionApi.ts#L10)

## Methods

### isWatch()

> **isWatch**(`noteId`): `Promise`\<`boolean`\>

#### Parameters

• **noteId**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Defined in

[api/NoteActionApi.ts:28](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/NoteActionApi.ts#L28)

---

### ~~noteIsWatched()~~

> **noteIsWatched**(`noteId`): `Promise`\<`boolean`\>

#### Parameters

• **noteId**: `string`

#### Returns

`Promise`\<`boolean`\>

#### Deprecated

已废弃，请使用 [isWatch](NoteActionApi.md#iswatch)

#### Defined in

[api/NoteActionApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/NoteActionApi.ts#L24)

---

### openAndWatch()

> **openAndWatch**(`noteId`): `Promise`\<`void`\>

#### Parameters

• **noteId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/NoteActionApi.ts:12](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/NoteActionApi.ts#L12)

---

### stopWatching()

> **stopWatching**(`noteId`): `Promise`\<`void`\>

#### Parameters

• **noteId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/NoteActionApi.ts:16](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/api/NoteActionApi.ts#L16)
