[joplin-api](../README.md) / [Exports](../modules.md) / [api/ResourceActionApi](../modules/api_ResourceActionApi.md) / ResourceActionApi

# Class: ResourceActionApi

[api/ResourceActionApi](../modules/api_ResourceActionApi.md).ResourceActionApi

## Table of contents

### Constructors

- [constructor](api_ResourceActionApi.ResourceActionApi.md#constructor)

### Methods

- [baseAction](api_ResourceActionApi.ResourceActionApi.md#baseaction)
- [noteIsWatched](api_ResourceActionApi.ResourceActionApi.md#noteiswatched)
- [openAndWatch](api_ResourceActionApi.ResourceActionApi.md#openandwatch)
- [stopWatching](api_ResourceActionApi.ResourceActionApi.md#stopwatching)
- [watch](api_ResourceActionApi.ResourceActionApi.md#watch)

## Constructors

### constructor

• **new ResourceActionApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/ResourceActionApi.ts:11](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L11)

## Methods

### baseAction

▸ `Private` **baseAction**(`action`, `resourceId`): `Promise`<`void`\>

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `action`     | `ActionEnum` |
| `resourceId` | `string`     |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceActionApi.ts:29](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L29)

---

### noteIsWatched

▸ **noteIsWatched**(`resourceId`): `Promise`<`void`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `resourceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceActionApi.ts:25](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L25)

---

### openAndWatch

▸ **openAndWatch**(`resourceId`): `Promise`<`void`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `resourceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceActionApi.ts:13](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L13)

---

### stopWatching

▸ **stopWatching**(`resourceId`): `Promise`<`void`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `resourceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceActionApi.ts:21](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L21)

---

### watch

▸ **watch**(`resourceId`): `Promise`<`void`\>

#### Parameters

| Name         | Type     |
| :----------- | :------- |
| `resourceId` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

[api/ResourceActionApi.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/ResourceActionApi.ts#L17)
