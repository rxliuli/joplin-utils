[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / CodeMirrorControl

# Interface: CodeMirrorControl

## Properties

### cm6

> **cm6**: `any`

#### Defined in

[types.ts:543](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L543)

---

### editor

> **editor**: `any`

Points to a CodeMirror 6 EditorView instance.

#### Defined in

[types.ts:542](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L542)

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

[types.ts:552](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L552)

## Methods

### addExtension()

> **addExtension**(`extension`): `void`

`extension` should be a [CodeMirror 6 extension](https://codemirror.net/docs/ref/#state.Extension).

#### Parameters

• **extension**: `any`

#### Returns

`void`

#### Defined in

[types.ts:546](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L546)

---

### execCommand()

> **execCommand**(`name`, ...`args`): `any`

#### Parameters

• **name**: `string`

• ...**args**: `any`[]

#### Returns

`any`

#### Defined in

[types.ts:549](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L549)

---

### registerCommand()

> **registerCommand**(`name`, `callback`): `void`

#### Parameters

• **name**: `string`

• **callback**: `EditorCommandCallback`

#### Returns

`void`

#### Defined in

[types.ts:550](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L550)

---

### supportsCommand()

> **supportsCommand**(`name`): `boolean`

#### Parameters

• **name**: `string`

#### Returns

`boolean`

#### Defined in

[types.ts:548](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L548)
