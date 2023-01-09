# FAQ

## Show error message **Joplin's token/port is set incorrectly, unable to access Joplin service!**

Please try to execute the following command in CMD/Bash, if there is no problem, it should return **JoplinClipperServer**, otherwise you need File an issue with Joplin.

```cmd
curl http://127.0.0.1:41184/ping
```

On Linux make sure your `/etc/hosts` contains the following entry

```vim
127.0.0.1  localhost
```

## Not opened in VSCode after clicking

Please refer to the official default external editor settings: [How can I edit my note in an external text editor?](https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor)

## How to list joplin notes opened by VSCode

Although there is no official support, you can use the shortcut key `c+j c+o` to list the last modified 20 joplin notes to do similar things.

## No list displayed in the sidebar

After checking joplin configuration items, restart VSCode.

## Clicking on the sidebar fails to open the note

There may be multiple reasons for this problem

1. Check if you can open vscode through the **switch external editing** function in joplin
   1. If it can't be opened, you need to check the text editor command in the settings page, you need to set an editor, or there are invalid settings, refer to: <https://github.com/laurent22/joplin/issues/5921#issuecomment-1002692774>
   2. If you still have problems, please go to the official joplin project [file an issue](https://github.com/laurent22/joplin/issues)
2. Please use version v1.4 or higher, because it contains the necessary [action api](https://discourse.joplinapp.org/t/9277/11), for example, open notes based on noteId in VSCode
3. Make sure to install the Joplin desktop version on the current computer. The plug-in does not support CLI, because it does not include the above action api, refer to: <https://discourse.joplinapp.org/t/16735>
4. Check whether the following command can be executed normally, if it still cannot be opened in the editor, you may want to ask @laurent22

   ```sh
   curl --location --request POST'http://localhost:41184/services/externalEditWatcher?token=***' \
   --header'Content-Type: application/json' \
   --data-raw'{
    "action": "openAndWatch",
    "noteId": "257f6a9dacc1409580ee526d50ac4d49"
   }'
   ```

## Windows 10 cannot upload a cut version of the picture

Powershell may not be installed, enter powershell in CMD to check

```sh
powershell
```

![powershell](https://user-images.githubusercontent.com/24560368/115563663-5d855c00-a2ea-11eb-8b08-dfa7dd773601.png)

If you are prompted to `spawn powershell ENOENT`, you need to install powershell, refer to: [Install PowerShell on Windows](https://docs.microsoft.com/en-us/powershell/scripting/install/installing-powershell-core-on-windows?view=powershell-7.1)

## How to use plugins in two synchronized vscode configurations

By default, joplin on each computer will generate a random token, but you can modify it manually. The general configuration file is _~/.config/joplin-desktop/settings.json_, you only need to modify the `api. The token` is the same token.

![Manually set joplin's token](/images/manually-set-token-of-joplin.png)

> Reference: <https://github.com/rxliuli/joplin-utils/issues/25>

## markdown preview can't display images

When you first use the joplin vscode plugin, you may encounter the problem of not being able to view images in markdown preview, there is a prompt in the preview **Some content has been disabled in this document**, this problem can be solved very simply.

1. Enter the command `markdown.showPreviewSecuritySelector`
2. Select `Allow insecure local content` in the list

> [vscode markdown document](https://code.visualstudio.com/docs/languages/markdown#_markdown-preview-security)

## Incompatible Plugin Markdown Preview Enhanced

Since Markdown Preview Enhanced builds its own webview page for rendering markdown files and does not care about the [markdown-it extension-guides api](https://code.visualstudio.com/api/) provided by vscode extension-guides/markdown-extension), it is now incompatible and recommends using [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang. markdown-all-in-one), reference: <https://github.com/rxliuli/joplin-utils/issues/46>
