[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ExportModule

# Interface: ExportModule

Used to implement a module to export data from Joplin. [View the demo plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/json_export) for an example.

In general, all the event handlers you'll need to implement take a `context` object as a first argument. This object will contain the export or import path as well as various optional properties, such as which notes or notebooks need to be exported.

To get a better sense of what it will contain it can be useful to print it using `console.info(context)`.

## Properties

### description

> **description**: `string`

The description that will appear in the UI, for example in the menu item.

#### Defined in

[types.ts:91](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L91)

---

### fileExtensions?

> `optional` **fileExtensions**: `string`[]

The extensions of the files exported by your module. For example, it is `["htm", "html"]` for the HTML module, and just `["jex"]` for the JEX module.

#### Defined in

[types.ts:108](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L108)

---

### format

> **format**: `string`

The format to be exported, eg "enex", "jex", "json", etc.

#### Defined in

[types.ts:86](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L86)

---

### isNoteArchive

> **isNoteArchive**: `boolean`

Only applies to single file exporters or importers
It tells whether the format can package multiple notes into one file.
For example JEX or ENEX can, but HTML cannot.

#### Defined in

[types.ts:103](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L103)

---

### target

> **target**: [`FileSystemItem`](../enumerations/FileSystemItem.md)

Whether the module will export a single file or multiple files in a directory. It affects the open dialog that will be presented to the user when using your exporter.

#### Defined in

[types.ts:96](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L96)

## Methods

### onClose()

> **onClose**(`context`): `Promise`\<`void`\>

Called when the export process is done.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[types.ts:128](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L128)

---

### onInit()

> **onInit**(`context`): `Promise`\<`void`\>

Called when the export process starts.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

[types.ts:113](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L113)

---

### onProcessItem()

> **onProcessItem**(`context`, `itemType`, `item`): `Promise`\<`void`\>

Called when an item needs to be processed. An "item" can be any Joplin object, such as a note, a folder, a notebook, etc.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

• **itemType**: `number`

• **item**: `any`

#### Returns

`Promise`\<`void`\>

#### Defined in

[types.ts:118](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L118)

---

### onProcessResource()

> **onProcessResource**(`context`, `resource`, `filePath`): `Promise`\<`void`\>

Called when a resource file needs to be exported.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

• **resource**: `any`

• **filePath**: `string`

#### Returns

`Promise`\<`void`\>

#### Defined in

[types.ts:123](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L123)
