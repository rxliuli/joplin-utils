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

Get all list from page
Get max limit each time, reduce request times

##### Type Parameters

• **F** _extends_ (`pageParam`) => `Promise`\<[`PageRes`](../interfaces/PageRes.md)\<`any`\>\>

##### Parameters

• **fn**: `F`

The function to get page data

• **pageParam?**: `Omit`\<`Parameters`\<`F`\>\[`0`\], `"page"` \| `"limit"`\>

The page parameter

##### Returns

`Promise`\<`PageResValueType`\<`ReturnType`\<`F`\>\>[]\>

The all list

##### Defined in

[util/PageUtil.ts:23](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-api/src/util/PageUtil.ts#L23)

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

[util/PageUtil.ts:27](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-api/src/util/PageUtil.ts#L27)
