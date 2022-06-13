# Other features

## Configuration table

| Field           | Default value            | Options        | Description                                             |
| --------------- | ------------------------ | -------------- | ------------------------------------------------------- |
| `token`         |                          | `string`       | joplin web server token                                 |
| `baseUrl`       | `http://localhost:41184` | `string`       | The base path of the joplin web service                 |
| `deleteConfirm` | `true`                   | `boolean`      | Whether to remind when deleting                         |
| `sortNotes`     | `false`                  | `boolean`      | Whether to sort notes.                                  |
| `sortNotesType` | `alphabetical`           |                | Type of sorting notes.                                  |
|                 |                          | `alphabetical` | Sort notes by alphabetical order of its Title property. |
|                 |                          | `default`      | Default Joplin order (whatever that is).                |
| `sortOrder`     | `asc`                    |                | Order of sorting notes (asc or desc)                    |
|                 |                          | `asc`          | 'asc': ascending order                                  |
|                 |                          | `desc`         | 'desc': descending order (reverse)                      |
| `language`      | `english`                |                | The language displayed by the plugin, follow VSCode     |
|                 |                          | `en`           | English                                                 |
|                 |                          | `zh`           | Simple Chinese                                          |

## Hot key

- `f2`: Rename notes or directories
- `delete`: delete notes or directories
- `ctrl+alt+u`: upload pictures from clipboard
- `ctrl+alt+e`: upload image from file chooser
- `ctrl+alt+shift+e`: add attachments from the file selector
- `ctrl+j ctrl+o`: search notes, default to show the 20 most recently modified notes
- `ctrl+j ctrl+i`: create attachment
- `ctrl+j ctrl+m`: manage tabs
- `ctrl+j ctrl+l`: show attached resources for the current note

## Editing attachments

Since the click-to-jump feature in the vscode editor is often problematic, a feature has been implemented since `v0.7.8` to display a list of current note attachments for quick editing of specified attachment resources, with the default shortcut `ctrl+j ctrl+l`

![editResource](/images/editResource.gif)

## Paste the image

After `v0.1.7` the image paste function has been added, you can upload images to Joplin and paste links to VSCode via right-click menu, command or shortcut.

1. `ctrl+alt+u` to paste the image from clipboard
2. `ctrl+alt+e` Use file manager to select the image to paste

## Add attachment

After `v0.1.10` the ability to add attachments has been added, so you can add files as attached resources to Joplin notes via commands or shortcuts.

1. `ctrl+alt+shift+e` Select the file to be added as an attachment

## Create attachment

After `v0.3.0` right-click to create an attachment resource is implemented, mainly for quickly creating and adding a mind map (powered by Baidu Brain Map) or flowchart (powered by draw.io).

## Manage Tags

After `v0.3.0`, the command is `> Joplin: Manage tags`, and the default shortcut is `ctrl+j ctrl+m` to bring up the checkbox.

## Create tags

Create tags is supported after `v0.3.0`, the command is `> Joplin: Create tag`.

## Link notes

You can see **Copy link** in the right click menu on the note, click it to copy to clipboard.

![Link notes](/images/copy-link.gif)

Use `Ctrl+Click` to open to other notes.
