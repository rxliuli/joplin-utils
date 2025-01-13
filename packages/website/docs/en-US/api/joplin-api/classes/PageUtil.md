[Documentation](../../packages.md) / [joplin-api](../index.md) / PageUtil

# Class: PageUtil

## Constructors

### new PageUtil()

> **new PageUtil**(): [`PageUtil`](PageUtil.md)

#### Returns

[`PageUtil`](PageUtil.md)

## Methods

### pageToAllList()

#### pageToAllList(fn, pageParam)

> `static` **pageToAllList**\<`F`\>(`fn`, `pageParam`?): `Promise`\<`PageResValueType`\<`ReturnType`\<`F`\>\>[]\>

循环获取所有分页的数据
每次都获取最大分页数量，尽可能减少请求次数

##### Type Parameters

• **F** _extends_ (`pageParam`) => `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`any`\>\>

##### Parameters

• **fn**: `F`

• **pageParam?**: `Omit`\<`Parameters`\<`F`\>\[`0`\], `"page"` \| `"limit"`\>

##### Returns

`Promise`\<`PageResValueType`\<`ReturnType`\<`F`\>\>[]\>

##### Defined in

[util/PageUtil.ts:21](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/util/PageUtil.ts#L21)

#### pageToAllList(fn, pageParam)

> `static` **pageToAllList**\<`K`, `F`\>(`fn`, `pageParam`): `Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)[]\>

##### Type Parameters

• **K** _extends_ keyof [`NoteProperties`](../interfaces/NoteProperties.md)

• **F** _extends_ (`pageParam`) => `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)\>\>

##### Parameters

• **fn**: `F`

• **pageParam**: `object` & [`PageParam`](../interfaces/PageParam.md)\<[`NoteProperties`](../interfaces/NoteProperties.md)\> & [`FieldsParam`](../interfaces/FieldsParam.md)\<`K`\>

##### Returns

`Promise`\<`Pick`\<[`NoteProperties`](../interfaces/NoteProperties.md), `K`\> & [`CommonType`](../interfaces/CommonType.md)[]\>

##### Defined in

[util/PageUtil.ts:25](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-api/src/util/PageUtil.ts#L25)
