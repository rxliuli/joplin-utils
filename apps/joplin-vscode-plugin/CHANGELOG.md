# Release Notes

## 0.5.2

- chore(joplin-vscode-plugin): 删除不需要的 markdown 目录
- refactor(joplin-vscode-plugin): 在 joplin-vscode-plugin 项目中实用 @liuli-util/i18next-util
- docs(joplin-vscode-plugin): 修复错误的引用链接
- chore(joplin-vscode-plugin): 使用 rollup 替代 liuli-cli 打包，因为 rollup 合并了辅助函数 defineConfig 的需求
- docs(joplin-vscode-plugin): 更新链接笔记的 gif，包含跳转的演示
- docs(joplin-vscode-plugin): 修复 gif 链接错误
- fix(joplin-vscode-plugin): 修复 rollup.config.ts 的一个类型不兼容错误
- docs(joplin-vscode-plugin): 添加复制笔记链接的 gif 演示
- chore(joplin-vscode-plugin): 修改打包配置，为支持动态导入使用 dir 而非 file 出口选项，删除 esbuild 打包配置
- docs(joplin-vscode-plugin): 更新文档中的引用和图片链接错误
- feat(joplin-vscode-plugin): 在粘贴时添加更友好的提示信息
- build(joplin-vscode-plugin): 由于 rollup 无法捆绑 monorepo 的依赖项，所以添加使用 esbuild 进行捆绑的脚本
- feat(joplin-vscode-plugin): 修改 registerCommand 添加错误捕获，并将之添加到输出面板中便于用户反馈问题

## 0.5.1

- docs: I want to migrate to a new warehouse, update the link in the document

## 0.5.0

- feat: implement cut-and-paste function for moving notes, directory location
- build: use rollup to pack and reduce the extension size to 500k
- feat: Manage the list of tabs for notes by **Selected => Recently Used => Other**

## 0.4.5

- fix: Fix the line wrapping problem caused by the `\r` character at the end of the line that may appear when copying
  the internal reference of the note

## 0.4.4

Attachment-related operation optimization

- When creating an attachment resource, insert it as an image if it is an svg
- Create an attachment with a title that is always the full name of the file
- When opening an attachment, determine if the title does not contain a suffix before splicing the suffix
- If you check that the attached resource is markdown/drawio/km/svg or something like that, try to open it with vscode

![gif](https://github.com/rxliuli/joplin-vscode-plugin/raw/master/docs/_media/attachment.gif)

## 0.4.3

- Remove sentry.io's error report support

## 0.4.2

- Disable prompt message when closing notes
- Fix bug that notes <=> resources mapping relationship is not saved when listening to resources
- Upgrade toolkit version of @liuli-util/\*
- Fix the bug that the listener file location is wrong when modifying attached resources

## 0.4.1

- No longer include suffixes in names when uploading images and creating attachments
- Use `context.globalStorageUri.fsPath` instead of the deprecated API `context.globalStoragePath`

## 0.4.0

- Pop-up alert when notes or attachments are opened and found not to exist
- The list of deleted attachments is sorted in reverse order of the user's update time
- Add instructions for deleting attachment resources
- Open an attachment immediately after it has been manually created
- Update roadmap
- Update get-started documentation to sync with English and fix some of the issues
-

Added [documentation for recommended vscode extensions](https://rxliuli.com/joplin-vscode-plugin/#/_navbar/get-started/recommended-extension)

- Use `vscode.open` command to open files with `.drawio/.km` suffix if the corresponding extension is installed
- Fix a problem with translated text

## 0.3.3

- Implemented the function of deleting tags
- Completed internationalization of alert messages

## 0.3.2

- Integrated [sentry](https://sentry.io/) error log analysis

## 0.3.1

- Provide keybinding for View: Show Joplin at Ctrl+J Ctrl+J. Add a sensible replacement binding for clobbered command
  workbench.action.togglePanel at Ctrl+K Ctrl+J.
- Update quick-start by fleshing out with more detail. Of particular importance is describing where to find the
  Authorization token in Joplin Desktop and explaining away the clobbering of Ctrl+J system keybinding. Broke up text in
  a way that gives the impression of good document formatting despite the constraints of markdown.

## 0.3.0

- Implement the right-click menu to create attachment file resources
- Realize the label management function of notes
- Implement the command to create tags
- Add two scripts [Remove unquoted tags] and [Retrieve orphan notes]

## 0.2.2

- Fix the error that globalContext is not initialized when uploading a cut version of the picture
- Realize configuration items that are not reminded when deleting

## 0.2.1

- Joplin loads the last 20 notes edited by default when searching
- Bind shortcut keys for joplin search `ctrl+j ctrl+o`
- Modify some prompt messages to English (subsequent to internationalization)

## 0.2.0

- Synchronize the api changes of joplin v1.4.\*

## 0.1.10

- Support clicking joplin-related links in the editor, including
  - Attached resource files, use the system default program to open
  - Quote notes, use Joplin to open in a new tab
- Fixed the problem that Joplin attachment resources could not be opened in markdown preview

## 0.1.7

- Support the use of shortcut keys `ctrl+alt+u/ctrl+alt+e`
- Support uploading clipboard pictures and automatically paste them into the editor
- Support selecting pictures in the file manager and automatically paste them into the editor

## 0.1.6

- Support joplin custom `[](:/)` link

## 0.1.5

- Support copying the joplin note link of the vscode:// protocol in vscode
- Support open _vscode://rxliuli.joplin-vscode-plugin/open?id=_ link in vscode

## 0.1.4

- Support custom note display sorting, currently supports `alphabetical/default` sorting, and supports reverse order
- Add the official website of this plugin (lack of English translation)
- Fix some prompt English grammar issues
- Fix the problem of `token/port` in the code in the development environment

## 0.1.3

- Click the note to switch to the corresponding directory
- Only keep the shortcut keys for rename and delete
- Fixed the problem that the cursor was forced to transfer to the editor after clicking the note (not completely
  resolved)

## 0.1.2

- When activating Joplin for vscode, first call the ping interface once, if it fails, add obvious error message

## 0.1.1

- Update instructions, add screenshots

## 0.1.0

- Open directly after creating notes
- Turn off sync after closing notes
- The directory tree in VSCode is automatically updated regularly when doing operations on directories/notes in Joplin
- Add development environment variables
- Support internationalization
- Replace icon with joplin

## 0.0.1

- There is a tab in VSCode to show the directory tree
- Create/update/delete directories/notes in VSCode
- Click and edit directly in VSCode
- Search all notes in VSCode
