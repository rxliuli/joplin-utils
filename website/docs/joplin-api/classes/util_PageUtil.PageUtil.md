[joplin-api](../README.md) / [Exports](../modules.md) / [util/PageUtil](../modules/util_PageUtil.md) / PageUtil

# Class: PageUtil

[util/PageUtil](../modules/util_PageUtil.md).PageUtil

## Table of contents

### Constructors

- [constructor](util_PageUtil.PageUtil.md#constructor)

### Properties

- [MaxLimit](util_PageUtil.PageUtil.md#maxlimit)

### Methods

- [pageToAllList](util_PageUtil.PageUtil.md#pagetoalllist)

## Constructors

### constructor

• **new PageUtil**()

## Properties

### MaxLimit

▪ `Static` `Private` `Readonly` **MaxLimit**: `100`

最大分页数量

#### Defined in

[util/PageUtil.ts:18](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/PageUtil.ts#L18)

## Methods

### pageToAllList

▸ `Static` **pageToAllList**<`F`\>(`fn`, `pageParam?`): `Promise`<`PageResValueType`<`ReturnType`<`F`\>\>[]\>

循环获取所有分页的数据
每次都获取最大分页数量，尽可能减少请求次数

#### Type parameters

| Name | Type                                                                                                                                                                                             |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `F`  | extends (`pageParam`: [`PageParam`](../interfaces/modal_PageData.PageParam.md)<`any`\> & `Record`<`string`, `any`\>) => `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`any`\>\> |

#### Parameters

| Name         | Type                                                      |
| :----------- | :-------------------------------------------------------- |
| `fn`         | `F`                                                       |
| `pageParam?` | `Omit`<`Parameters`<`F`\>[``0``], `"page"` \| `"limit"`\> |

#### Returns

`Promise`<`PageResValueType`<`ReturnType`<`F`\>\>[]\>

#### Defined in

[util/PageUtil.ts:25](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/PageUtil.ts#L25)

▸ `Static` **pageToAllList**<`K`, `F`\>(`fn`, `pageParam`): `Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)[]\>

#### Type parameters

| Name | Type                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| :--- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `K`  | extends keyof [`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `F`  | extends (`pageParam`: { `query`: `string` ; `type?`: [`TypeEnum`](../enums/modal_TypeEnum.TypeEnum.md) } & [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\>) => `Promise`<[`PageRes`](../interfaces/modal_PageData.PageRes.md)<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)\>\> |

#### Parameters

| Name        | Type                                                                                                                                                                                                                                                                                             |
| :---------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `fn`        | `F`                                                                                                                                                                                                                                                                                              |
| `pageParam` | { `query`: `string` ; `type?`: [`TypeEnum`](../enums/modal_TypeEnum.TypeEnum.md) } & [`PageParam`](../interfaces/modal_PageData.PageParam.md)<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md)\> & [`FieldsParam`](../interfaces/modal_FieldsParam.FieldsParam.md)<`K`\> |

#### Returns

`Promise`<`Pick`<[`NoteProperties`](../interfaces/modal_NoteProperties.NoteProperties.md), `K`\> & [`CommonType`](../interfaces/modal_CommonType.CommonType.md)[]\>

#### Defined in

[util/PageUtil.ts:33](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/PageUtil.ts#L33)
