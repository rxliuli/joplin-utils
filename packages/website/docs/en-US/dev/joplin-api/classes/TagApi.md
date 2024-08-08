[Documentation](../../packages.md) / [joplin-api](../index.md) / TagApi

# Class: TagApi

## Constructors

### new TagApi()

> **new TagApi**(`ajax`): [`TagApi`](TagApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`TagApi`](TagApi.md)

#### Defined in

[api/TagApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L10)

## Methods

### addTagByNoteId()

> **addTagByNoteId**(`tagId`, `noteId`): `Promise`\<`null` \| [`NoteTagRelated`](../type-aliases/NoteTagRelated.md)\>

Post a note to this endpoint to add the tag to the note. The note data must at least contain an ID property (all other properties will be ignored).

#### Parameters

• **tagId**: `string`

• **noteId**: `string`

#### Returns

`Promise`\<`null` \| [`NoteTagRelated`](../type-aliases/NoteTagRelated.md)\>

#### Defined in

[api/TagApi.ts:46](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L46)

---

### create()

> **create**(`param`): `Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Parameters

• **param**: `Pick`\<[`BaseProperties`](../interfaces/BaseProperties.md), `"title"`\>

#### Returns

`Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Defined in

[api/TagApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L24)

---

### get()

> **get**(`id`): `Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Defined in

[api/TagApi.ts:20](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L20)

---

### list()

#### list(undefined)

> **list**(): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>\>

##### Defined in

[api/TagApi.ts:12](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L12)

#### list(pageParam)

> **list**\<`K`\>(`pageParam`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`BaseProperties`](../interfaces/BaseProperties.md), `K`\>\>\>

##### Type Parameters

• **K** _extends_ keyof [`BaseProperties`](../interfaces/BaseProperties.md)

##### Parameters

• **pageParam**: [`PageParam`](../interfaces/PageParam.md)\<[`BaseProperties`](../interfaces/BaseProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`BaseProperties`](../interfaces/BaseProperties.md), `K`\>\>\>

##### Defined in

[api/TagApi.ts:13](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L13)

---

### notesByTagId()

> **notesByTagId**(`__namedParameters`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)\>\>

#### Parameters

• **\_\_namedParameters**: `object` & [`PageParam`](../interfaces/PageParam.md)\<[`BaseProperties`](../interfaces/BaseProperties.md)\>

#### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)\>\>

#### Defined in

[api/TagApi.ts:37](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L37)

---

### remove()

> **remove**(`id`): `Promise`\<[`BaseProperties`](../interfaces/BaseProperties.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`BaseProperties`](../interfaces/BaseProperties.md)\>

#### Defined in

[api/TagApi.ts:33](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L33)

---

### removeTagByNoteId()

> **removeTagByNoteId**(`tagId`, `noteId`): `Promise`\<`void`\>

#### Parameters

• **tagId**: `string`

• **noteId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/TagApi.ts:52](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L52)

---

### update()

> **update**(`param`): `Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Parameters

• **param**: `Pick`\<[`BaseProperties`](../interfaces/BaseProperties.md), `"id"` \| `"title"`\>

#### Returns

`Promise`\<[`TagGetRes`](../type-aliases/TagGetRes.md)\>

#### Defined in

[api/TagApi.ts:28](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/TagApi.ts#L28)
