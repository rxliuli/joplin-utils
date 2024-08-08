[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / CodeMirrorControl

# Interface: CodeMirrorControl

## Properties

### cm6

> **cm6**: `any`

#### Defined in

joplin-plugin-api/dist/types.d.ts:414

---

### editor

> **editor**: `any`

Points to a CodeMirror 6 EditorView instance.

#### Defined in

joplin-plugin-api/dist/types.d.ts:413

---

### joplinExtensions

> **joplinExtensions**: `object`

#### enableLanguageDataAutocomplete

> **enableLanguageDataAutocomplete**: `object`

Creates an extension that enables or disables [`languageData`-based autocompletion](https://codemirror.net/docs/ref/#autocomplete.autocompletion^config.override).

#### enableLanguageDataAutocomplete.of()

> **enableLanguageDataAutocomplete.of**: (`enabled`) => `any`

##### Parameters

• **enabled**: `boolean`

##### Returns

`any`

#### completionSource()

Returns a [CodeMirror 6 extension](https://codemirror.net/docs/ref/#state.Extension) that
registers the given [CompletionSource](https://codemirror.net/docs/ref/#autocomplete.CompletionSource).

Use this extension rather than the built-in CodeMirror [`autocompletion`](https://codemirror.net/docs/ref/#autocomplete.autocompletion)
if you don't want to use [languageData-based autocompletion](https://codemirror.net/docs/ref/#autocomplete.autocompletion^config.override).

Using `autocompletion({ override: [ ... ]})` causes errors when done by multiple plugins.

##### Parameters

• **completionSource**: `any`

##### Returns

`any`

#### Defined in

joplin-plugin-api/dist/types.d.ts:420

## Methods

### addExtension()

> **addExtension**(`extension`): `void`

`extension` should be a [CodeMirror 6 extension](https://codemirror.net/docs/ref/#state.Extension).

#### Parameters

• **extension**: `any`

#### Returns

`void`

#### Defined in

joplin-plugin-api/dist/types.d.ts:416

---

### execCommand()

> **execCommand**(`name`, ...`args`): `any`

#### Parameters

• **name**: `string`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

joplin-plugin-api/dist/types.d.ts:418

---

### registerCommand()

> **registerCommand**(`name`, `callback`): `void`

#### Parameters

• **name**: `string`

• **callback**: `EditorCommandCallback`

#### Returns

`void`

#### Defined in

joplin-plugin-api/dist/types.d.ts:419

---

### supportsCommand()

> **supportsCommand**(`name`): `boolean`

#### Parameters

• **name**: `string`

#### Returns

`boolean`

#### Defined in

joplin-plugin-api/dist/types.d.ts:417
