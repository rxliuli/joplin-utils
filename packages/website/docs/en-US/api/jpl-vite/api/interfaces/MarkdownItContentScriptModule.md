[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / MarkdownItContentScriptModule

# Interface: MarkdownItContentScriptModule

## Extends

- `Omit`\<[`ContentScriptModule`](ContentScriptModule.md), `"plugin"`\>

## Properties

### assets()?

> `optional` **assets**: () => `void`

#### Returns

`void`

#### Inherited from

`Omit.assets`

#### Defined in

joplin-plugin-api/dist/types.d.ts:405

---

### onLoaded()?

> `optional` **onLoaded**: (`event`) => `void`

#### Parameters

• **event**: [`ContentScriptModuleLoadedEvent`](ContentScriptModuleLoadedEvent.md)

#### Returns

`void`

#### Inherited from

`Omit.onLoaded`

#### Defined in

joplin-plugin-api/dist/types.d.ts:403

---

### plugin()

> **plugin**: (`markdownIt`, `options`) => `any`

#### Parameters

• **markdownIt**: `any`

• **options**: `any`

#### Returns

`any`

#### Defined in

joplin-plugin-api/dist/types.d.ts:408
