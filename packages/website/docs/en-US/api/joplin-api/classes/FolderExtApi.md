[Documentation](../../packages.md) / [joplin-api](../index.md) / FolderExtApi

# Class: FolderExtApi

## Constructors

### new FolderExtApi()

> **new FolderExtApi**(`ajax`): [`FolderExtApi`](FolderExtApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`FolderExtApi`](FolderExtApi.md)

#### Defined in

[api/FolderExtApi.ts:9](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/FolderExtApi.ts#L9)

## Methods

### move()

> **move**(`id`, `parentId`): `Promise`\<`void`\>

将目录移动到另一个目录中

#### Parameters

• **id**: `string`

• **parentId**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/FolderExtApi.ts:42](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/FolderExtApi.ts#L42)

---

### path()

> **path**(`id`): `Promise`\<[`FolderGetRes`](../type-aliases/FolderGetRes.md)[]\>

获取一个目录的路径目录列表

#### Parameters

• **id**: `string`

#### Returns

`Promise`\<[`FolderGetRes`](../type-aliases/FolderGetRes.md)[]\>

#### Defined in

[api/FolderExtApi.ts:26](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/FolderExtApi.ts#L26)

---

### rename()

> **rename**(`id`, `title`): `Promise`\<[`FolderUpdateRes`](../type-aliases/FolderUpdateRes.md)\>

重命名目录

#### Parameters

• **id**: `string`

• **title**: `string`

#### Returns

`Promise`\<[`FolderUpdateRes`](../type-aliases/FolderUpdateRes.md)\>

#### Defined in

[api/FolderExtApi.ts:18](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/api/FolderExtApi.ts#L18)
