[Documentation](../../packages.md) / [joplin-api](../index.md) / NoteExtApi

# Class: NoteExtApi

## Constructors

### new NoteExtApi()

> **new NoteExtApi**(`ajax`): [`NoteExtApi`](NoteExtApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`NoteExtApi`](NoteExtApi.md)

#### Defined in

[api/NoteExtApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteExtApi.ts#L10)

## Methods

### move()

> **move**(`id`, `parentId`): `Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

将笔记移动到指定目录

#### Parameters

• **id**: `string`

• **parentId**: `string`

#### Returns

`Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

#### Defined in

[api/NoteExtApi.ts:28](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteExtApi.ts#L28)

---

### rename()

> **rename**(`id`, `title`): `Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

重命名笔记

#### Parameters

• **id**: `string`

• **title**: `string`

#### Returns

`Promise`\<[`NoteUpdateRes`](../type-aliases/NoteUpdateRes.md)\>

#### Defined in

[api/NoteExtApi.ts:19](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteExtApi.ts#L19)

---

### toggleTodo()

> **toggleTodo**(`id`, `completed`?): `Promise`\<`void`\>

切换 to-do 的状态

#### Parameters

• **id**: `string`

• **completed?**: `IntBool`

#### Returns

`Promise`\<`void`\>

#### Defined in

[api/NoteExtApi.ts:37](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/NoteExtApi.ts#L37)
