[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / ContentScriptType

# Enumeration: ContentScriptType

## Enumeration Members

### CodeMirrorPlugin

> **CodeMirrorPlugin**: `"codeMirrorPlugin"`

Registers a new CodeMirror plugin, which should follow the template
below.

```javascript
module.exports = {
  default: function (context) {
    return {
      plugin: function (CodeMirror) {
        // ...
      },
      codeMirrorResources: [],
      codeMirrorOptions: {
        // ...
      },
      assets: {
        // ...
      },
    }
  },
}
```

- The `context` argument is currently unused but could be used later on
  to provide access to your own plugin so that the content script and
  plugin can communicate.

- The `plugin` key is your CodeMirror plugin. This is where you can
  register new commands with CodeMirror or interact with the CodeMirror
  instance as needed.

- The `codeMirrorResources` key is an array of CodeMirror resources that
  will be loaded and attached to the CodeMirror module. These are made up
  of addons, keymaps, and modes. For example, for a plugin that want's to
  enable clojure highlighting in code blocks. `codeMirrorResources` would
  be set to `['mode/clojure/clojure']`.

- The `codeMirrorOptions` key contains all the
  [CodeMirror](https://codemirror.net/doc/manual.html#config) options
  that will be set or changed by this plugin. New options can alse be
  declared via
  [`CodeMirror.defineOption`](https://codemirror.net/doc/manual.html#defineOption),
  and then have their value set here. For example, a plugin that enables
  line numbers would set `codeMirrorOptions` to `{'lineNumbers': true}`.

- Using the **optional** `assets` key you may specify **only** CSS assets
  that should be loaded in the rendered HTML document. Check for example
  the Joplin [Mermaid
  plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
  to see how the data should be structured.

One of the `plugin`, `codeMirrorResources`, or `codeMirrorOptions` keys
must be provided for the plugin to be valid. Having multiple or all
provided is also okay.

See also the [demo
plugin](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/codemirror_content_script)
for an example of all these keys being used in one plugin.

## Posting messages from the content script to your plugin

In order to post messages to the plugin, you can use the postMessage
function passed to the [context](../interfaces/ContentScriptContext.md).

```javascript
const response = await context.postMessage('messageFromCodeMirrorContentScript')
```

When you post a message, the plugin can send back a `response` thus
allowing two-way communication:

```javascript
await joplin.contentScripts.onMessage(contentScriptId, (message) => {
  // Process message
  return response // Can be any object, string or number
})
```

See JoplinContentScripts.onMessage for more details, as well as
the [postMessage
demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).

#### Defined in

[types.ts:749](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L749)

---

### MarkdownItPlugin

> **MarkdownItPlugin**: `"markdownItPlugin"`

Registers a new Markdown-It plugin, which should follow the template
below.

```javascript
module.exports = {
  default: function (context) {
    return {
      plugin: function (markdownIt, pluginOptions) {
        // ...
      },
      assets: {
        // ...
      },
    }
  },
}
```

See [the
demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/content_script)
for a simple Markdown-it plugin example.

## Exported members

- The `context` argument is currently unused but could be used later on
  to provide access to your own plugin so that the content script and
  plugin can communicate.

- The **required** `plugin` key is the actual Markdown-It plugin - check
  the [official doc](https://github.com/markdown-it/markdown-it) for more
  information.

- Using the **optional** `assets` key you may specify assets such as JS
  or CSS that should be loaded in the rendered HTML document. Check for
  example the Joplin [Mermaid
  plugin](https://github.com/laurent22/joplin/blob/dev/packages/renderer/MdToHtml/rules/mermaid.ts)
  to see how the data should be structured.

## Getting the settings from the renderer

You can access your plugin settings from the renderer by calling
`pluginOptions.settingValue("your-setting-key')`.

## Posting messages from the content script to your plugin

The application provides the following function to allow executing
commands from the rendered HTML code:

```javascript
const response = await webviewApi.postMessage(contentScriptId, message)
```

- `contentScriptId` is the ID you've defined when you registered the
  content script. You can retrieve it from the
  [context](../interfaces/ContentScriptContext.md).
- `message` can be any basic JavaScript type (number, string, plain
  object), but it cannot be a function or class instance.

When you post a message, the plugin can send back a `response` thus
allowing two-way communication:

```javascript
await joplin.contentScripts.onMessage(contentScriptId, (message) => {
  // Process message
  return response // Can be any object, string or number
})
```

See JoplinContentScripts.onMessage for more details, as well as
the [postMessage
demo](https://github.com/laurent22/joplin/tree/dev/packages/app-cli/tests/support/plugins/post_messages).

## Registering an existing Markdown-it plugin

To include a regular Markdown-It plugin, that doesn't make use of any
Joplin-specific features, you would simply create a file such as this:

```javascript
module.exports = {
    default: function(context) {
        return {
            plugin: require('markdown-it-toc-done-right');
        }
    }
}
```

#### Defined in

[types.ts:664](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L664)
