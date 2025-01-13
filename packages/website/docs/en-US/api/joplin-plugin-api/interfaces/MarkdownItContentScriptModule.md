[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / MarkdownItContentScriptModule

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

[types.ts:531](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L531)

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

[types.ts:529](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L529)

---

### plugin()

> **plugin**: (`markdownIt`, `options`) => `any`

#### Parameters

• **markdownIt**: `any`

• **options**: `any`

#### Returns

`any`

#### Defined in

[types.ts:535](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L535)
