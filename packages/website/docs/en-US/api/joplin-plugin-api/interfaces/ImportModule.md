[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ImportModule

# Interface: ImportModule

## Properties

### description

> **description**: `string`

The description that will appear in the UI, for example in the menu item.

#### Defined in

[types.ts:140](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L140)

---

### fileExtensions?

> `optional` **fileExtensions**: `string`[]

Tells the file extensions of the exported files.

#### Defined in

[types.ts:157](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L157)

---

### format

> **format**: `string`

The format to be exported, eg "enex", "jex", "json", etc.

#### Defined in

[types.ts:135](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L135)

---

### isNoteArchive

> **isNoteArchive**: `boolean`

Only applies to single file exporters or importers
It tells whether the format can package multiple notes into one file.
For example JEX or ENEX can, but HTML cannot.

#### Defined in

[types.ts:147](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L147)

---

### outputFormat?

> `optional` **outputFormat**: [`ImportModuleOutputFormat`](../enumerations/ImportModuleOutputFormat.md)

Tells the type of notes that will be generated, either HTML or Markdown (default).

#### Defined in

[types.ts:162](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L162)

---

### sources

> **sources**: [`FileSystemItem`](../enumerations/FileSystemItem.md)[]

The type of sources that are supported by the module. Tells whether the module can import files or directories or both.

#### Defined in

[types.ts:152](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L152)

## Methods

### onExec()

> **onExec**(`context`): `Promise`\<`void`\>

Called when the import process starts. There is only one event handler within which you should import the complete data.

#### Parameters

• **context**: [`ImportContext`](ImportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[types.ts:167](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L167)
