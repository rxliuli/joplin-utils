[Documentation](../../packages.md) / [joplin-api](../index.md) / FolderApi

# Class: FolderApi

目录相关 api

## Constructors

### new FolderApi()

> **new FolderApi**(`ajax`): [`FolderApi`](FolderApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`FolderApi`](FolderApi.md)

#### Defined in

[api/FolderApi.ts:21](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L21)

## Methods

### create()

> **create**(`param`): `Promise`\<[`FolderCreateRes`](../type-aliases/FolderCreateRes.md)\>

#### Parameters

• **param**: `RequiredField`\<`Partial`\<[`FolderProperties`](../interfaces/FolderProperties.md)\>, `"title"`\>

#### Returns

`Promise`\<[`FolderCreateRes`](../type-aliases/FolderCreateRes.md)\>

#### Defined in

[api/FolderApi.ts:44](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L44)

---

### get()

> **get**(`id`): `Promise`\<[`FolderGetRes`](../type-aliases/FolderGetRes.md)\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`FolderGetRes`](../type-aliases/FolderGetRes.md)\>

#### Defined in

[api/FolderApi.ts:40](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L40)

---

### list()

#### list(undefined)

> **list**(): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`FolderListRes`](../type-aliases/FolderListRes.md)\>\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<[`FolderListRes`](../type-aliases/FolderListRes.md)\>\>

##### Defined in

[api/FolderApi.ts:23](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L23)

#### list(pageParam)

> **list**\<`K`\>(`pageParam`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`FolderProperties`](../interfaces/FolderProperties.md), `K`\>\>\>

##### Type Parameters

• **K** _extends_ keyof [`FolderProperties`](../interfaces/FolderProperties.md) = `"id"` \| `"title"` \| `"parent_id"`

##### Parameters

• **pageParam**: [`PageParam`](../interfaces/PageParam.md)\<[`FolderProperties`](../interfaces/FolderProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

##### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`FolderProperties`](../interfaces/FolderProperties.md), `K`\>\>\>

##### Defined in

[api/FolderApi.ts:24](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L24)

---

### listAll()

> **listAll**(): `Promise`\<[`FolderListAllRes`](../type-aliases/FolderListAllRes.md)[]\>

使用特殊的 as_tree 参数来恢复旧的行为

#### Returns

`Promise`\<[`FolderListAllRes`](../type-aliases/FolderListAllRes.md)[]\>

#### Defined in

[api/FolderApi.ts:34](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L34)

---

### notesByFolderId()

#### notesByFolderId(id)

> **notesByFolderId**(`id`): `Promise`\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)[]\>

##### Parameters

• **id**: `string`

##### Returns

`Promise`\<[`NoteGetRes`](../type-aliases/NoteGetRes.md)[]\>

##### Defined in

[api/FolderApi.ts:57](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L57)

#### notesByFolderId(id, fields)

> **notesByFolderId**\<`K`\>(`id`, `fields`): `Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\>[]\>

##### Type Parameters

• **K** _extends_ keyof [`NoteProperties`](../interfaces/NoteProperties.md) = `"id"` \| `"title"` \| `"parent_id"`

##### Parameters

• **id**: `string`

• **fields**: `K`[]

##### Returns

`Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\>[]\>

##### Defined in

[api/FolderApi.ts:58](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L58)

---

### remove()

> **remove**(`id`): `Promise`\<`string`\>

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<`string`\>

#### Defined in

[api/FolderApi.ts:53](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L53)

---

### update()

> **update**(`param`): `Promise`\<[`FolderUpdateRes`](../type-aliases/FolderUpdateRes.md)\>

#### Parameters

• **param**: `RequiredField`\<`Partial`\<[`FolderProperties`](../interfaces/FolderProperties.md)\>, `"id"`\>

#### Returns

`Promise`\<[`FolderUpdateRes`](../type-aliases/FolderUpdateRes.md)\>

#### Defined in

[api/FolderApi.ts:48](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-api/src/api/FolderApi.ts#L48)
