[joplin-api](../README.md) / [Exports](../modules.md) / [api/SearchApi](../modules/api_SearchApi.md) / SearchApi

# Class: SearchApi

[api/SearchApi](../modules/api_SearchApi.md).SearchApi

## Table of contents

### Constructors

- [constructor](api_SearchApi.SearchApi.md#constructor)

### Properties

- [TypeEnumMap](api_SearchApi.SearchApi.md#typeenummap)

### Methods

- [search](api_SearchApi.SearchApi.md#search)

## Constructors

### constructor

• **new SearchApi**(`ajax`)

#### Parameters

| Name   | Type                        |
| :----- | :-------------------------- |
| `ajax` | [`Ajax`](util_ajax.Ajax.md) |

#### Defined in

[api/SearchApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/SearchApi.ts#L10)

## Properties

### TypeEnumMap

▪ `Static` `Private` `Readonly` **TypeEnumMap**: `Record`<[`TypeEnum`](../enums/modal_TypeEnum.TypeEnum.md), `string`\>

#### Defined in

[api/SearchApi.ts:12](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/SearchApi.ts#L12)

## Methods

### search

▸ **search**<`K`\>(`param`): `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>\>

#### Type parameters

| Name | Type                                                                                   |
| :--- | :------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md) |

#### Parameters

| Name    | Type                                                                                                                                                                                                                                                                                             |
| :------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `param` | { `query`: `string` ; `type?`: [`TypeEnum`](../enums/modal_TypeEnum.TypeEnum.md) } & [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>\>

#### Defined in

[api/SearchApi.ts:30](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/api/SearchApi.ts#L30)
