[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / ImportModule

# Interface: ImportModule

## Properties

### description

> **description**: `string`

The description that will appear in the UI, for example in the menu item.

#### Defined in

joplin-plugin-api/dist/types.d.ts:113

---

### fileExtensions?

> `optional` **fileExtensions**: `string`[]

Tells the file extensions of the exported files.

#### Defined in

joplin-plugin-api/dist/types.d.ts:127

---

### format

> **format**: `string`

The format to be exported, eg "enex", "jex", "json", etc.

#### Defined in

joplin-plugin-api/dist/types.d.ts:109

---

### isNoteArchive

> **isNoteArchive**: `boolean`

Only applies to single file exporters or importers
It tells whether the format can package multiple notes into one file.
For example JEX or ENEX can, but HTML cannot.

#### Defined in

joplin-plugin-api/dist/types.d.ts:119

---

### outputFormat?

> `optional` **outputFormat**: [`ImportModuleOutputFormat`](../enumerations/ImportModuleOutputFormat.md)

Tells the type of notes that will be generated, either HTML or Markdown (default).

#### Defined in

joplin-plugin-api/dist/types.d.ts:131

---

### sources

> **sources**: [`FileSystemItem`](../enumerations/FileSystemItem.md)[]

The type of sources that are supported by the module. Tells whether the module can import files or directories or both.

#### Defined in

joplin-plugin-api/dist/types.d.ts:123

## Methods

### onExec()

> **onExec**(`context`): `Promise`\<`void`\>

Called when the import process starts. There is only one event handler within which you should import the complete data.

#### Parameters

• **context**: [`ImportContext`](ImportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

joplin-plugin-api/dist/types.d.ts:135
