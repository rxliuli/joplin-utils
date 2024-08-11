[Documentation](../../packages.md) / [joplin-api](../index.md) / SearchApi

# Class: SearchApi

## Constructors

### new SearchApi()

> **new SearchApi**(`ajax`): [`SearchApi`](SearchApi.md)

#### Parameters

• **ajax**: `Ajax`

#### Returns

[`SearchApi`](SearchApi.md)

#### Defined in

[api/SearchApi.ts:10](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/SearchApi.ts#L10)

## Methods

### search()

> **search**\<`K`\>(`param`): `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>\>

#### Type Parameters

• **K** _extends_ keyof [`NoteProperties`](../interfaces/NoteProperties.md)

#### Parameters

• **param**: `object` & [`PageParam`](../interfaces/PageParam.md)\<[`NoteProperties`](../interfaces/NoteProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

#### Returns

`Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>\>

#### Defined in

[api/SearchApi.ts:30](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-api/src/api/SearchApi.ts#L30)
