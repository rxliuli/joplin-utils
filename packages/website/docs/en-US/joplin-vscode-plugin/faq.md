# Frequently Asked Questions

## Why Develop This Plugin

1. As a professional editor, VSCode’s editing features vastly outperform those of note-taking tools. For instance, it has extensive shortcut support.
2. VSCode is not just an editor but boasts a massive ecosystem of plugins. It already supports markdown formatting, lint checks, PDF exports, and many other functions. We don’t need to reinvent the wheel, which might end up being a square one, within a note-taking tool.
3. Personally, I have been using VSCode to edit markdown documents and to store company-related documents with git + VSCode. Also, I’ve been using Joplin for personal notes, yet after a while, I found that I needed synchronization/search functionality between VSCode and Joplin.

Thus, I developed this plugin for others with similar needs.

## Error Message **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

Please try executing the following command in CMD/Bash. If there are no issues, it should return **JoplinClipperServer**. Otherwise, consider filing an issue with Joplin.

```cmd
curl http://127.0.0.1:41184/ping
```

## How to List Joplin Notes Opened in VSCode

Though there isn't official support, you can use the shortcut `c+j c+o` to list the 20 most recently modified Joplin notes, achieving a similar effect.

> The main reason for the lack of formal support might be the functional overlap between the two. Additionally, VSCode’s list of recently opened files includes more than just the files currently open in the editor, encompassing even closed files.

## Unable to Open Notes from the Sidebar

This issue could arise for several reasons:

1. Check if you can open VSCode through the **Toggle External Editing** feature in Joplin.
   1. If it doesn’t open, inspect the text editor command in Joplin’s settings. Ensure a valid editor setting is applied. Refer to: <https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774>
   2. If the issue persists, file an [issue with Joplin](https://github.com/laurent22/joplin/issues).
2. Use version v1.4 or higher as it includes necessary [action APIs](https://discourse.joplinapp.org/t/9277/11) for functionalities like opening notes in VSCode based on noteId.
3. Ensure Joplin Desktop is installed on the current computer. This plugin does not support the CLI version as it lacks the aforementioned action APIs. Refer to: <https://discourse.joplinapp.org/t/16735>
4. Verify if the following command can execute correctly. If you still can't open notes in the editor, consider reaching out to @laurent22.

   ```sh
   curl --location --request POST 'http://localhost:41184/services/externalEditWatcher?token=***' \
   --header 'Content-Type: application/json' \
   --data-raw '{
    "action": "openAndWatch",
    "noteId": "257f6a9dacc1409580ee526d50ac4d49"
   }'
   ```

## Unable to Upload Clipboard Images on Windows 10

This could be due to missing PowerShell. Check by typing PowerShell in CMD.

```sh
powershell
```

![powershell](https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png)

If prompted with `spawn powershell ENOENT`, you need to install PowerShell. Refer to: [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)

## How to Use the Plugin with Two Synchronized VSCode Configurations

By default, Joplin generates a random token for each computer. However, you can manually modify it. Usually, the configuration file is located at _\~/.config/joplin-desktop/settings.json_. You just need to set the `api.token` to the same token.

![manually-set-token-of-joplin](/images/manually-set-token-of-joplin.png)

> Reference: <https://github.com/rxliuli/joplin-utils/issues/25>

## Markdown Preview Can't Display Images

When you first use the Joplin VSCode plugin, you may encounter issues with images not displaying in the markdown preview. The preview might show a message stating **Some content has been disabled in this document**. This can be easily resolved.

1. Enter the command `markdown.showPreviewSecuritySelector`.
2. Select `Allow insecure local content` from the list.

> [VSCode Markdown Documentation](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)

## Incompatibility with Markdown Preview Enhanced Plugin

Since Markdown Preview Enhanced constructs its own webview page for rendering markdown files and disregards the [markdown-it extension interface API](https://code.visualstudio.com/api/extension-guides/markdown-extension) provided by VSCode, it’s currently incompatible. It is recommended to use [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one) instead. Refer to: <https://github.com/rxliuli/joplin-utils/issues/46>

## Unable to Paste Images into Notes on Linux

Please install [xclip](https://github.com/astrand/xclip) and [wl-clipboard](https://github.com/bugaevc/wl-clipboard) first.
