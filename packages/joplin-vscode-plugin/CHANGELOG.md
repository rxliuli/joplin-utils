# Release Notes

## 1.1.1

- fix: Fixed the error that baseUrl was not used when checked joplin clipper service

## 1.1.0

- feat: add a menu item for searching in notebooks

## 1.0.1

- fix: note/resource name clashes and loss of data

## 1.0.0

- chore: The functional integration of joplin is basically stable, so release 1.0.0

## 0.9.1

- fix: fix the issue that uploading a file without specifying a filename will cause a mime error
- feat: update dependency nodejs to 18, no longer include fetch/FormData polyfill

## 0.9.0

- feat: support three new commands, show currently referenced note, show referenced note, insert note link
- feat: support audio and video display in joplin
- feat: upgrade joplin-api, no longer rely on node-fetch/form-data, and fill in by itself

## 0.8.3

- chore: esm migration

## 0.8.2

- fix: fix the bug that the title is not set correctly when creating an attachment
- chore: build.js => build.ts

## 0.8.1

- fix: restore cut and paste function
- chore: replace esno => tsx
- feat: register markdown languages together to avoid processing md files of non-joplin notes
- feat: Change the log storage location to avoid the problem that the vscode log directory changes frequently and the logs are not concentrated in one directory, and save possible error messages to the log when the command execution fails
- chore: update engines.vscode

## 0.8.0

- feat: support dragging the sidebar notes into the text
  ![Drag and drop notes to body](https://user-images.githubusercontent.com/24560368/190853895-d42c4907-65b4-4f6b-a987-eca3d9c8c542.gif)
- refactor: rename FolderOrNote => JoplinTreeItem
- feat: remove cut and paste commands that are no longer needed
- feat: implement the drag and drop function of the sidebar
  ![Notes and Table of Contents Drag and Drop](https://user-images.githubusercontent.com/24560368/190853959-1ca1dfc7-f71b-435d-b6dc-b65a3e07293f.gif)
- feat: support drag and drop file upload from file manager to joplin
  ![Drag and drop files to notes](https://user-images.githubusercontent.com/24560368/190854218-62b136b5-0ddf-4cb7-adc3-cb0abb6b1db4.gif)

## 0.7.10

- fix: <https://github.com/rxliuli/joplin-utils/issues/47>

## 0.7.9

- feat: Support excalidraw plug-in to open whiteboard images

## 0.7.8

- feat: Fix the bug that panel cannot be hidden by ctrl+j,ctrl+j
- feat: Support editing specified resources directly with shortcut keys

## 0.7.7

- fix: Fix the bug that the sidebar icon cannot be displayed.

## 0.7.6

- feat: add winston logging to avoid feedback problems
- fix: fix the bug that temporary notes and resource directories are not created when the plugin is initialized

## 0.7.5

Major update

Fixed the file monitor error caused by emptying the temporary notes and resource directories when vscode is started, so that only the last vscode window can properly monitor the update of notes, because of this problem I lost a note, please update to v0.7.5.

Details

- chore: add license to avoid prompting every time you pack
- fix: fix file monitor bug caused by emptying the temporary directory when starting the plugin
- refactor: Refactor the jump function related to the joplin note link

## 0.7.4

- feat: update handling of note titles, intelligently handle the # of titles when opening or updating a note, ref: <https://discourse.joplinapp.org/t/9624/81>

## 0.7.3

- fix: fix the bug that temporary files and listeners are not deleted when deleting notes
- feat: Smart stitching of title and content when opening notes
- feat: Update the title while editing the note, ref: <https://discourse.joplinapp.org/t/9624/77>

## 0.7.2

- refactor: remove lodash-es dependency
- docs: update documentation on <https://joplin-utils.rxliuli.com>
- feat: support setting remote server address via baseUrl

## 0.7.1

- chore: update the minimum compatible version of vscode to 1.66.2 (the latest version)
- refactor: remove axios dependency, refactor with fetch (reduce bundle size by about 50k)

## 0.7.0

- feat: Remove programProfilePath configuration, download resources via joplin api
- refactor: no longer force title update when updating resources
- fix: fix the bug that the title is forced to be renamed after the resource is modified
- feat: support open resource, fix the sidebar will lose focus when click current note
- feat: Implement editing resources (not finished)
- fix: Fix the bug that resources can't be clicked immediately after they are created.
- fix: fix the bug that the link inserted automatically when creating resources is wrong
- fix: Fix the bug that mouse hovering and clicking jump to internal links and resources
- fix: Fix the problem that image resources cannot be previewed.
- fix: Fix the bug that you can't jump to the referenced notes in notes
- refactor: use chokidar without binary dependencies instead of @parcel/watcher
- refactor: no longer use NoteActionApi
- refactor: some simple refactoring
- chore: remove nx, upgrade some dependencies
- refactor: refactor directories and unit tests, move them to the right place
- chore: replace rollup with esbuild for better performance
- docs: update documentation, add links to online sites
- feat: <https://github.com/rxliuli/joplin-utils/issues/26>

## 0.6.0

- feat: support waking up extensions with search shortcuts `c+j,c+o`
- chore: remove separate eslint configuration file from project, fix vscode environment variable not using NODE_ENV
- fix: fix setup/build errors in modules

## 0.5.3

- fix: Fix https://github.com/rxliuli/joplin-utils/issues/21
- feat: use the rollup plugin of i18next-dts-gen
- chore: remove unrelated dependencies, fix minor issues
- docs(joplin-vscode-plugin): fix a minor issue with update description information

## 0.5.2

- chore(joplin-vscode-plugin): remove unneeded markdown directories
- refactor(joplin-vscode-plugin): utility @liuli-util/i18next-util in the joplin-vscode-plugin project
- docs(joplin-vscode-plugin): fix wrong reference links
- chore(joplin-vscode-plugin): use rollup instead of liuli-cli for packaging, since rollup merges the need for defineConfig helper function
- docs(joplin-vscode-plugin): update the linked notes gif to include a jumping demo
- docs(joplin-vscode-plugin): fix gif link error
- fix(joplin-vscode-plugin): fix a type incompatibility bug in rollup.config.ts
- docs(joplin-vscode-plugin): add a gif demo for copying notes links
- chore(joplin-vscode-plugin): change package configuration to use dir instead of file export option to support dynamic import, remove esbuild package configuration
- docs(joplin-vscode-plugin): update references and image linking errors in documentation
- feat(joplin-vscode-plugin): add a more friendly message when pasting
- build(joplin-vscode-plugin): add script for bundling with esbuild since rollup cannot bundle monorepo dependencies
- feat(joplin-vscode-plugin): modify registerCommand to add error catching and add it to the output panel for user feedback

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
