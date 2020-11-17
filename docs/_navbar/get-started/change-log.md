# Release Notes

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
- Fixed the problem that the cursor was forced to transfer to the editor after clicking the note (not completely resolved)

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
