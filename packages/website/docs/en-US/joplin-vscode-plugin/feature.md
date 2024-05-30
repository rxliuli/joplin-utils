# Other Features

## Configuration Table

| Field           | Default Value            | Optional Values | Description                                      |
| --------------- | ------------------------ | --------------- | ------------------------------------------------ |
| `token`         |                          | `string`        | Token for the Joplin web service                 |
| `baseUrl`       | `http://localhost:41184` | `string`        | Base path for the Joplin API                     |
| `deleteConfirm` | `true`                   | `boolean`       | Confirmation prompt before delete                |
| `sortNotes`     | `false`                  | `boolean`       | Whether to sort notes                            |
| `sortNotesType` | `alphabetical`           |                 | Type of note sorting                             |
|                 |                          | `alphabetical`  | Sort by the alphabetical order of titles         |
|                 |                          | `default`       | Joplin's default sorting                         |
| `sortOrder`     | `asc`                    |                 | Sorting order of notes (ascending or descending) |
|                 |                          | `asc`           | Ascending                                        |
|                 |                          | `desc`          | Descending                                       |

## Shortcuts

- `f2`: Rename note or directory
- `delete`: Delete note or directory
- `ctrl+alt+u`: Upload image from clipboard
- `ctrl+alt+e`: Upload image from file picker
- `ctrl+alt+shift+e`: Add attachment from file picker
- `ctrl+j ctrl+o`: Search notes, showing the latest 20 modified notes by default
- `ctrl+j ctrl+i`: Create attachment
- `ctrl+j ctrl+m`: Manage tags
- `ctrl+j ctrl+l`: Show attachments of the current note

## Editing Attachments

Due to frequent issues with the click-to-jump feature in the vscode editor, since `v0.7.8`, the functionality to display the current note's attachment list has been implemented for quick editing of specified attachment resources. The default shortcut is `ctrl+j ctrl+l`.

![editResource](/images/editResource.gif)

## Pasting Images

Since `v0.1.7`, the image paste feature has been added, allowing images to be uploaded to Joplin via the right-click menu, command, or shortcut key and the link to be pasted into VSCode.

1. `ctrl+alt+u` Paste image from clipboard
2. `ctrl+alt+e` Use file manager to select an image to paste

![pasteImage](/images/pasteImage.gif)

## Adding Attachments

Since `v0.1.10`, the ability to add attachments has been added, allowing files to be added as attachment resources to Joplin notes via command or shortcut key.

1. `ctrl+alt+shift+e` Select a file to add as an attachment

## Creating Attachments

Since `v0.3.0`, the right-click to create attachment resources feature has been implemented, mainly used to quickly create and add a mind map (supported by Baidu BrainMap) or flowchart (supported by draw\.io).

## Managing Tags

Since `v0.3.0`, tag management is supported. The command is `> Joplin: Manage tags`, and the default shortcut key is `ctrl+j ctrl+m` to pop up the checkbox.

## Creating Tags

Since `v0.3.0`, creating tags is supported. The command is `> Joplin: Create tag`.

## Linking Notes

Right-click on the note to see **Copy Link**, clicking will copy the link to the clipboard.

![Link notes](/images/copy-link.gif)

Use `Ctrl+Click` to open the link in another note.
