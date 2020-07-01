# joplin-vscode-plugin

> [English](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/README.md), [简体中文](https://github.com/rxliuli/joplin-vscode-plugin/blob/master/README.ZH_CN.md)

The integration of joplin in VSCode currently allows direct operations on directories and notes, while supporting the search function.

![Preview](https://cdn.jsdelivr.net/gh/rxliuli/img-bed/20200623085740.png)

## Features

- There is a tab in VSCode to show the directory tree
- Create/update/delete directories/notes in VSCode
- Click and edit directly in VSCode
- Search all notes in VSCode

## Requirements

- [Joplin Pre v1.0.221](https://github.com/laurent22/joplin/releases/tag/v1.0.221)
- VSCode version> v1.45.0

## Extension Settings

- `joplin.token`: token for joplin web service
- `joplin.port`: port of joplin web service, default is 41184

## Known Issues

- Lack of shortcut key support

## Release Notes

### 0.1.2

- When activating Joplin for vscode, first call the ping interface once, if it fails, add obvious error message

### 0.1.1

- Update instructions, add screenshots

### 0.1.0

- Open directly after creating notes
- Turn off sync after closing notes
- The directory tree in VSCode is automatically updated regularly when doing operations on directories/notes in Joplin
- Add development environment variables
- Support internationalization
- Replace icon with joplin

### 0.0.1

- There is a tab in VSCode to show the directory tree
- Create/update/delete directories/notes in VSCode
- Click and edit directly in VSCode
- Search all notes in VSCode

## Use Markdown

**Note:** You can author your README using Visual Studio Code. Here are some useful editor keyboard shortcuts:

- Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
- Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
- Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

- [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
- [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**

## FAQ

### Show error message **Joplin's token/port is set incorrectly, unable to access Joplin service!**

Please try to execute the following command in CMD/Bash, if there is no problem, it should return **JoplinClipperServer**, otherwise you need File an issue with Joplin.

```cmd
curl http://127.0.0.1:41184/ping
```

### Not opened in VSCode after clicking

Please refer to the official default external editor settings: [How can I edit my note in an external text editor?](https://joplinapp.org/faq/#how-can-i-edit-my-note-in-an-external-text-editor)

### No list displayed in the sidebar

After checking joplin configuration items, restart VSCode.

### Clicking on the sidebar fails to open the note

Please use the Pre version [v1.0.224](https://github.com/laurent22/joplin/releases/tag/v1.0.224), because it contains several new APIs, such as opening notes according to noteId in VSCode .
