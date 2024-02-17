# Other Features

## Configuration Table

| Field           | Default Value            | Optional Value | Description                                    |
| --------------- | ------------------------ | -------------- | ---------------------------------------------- |
| `token`         |                          | `string`       | Token for Joplin web service                   |
| `baseUrl`       | `http://localhost:41184` | `string`       | Base path of Joplin API                        |
| `deleteConfirm` | `true`                   | `boolean`      | Confirm before deleting                        |
| `sortNotes`     | `false`                  | `boolean`      | Whether to sort notes                          |
| `sortNotesType` | `alphabetical`           |                | Type of note sorting                           |
|                 |                          | `alphabetical` | Sort by alphabetical order of title            |
|                 |                          | `default`      | Joplin's default sorting                       |
| `sortOrder`     | `asc`                    |                | Order of sorting (asc or desc)                 |
|                 |                          | `asc`          | Ascending order                                |
|                 |                          | `desc`         | Descending order                               |
| `language`      | `english`                |                | Display language of the plugin, follows VSCode |
|                 |                          | `en`           | English                                        |
|                 |                          | `zh`           | Simplified Chinese                             |

## Shortcuts

- `f2`: Rename notes or directories
- `delete`: Delete notes or directories
- `ctrl+alt+u`: Upload images from clipboard
- `ctrl+alt+e`: Upload images from file chooser
- `ctrl+alt+shift+e`: Add attachments from file chooser
- `ctrl+j ctrl+o`: Search notes, display last 20 modified notes by default
- `ctrl+j ctrl+i`: Create attachments
- `ctrl+j ctrl+m`: Manage tags
- `ctrl+j ctrl+l`: Show the attached resources of the current note

## Edit Attachments

Due to frequent issues with the click-to-jump function implemented in the vscode editor, a function to display the current note attachment list was implemented after `v0.7.8`, used to quickly edit specified attachment resources, default shortcuts is `ctrl+j ctrl+l`.

![editResource](/images/editResource.gif)

## Paste Images

The picture paste function has been added after `v0.1.7`, it can upload pictures to Joplin and paste the link into VSCode through the right-click menu, command or shortcut key.

1. `ctrl+alt+u` Paste image from clipboard
2. `ctrl+alt+e` Select and paste image using file manager

![pasteImage](/images/pasteImage.gif)

## Add Attachments

The ability to add attachments has been added after `v0.1.10`, it can add files as attachment resources to Joplin notes through commands or shortcut keys.

1. `ctrl+alt+shift+e` Select the file to be added as an attachment

## Create Attachments

The right-click function to create attachment resources has been implemented after `v0.3.0`, mainly used to quickly create and add a mind map (supported by Baidu Mindmap) or a flowchart (supported by draw\.io).

## Tag Management

Tag management is supported after `v0.3.0`, the command is `> Joplin: Manage tags`, the default shortcut is `ctrl+j ctrl+m` to pop up the checkbox.

## Create Tags

Tag creation is supported after `v0.3.0`, the command is `> Joplin: Create tag`.

## Link Notes

You can see **Copy Link** on the right-click menu of the note, click to copy to the clipboard.

![Link notes](/images/copy-link.gif)

Use `Ctrl+click` to open in other notes.
