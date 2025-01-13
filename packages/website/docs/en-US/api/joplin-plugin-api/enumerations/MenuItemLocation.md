[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / MenuItemLocation

# Enumeration: MenuItemLocation

## Enumeration Members

### ~~Context~~

> **Context**: `"context"`

#### Deprecated

Do not use - same as NoteListContextMenu

#### Defined in

[types.ts:253](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L253)

---

### Edit

> **Edit**: `"edit"`

#### Defined in

[types.ts:244](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L244)

---

### EditorContextMenu

> **EditorContextMenu**: `"editorContextMenu"`

#### Defined in

[types.ts:265](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L265)

---

### File

> **File**: `"file"`

#### Defined in

[types.ts:243](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L243)

---

### FolderContextMenu

> **FolderContextMenu**: `"folderContextMenu"`

When a command is called from a folder context menu, the
command will receive the following arguments:

- `folderId:string`: ID of the folder that was right-clicked on

#### Defined in

[types.ts:273](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L273)

---

### Help

> **Help**: `"help"`

#### Defined in

[types.ts:248](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L248)

---

### Note

> **Note**: `"note"`

#### Defined in

[types.ts:246](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L246)

---

### NoteListContextMenu

> **NoteListContextMenu**: `"noteListContextMenu"`

When a command is called from the note list context menu, the
command will receive the following arguments:

- `noteIds:string[]`: IDs of the notes that were right-clicked on.

#### Defined in

[types.ts:263](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L263)

---

### TagContextMenu

> **TagContextMenu**: `"tagContextMenu"`

When a command is called from a tag context menu, the
command will receive the following arguments:

- `tagId:string`: ID of the tag that was right-clicked on

#### Defined in

[types.ts:281](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L281)

---

### Tools

> **Tools**: `"tools"`

#### Defined in

[types.ts:247](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L247)

---

### View

> **View**: `"view"`

#### Defined in

[types.ts:245](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L245)
