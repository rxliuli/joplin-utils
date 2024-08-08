[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / ExportModule

# Interface: ExportModule

Used to implement a module to export data from Joplin. [View the demo plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/json_export) for an example.

In general, all the event handlers you'll need to implement take a `context` object as a first argument. This object will contain the export or import path as well as various optional properties, such as which notes or notebooks need to be exported.

To get a better sense of what it will contain it can be useful to print it using `console.info(context)`.

## Properties

### description

> **description**: `string`

The description that will appear in the UI, for example in the menu item.

#### Defined in

joplin-plugin-api/dist/types.d.ts:73

---

### fileExtensions?

> `optional` **fileExtensions**: `string`[]

The extensions of the files exported by your module. For example, it is `["htm", "html"]` for the HTML module, and just `["jex"]` for the JEX module.

#### Defined in

joplin-plugin-api/dist/types.d.ts:87

---

### format

> **format**: `string`

The format to be exported, eg "enex", "jex", "json", etc.

#### Defined in

joplin-plugin-api/dist/types.d.ts:69

---

### isNoteArchive

> **isNoteArchive**: `boolean`

Only applies to single file exporters or importers
It tells whether the format can package multiple notes into one file.
For example JEX or ENEX can, but HTML cannot.

#### Defined in

joplin-plugin-api/dist/types.d.ts:83

---

### target

> **target**: [`FileSystemItem`](../enumerations/FileSystemItem.md)

Whether the module will export a single file or multiple files in a directory. It affects the open dialog that will be presented to the user when using your exporter.

#### Defined in

joplin-plugin-api/dist/types.d.ts:77

## Methods

### onClose()

> **onClose**(`context`): `Promise`\<`void`\>

Called when the export process is done.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

joplin-plugin-api/dist/types.d.ts:103

---

### onInit()

> **onInit**(`context`): `Promise`\<`void`\>

Called when the export process starts.

#### Parameters

• **context**: [`ExportContext`](ExportContext.md)

#### Returns

`Promise`\<`void`\>

#### Defined in

joplin-plugin-api/dist/types.d.ts:91

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

joplin-plugin-api/dist/types.d.ts:95

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

joplin-plugin-api/dist/types.d.ts:99
