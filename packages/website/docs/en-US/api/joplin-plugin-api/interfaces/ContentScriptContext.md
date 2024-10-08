[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ContentScriptContext

# Interface: ContentScriptContext

When a content script is initialised, it receives a `context` object.

## Properties

### contentScriptId

> **contentScriptId**: `string`

The content script ID, which may be necessary to post messages

#### Defined in

[types.ts:516](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-plugin-api/src/types.ts#L516)

---

### pluginId

> **pluginId**: `string`

The plugin ID that registered this content script

#### Defined in

[types.ts:511](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-plugin-api/src/types.ts#L511)

---

### postMessage

> **postMessage**: [`PostMessageHandler`](../type-aliases/PostMessageHandler.md)

Can be used by CodeMirror content scripts to post a message to the plugin

#### Defined in

[types.ts:521](https://github.com/rxliuli/joplin-utils/blob/485409801cf7c952cfefe9e29020115fe6abec36/packages/joplin-plugin-api/src/types.ts#L521)
