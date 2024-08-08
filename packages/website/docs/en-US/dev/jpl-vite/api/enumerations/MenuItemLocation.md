[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / MenuItemLocation

# Enumeration: MenuItemLocation

## Enumeration Members

### ~~Context~~

> **Context**: `"context"`

#### Deprecated

Do not use - same as NoteListContextMenu

#### Defined in

joplin-plugin-api/dist/types.d.ts:199

---

### Edit

> **Edit**: `"edit"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:191

---

### EditorContextMenu

> **EditorContextMenu**: `"editorContextMenu"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:207

---

### File

> **File**: `"file"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:190

---

### FolderContextMenu

> **FolderContextMenu**: `"folderContextMenu"`

When a command is called from a folder context menu, the
command will receive the following arguments:

- `folderId:string`: ID of the folder that was right-clicked on

#### Defined in

joplin-plugin-api/dist/types.d.ts:214

---

### Help

> **Help**: `"help"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:195

---

### Note

> **Note**: `"note"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:193

---

### NoteListContextMenu

> **NoteListContextMenu**: `"noteListContextMenu"`

When a command is called from the note list context menu, the
command will receive the following arguments:

- `noteIds:string[]`: IDs of the notes that were right-clicked on.

#### Defined in

joplin-plugin-api/dist/types.d.ts:206

---

### TagContextMenu

> **TagContextMenu**: `"tagContextMenu"`

When a command is called from a tag context menu, the
command will receive the following arguments:

- `tagId:string`: ID of the tag that was right-clicked on

#### Defined in

joplin-plugin-api/dist/types.d.ts:221

---

### Tools

> **Tools**: `"tools"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:194

---

### View

> **View**: `"view"`

#### Defined in

joplin-plugin-api/dist/types.d.ts:192
