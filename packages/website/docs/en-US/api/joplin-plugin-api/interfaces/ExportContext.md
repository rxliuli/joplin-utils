[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ExportContext

# Interface: ExportContext

## Properties

### destPath

> **destPath**: `string`

#### Defined in

[types.ts:180](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L180)

---

### options

> **options**: [`ExportOptions`](ExportOptions.md)

#### Defined in

[types.ts:181](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L181)

---

### userData?

> `optional` **userData**: `any`

You can attach your own custom data using this property - it will then be passed to each event handler, allowing you to keep state from one event to the next.

#### Defined in

[types.ts:186](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L186)
