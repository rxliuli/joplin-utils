[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / Command

# Interface: Command

## Properties

### enabledCondition?

> `optional` **enabledCondition**: `string`

Defines whether the command should be enabled or disabled, which in turns
affects the enabled state of any associated button or menu item.

The condition should be expressed as a "when-clause" (as in Visual Studio
Code). It's a simple boolean expression that evaluates to `true` or
`false`. It supports the following operators:

| Operator   | Symbol | Example                                |
| ---------- | ------ | -------------------------------------- |
| Equality   | ==     | "editorType == markdown"               |
| Inequality | !=     | "currentScreen != config"              |
| Or         | \|\|   | "noteIsTodo \|\| noteTodoCompleted"    |
| And        | &&     | "oneNoteSelected && !inConflictFolder" |

Joplin, unlike VSCode, also supports parentheses, which allows creating
more complex expressions such as `cond1 || (cond2 && cond3)`. Only one
level of parentheses is possible (nested ones aren't supported).

Currently the supported context variables aren't documented, but you can
find the list below:

- [Global When Clauses](https://github.com/laurent22/joplin/blob/dev/packages/lib/services/commands/stateToWhenClauseContext.ts)
- [Desktop app When Clauses](https://github.com/laurent22/joplin/blob/dev/packages/app-desktop/services/commands/stateToWhenClauseContext.ts)

Note: Commands are enabled by default unless you use this property.

#### Defined in

[types.ts:58](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L58)

---

### iconName?

> `optional` **iconName**: `string`

Icon to be used on toolbar buttons for example

#### Defined in

[types.ts:24](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L24)

---

### label?

> `optional` **label**: `string`

Label to be displayed on menu items or keyboard shortcut editor for example.
If it is missing, it's assumed it's a private command, to be called programmatically only.
In that case the command will not appear in the shortcut editor or command panel, and logically
should not be used as a menu item.

#### Defined in

[types.ts:19](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L19)

---

### name

> **name**: `string`

Name of command - must be globally unique

#### Defined in

[types.ts:11](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L11)

## Methods

### execute()

> **execute**(...`args`): `Promise`\<`any`\>

Code to be ran when the command is executed. It may return a result.

#### Parameters

• ...**args**: `any`[]

#### Returns

`Promise`\<`any`\>

#### Defined in

[types.ts:29](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-plugin-api/src/types.ts#L29)
