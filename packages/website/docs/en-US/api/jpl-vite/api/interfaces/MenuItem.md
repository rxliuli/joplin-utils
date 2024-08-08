[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / MenuItem

# Interface: MenuItem

## Properties

### accelerator?

> `optional` **accelerator**: `string`

Accelerator associated with the menu item

#### Defined in

joplin-plugin-api/dist/types.d.ts:242

---

### commandArgs?

> `optional` **commandArgs**: `any`[]

Arguments that should be passed to the command. They will be as rest
parameters.

#### Defined in

joplin-plugin-api/dist/types.d.ts:234

---

### commandName?

> `optional` **commandName**: `string`

Command that should be associated with the menu item. All menu item should
have a command associated with them unless they are a sub-menu.

#### Defined in

joplin-plugin-api/dist/types.d.ts:229

---

### label?

> `optional` **label**: `string`

Menu item label. If not specified, the command label will be used instead.

#### Defined in

joplin-plugin-api/dist/types.d.ts:250

---

### submenu?

> `optional` **submenu**: [`MenuItem`](MenuItem.md)[]

Menu items that should appear below this menu item. Allows creating a menu tree.

#### Defined in

joplin-plugin-api/dist/types.d.ts:246

---

### type?

> `optional` **type**: `"normal"` \| `"separator"` \| `"submenu"` \| `"checkbox"` \| `"radio"`

Set to "separator" to create a divider line

#### Defined in

joplin-plugin-api/dist/types.d.ts:238
