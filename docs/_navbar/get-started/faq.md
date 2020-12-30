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

## No list displayed in the sidebar

After checking joplin configuration items, restart VSCode.

## Clicking on the sidebar fails to open the note

Please use the last version [v1.0.224](https://github.com/laurent22/joplin/releases/tag/v1.0.224), because it contains several new APIs, such as opening notes according to noteId in VSCode .
