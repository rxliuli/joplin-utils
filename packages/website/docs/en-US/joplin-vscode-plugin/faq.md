# Frequently Asked Questions

## Why develop this plugin

1. As a professional editor, vscode's editing function cannot be compared with note-taking tools, for example, shortcut key support.
2. vscode is not only an editor but also has a very large plugin ecosystem, so it has implemented markdown formatting, lint verification, pdf export, and other all functions. We don't have to recreate the editor's wheel within the note-taking tools - possibly a square wheel.
3. In fact, I have been using vscode to edit markdown documents and use git + vscode to store company-related documents. At the same time, joplin is used for storing personal notes, but after a while, I found that I needed the sync / search function of vscode + joplin.

Therefore, I have written this plugin for people with the same needs.

## Error message displayed **Joplin’s token/port is set incorrectly, unable to access Joplin service!**

Please try the following command in CMD/Bash, it should return **JoplinClipperServer** if there's no problem; otherwise, you need to raise an issue with Joplin official.

```cmd
curl http://127.0.0.1:41184/ping
```

## How to list Joplin notes opened in VSCode

Although there is no official support, you can use `c+j c+o` shortcut key to list the last 20 modified Joplin notes to do similar things.

> The reason for the lack of official support might be the overlap of their functions. Besides, vscode's recently opened files are not just the files currently being opened by the editor, but also include the closed ones.

## The plugin does not display the list

Please check Joplin's configuration items and restart VSCode.

## Unable to open a note by clicking in the sidebar

This problem may have multiple reasons

1. Check if VSCode can be opened via the "Toggle External Editor" function in Joplin
   1. If not, you need to check the text editor command in the settings page, you need to set an editor, or there might be invalid settings, reference:<https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774>
   2. If the problem remains, please [raise an issue](https://github.com/laurent22/joplin/issues) in the official Joplin project
2. Please use version v1.4 or higher, because it includes the necessary [action api](https://discourse.joplinapp.org/t/9277/11), such as opening a note in VSCode based on noteId
3. Make sure to install Joplin desktop version on your current computer, this plugin doesn't support CLI, because it doesn't contain the aforementioned action api, reference: <https://discourse.joplinapp.org/t/16735>
4. Check if the following command can be properly executed, if it still can't be opened in the editor, you might need to ask @laurent22

```sh
curl --location --request POST 'http://localhost:41184/services/externalEditWatcher?token=***' \
   --header 'Content-Type: application/json' \
   --data-raw '{
    "action": "openAndWatch",
    "noteId": "257f6a9dacc1409580ee526d50ac4d49"
   }'
```

## Windows 10 cannot upload clipboard images

It might be because powershell is not installed, check by entering powershell in CMD

```sh
powershell
```

![powershell](https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png)

If the prompt `spawn powershell ENOENT` is shown, you need to install powershell, reference: [Installing PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)

## How to use plugins with two synced vscode configurations

By default, Joplin on each computer will generate a random token, but you can manually modify it, the general configuration file is located in _\~/.config/joplin-desktop/settings.json_, you just need to change the `api.token` to the same token.

![Manually set joplin's token](/images/manually-set-token-of-joplin.png)

> Reference: <https://github.com/rxliuli/joplin-utils/issues/25>

## Markdown preview cannot display images

When you use the Joplin vscode plugin for the first time, you might encounter a problem where you cannot view images in the markdown preview. There is a prompt **Some content has been disabled in this document** in the preview, this problem can be simply solved.

1. Enter command `markdown.showPreviewSecuritySelector`
2. Choose `Allow insecure local content` from the list

> [vscode markdown document](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)

## Incompatible plugin Markdown Preview Enhanced

Since Markdown Preview Enhanced has built its own markdown file rendering webview page, and does not care about the [markdown-it extension interface api](https://code.visualstudio.com/api/extension-guides/markdown-extension) provided by vscode, it's currently incompatible. We recommend using [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one), reference: <https://github.com/rxliuli/joplin-utils/issues/46>

## Unable to paste images into notes on Linux

First install [xclip](https://github.com/astrand/xclip) and [wl-clipboard](https://github.com/bugaevc/wl-clipboard).
