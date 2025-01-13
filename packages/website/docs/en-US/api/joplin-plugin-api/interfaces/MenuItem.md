[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / MenuItem

# Interface: MenuItem

## Properties

### accelerator?

> `optional` **accelerator**: `string`

Accelerator associated with the menu item

#### Defined in

[types.ts:315](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L315)

---

### commandArgs?

> `optional` **commandArgs**: `any`[]

Arguments that should be passed to the command. They will be as rest
parameters.

#### Defined in

[types.ts:305](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L305)

---

### commandName?

> `optional` **commandName**: `string`

Command that should be associated with the menu item. All menu item should
have a command associated with them unless they are a sub-menu.

#### Defined in

[types.ts:299](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L299)

---

### label?

> `optional` **label**: `string`

Menu item label. If not specified, the command label will be used instead.

#### Defined in

[types.ts:325](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L325)

---

### submenu?

> `optional` **submenu**: [`MenuItem`](MenuItem.md)[]

Menu items that should appear below this menu item. Allows creating a menu tree.

#### Defined in

[types.ts:320](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L320)

---

### type?

> `optional` **type**: `"normal"` \| `"separator"` \| `"submenu"` \| `"checkbox"` \| `"radio"`

Set to "separator" to create a divider line

#### Defined in

[types.ts:310](https://github.com/rxliuli/joplin-utils/blob/4824c3237f6c8bc282f001f71c149c89286aefdc/packages/joplin-plugin-api/src/types.ts#L310)
