[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ExportContext

# Interface: ExportContext

## Properties

### destPath

> **destPath**: `string`

#### Defined in

[types.ts:180](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L180)

---

### options

> **options**: [`ExportOptions`](ExportOptions.md)

#### Defined in

[types.ts:181](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L181)

---

### userData?

> `optional` **userData**: `any`

You can attach your own custom data using this property - it will then be passed to each event handler, allowing you to keep state from one event to the next.

#### Defined in

[types.ts:186](https://github.com/rxliuli/joplin-utils/blob/2bc4cdf0126f9cf3a3dcc1c3f49a6f42208c3387/packages/joplin-plugin-api/src/types.ts#L186)
