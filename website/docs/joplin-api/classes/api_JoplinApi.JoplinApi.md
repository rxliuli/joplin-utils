[joplin-api](../README.md) / [Exports](../modules.md) / [api/JoplinApi](../modules/api_JoplinApi.md) / JoplinApi

# Class: JoplinApi

[api/JoplinApi](../modules/api_JoplinApi.md).JoplinApi

## Table of contents

### Constructors

- [constructor](api_JoplinApi.JoplinApi.md#constructor)

### Methods

- [ping](api_JoplinApi.JoplinApi.md#ping)
- [pingPort](api_JoplinApi.JoplinApi.md#pingport)
- [scan](api_JoplinApi.JoplinApi.md#scan)
- [range](api_JoplinApi.JoplinApi.md#range)

## Constructors

### constructor

• **new JoplinApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/JoplinApi.ts:5](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/JoplinApi.ts#L5)

## Methods

### ping

▸ **ping**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/JoplinApi.ts:41](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/JoplinApi.ts#L41)

---

### pingPort

▸ `Private` **pingPort**(`port`): `Promise`<`boolean`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `port` | `number` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

[api/JoplinApi.ts:8](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/JoplinApi.ts#L8)

---

### scan

▸ **scan**(): `Promise`<`number`\>

#### Returns

`Promise`<`number`\>

#### Defined in

[api/JoplinApi.ts:25](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/JoplinApi.ts#L25)

---

### range

▸ `Static` `Private` **range**(`begin`, `end`): `number`[]

#### Parameters

| Name    | Type     |
| :------ | :------- |
| `begin` | `number` |
| `end`   | `number` |

#### Returns

`number`[]

#### Defined in

[api/JoplinApi.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/JoplinApi.ts#L17)
