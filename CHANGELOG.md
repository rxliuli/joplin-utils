# Release Notes

## 0.4.0

- Pop-up alert when notes or attachments are opened and found not to exist
- The list of deleted attachments is sorted in reverse order of the user's update time
- Add instructions for deleting attachment resources
- Open an attachment immediately after it has been manually created
- Update roadmap
- Update get-started documentation to sync with English and fix some of the issues
- Added [documentation for recommended vscode extensions](https://rxliuli.com/joplin-vscode-plugin/#/_navbar/get-started/recommended-extension)
- Use `vscode.open` command to open files with `.drawio/.km` suffix if the corresponding extension is installed
- Fix a problem with translated text

## 0.3.3

- Implemented the function of deleting tags
- Completed internationalization of alert messages

## 0.3.2

- Integrated [sentry](https://sentry.io/) error log analysis

## 0.3.1

- Provide keybinding for View: Show Joplin at Ctrl+J Ctrl+J. Add a sensible replacement binding for clobbered command workbench.action.togglePanel at Ctrl+K Ctrl+J.
- Update quick-start by fleshing out with more detail. Of particular importance is describing where to find the Authorization token in Joplin Desktop and explaining away the clobbering of Ctrl+J system keybinding. Broke up text in a way that gives the impression of good document formatting despite the constraints of markdown.

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
