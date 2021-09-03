[joplin-api](../README.md) / [Exports](../modules.md) / [util/ajax](../modules/util_ajax.md) / Ajax

# Class: Ajax

[util/ajax](../modules/util_ajax.md).Ajax

## Table of contents

### Constructors

- [constructor](util_ajax.Ajax.md#constructor)

### Properties

- [config](util_ajax.Ajax.md#config)

### Methods

- [baseUrl](util_ajax.Ajax.md#baseurl)
- [delete](util_ajax.Ajax.md#delete)
- [get](util_ajax.Ajax.md#get)
- [post](util_ajax.Ajax.md#post)
- [postFormData](util_ajax.Ajax.md#postformdata)
- [put](util_ajax.Ajax.md#put)
- [request](util_ajax.Ajax.md#request)

## Constructors

### constructor

• **new Ajax**(`config`)

#### Parameters

| Name     | Type                              |
| :------- | :-------------------------------- |
| `config` | [`Config`](util_config.Config.md) |

#### Defined in

[util/ajax.ts:61](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L61)

## Properties

### config

• `Readonly` **config**: [`Config`](util_config.Config.md)

## Methods

### baseUrl

▸ **baseUrl**(`url`, `param?`): `string`

#### Parameters

| Name     | Type     |
| :------- | :------- |
| `url`    | `string` |
| `param?` | `object` |

#### Returns

`string`

#### Defined in

[util/ajax.ts:77](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L77)

---

### delete

▸ **delete**<`R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `url`     | `string`                                                 |
| `data?`   | `any`                                                    |
| `config?` | `Omit`<`AjaxConfig`, `"url"` \| `"method"` \| `"data"`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[util/ajax.ts:128](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L128)

---

### get

▸ **get**<`R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `url`     | `string`                                                 |
| `data?`   | `any`                                                    |
| `config?` | `Omit`<`AjaxConfig`, `"url"` \| `"method"` \| `"data"`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[util/ajax.ts:90](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L90)

---

### post

▸ **post**<`R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `url`     | `string`                                                 |
| `data?`   | `any`                                                    |
| `config?` | `Omit`<`AjaxConfig`, `"url"` \| `"method"` \| `"data"`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[util/ajax.ts:102](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L102)

---

### postFormData

▸ **postFormData**(`url`, `data`): `Promise`<`any`\>

#### Parameters

| Name   | Type     |
| :----- | :------- |
| `url`  | `string` |
| `data` | `object` |

#### Returns

`Promise`<`any`\>

#### Defined in

[util/ajax.ts:141](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L141)

---

### put

▸ **put**<`R`\>(`url`, `data?`, `config?`): `Promise`<`R`\>

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name      | Type                                                     |
| :-------- | :------------------------------------------------------- |
| `url`     | `string`                                                 |
| `data?`   | `any`                                                    |
| `config?` | `Omit`<`AjaxConfig`, `"url"` \| `"method"` \| `"data"`\> |

#### Returns

`Promise`<`R`\>

#### Defined in

[util/ajax.ts:115](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L115)

---

### request

▸ **request**<`R`\>(`ajaxConfig`): `Promise`<`R`\>

封装 ajax 请求

#### Type parameters

| Name |
| :--- |
| `R`  |

#### Parameters

| Name         | Type         |
| :----------- | :----------- |
| `ajaxConfig` | `AjaxConfig` |

#### Returns

`Promise`<`R`\>

#### Defined in

[util/ajax.ts:67](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/ajax.ts#L67)
