[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / ContentScriptContext

# Interface: ContentScriptContext

When a content script is initialised, it receives a `context` object.

## Properties

### contentScriptId

> **contentScriptId**: `string`

The content script ID, which may be necessary to post messages

#### Defined in

joplin-plugin-api/dist/types.d.ts:393

---

### pluginId

> **pluginId**: `string`

The plugin ID that registered this content script

#### Defined in

joplin-plugin-api/dist/types.d.ts:389

---

### postMessage

> **postMessage**: [`PostMessageHandler`](../type-aliases/PostMessageHandler.md)

Can be used by CodeMirror content scripts to post a message to the plugin

#### Defined in

joplin-plugin-api/dist/types.d.ts:397
