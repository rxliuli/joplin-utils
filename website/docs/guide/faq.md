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

1. Please use version v1.4 or higher, because it contains the necessary [action api](https://discourse.joplinapp.org/t/hope-that-the-web-api-adds-the-following-features-to-support-the-development-of-third-party-extensions/9277/11?u=rxliuli) , For example, open notes based on noteId in VSCode
2. The current version is Joplin Desktop. The plug-in does not support CLI, because it does not include the above action api. Reference: <https://discourse.joplinapp.org/t/action-api-not-setup-in-1-6-4-cli/16735>
3. Check whether the following command can be executed normally, if it still cannot be opened in the editor, you may want to ask @laurent22

   ```sh
   curl --location --request POST 'http://localhost:27584/services/externalEditWatcher?token=***' \
   --header 'Content-Type: application/json' \
   --data-raw '{
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
