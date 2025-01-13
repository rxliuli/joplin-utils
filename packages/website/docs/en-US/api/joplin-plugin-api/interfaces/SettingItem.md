[Documentation](../../packages.md) / [joplin-plugin-api](../index.md) / SettingItem

# Interface: SettingItem

## Properties

### advanced?

> `optional` **advanced**: `boolean`

An advanced setting will be moved under the "Advanced" button in the
config screen.

#### Defined in

[types.ts:462](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L462)

---

### appTypes?

> `optional` **appTypes**: [`AppType`](../enumerations/AppType.md)[]

Reserved property. Not used at the moment.

#### Defined in

[types.ts:450](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L450)

---

### description?

> `optional` **description**: `string`

#### Defined in

[types.ts:419](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L419)

---

### isEnum?

> `optional` **isEnum**: `boolean`

To create a setting with multiple options, set this property to `true`.
That setting will render as a dropdown list in the configuration screen.

#### Defined in

[types.ts:439](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L439)

---

### label

> **label**: `string`

#### Defined in

[types.ts:418](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L418)

---

### maximum?

> `optional` **maximum**: `number`

#### Defined in

[types.ts:469](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L469)

---

### minimum?

> `optional` **minimum**: `number`

Set the min, max and step values if you want to restrict an int setting
to a particular range.

#### Defined in

[types.ts:468](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L468)

---

### options?

> `optional` **options**: `Record`\<`any`, `any`\>

This property is required when `isEnum` is `true`. In which case, it
should contain a map of value => label.

#### Defined in

[types.ts:445](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L445)

---

### public

> **public**: `boolean`

A public setting will appear in the Configuration screen and will be
modifiable by the user. A private setting however will not appear there,
and can only be changed programmatically. You may use this to store some
values that you do not want to directly expose.

#### Defined in

[types.ts:427](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L427)

---

### section?

> `optional` **section**: `string`

You would usually set this to a section you would have created
specifically for the plugin.

#### Defined in

[types.ts:433](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L433)

---

### secure?

> `optional` **secure**: `boolean`

Set this to `true` to store secure data, such as passwords. Any such
setting will be stored in the system keychain if one is available.

#### Defined in

[types.ts:456](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L456)

---

### step?

> `optional` **step**: `number`

#### Defined in

[types.ts:470](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L470)

---

### storage?

> `optional` **storage**: [`SettingStorage`](../enumerations/SettingStorage.md)

Either store the setting in the database or in settings.json. Defaults to database.

#### Defined in

[types.ts:475](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L475)

---

### subType?

> `optional` **subType**: [`SettingItemSubType`](../enumerations/SettingItemSubType.md)

Currently only used to display a file or directory selector. Always set
`type` to `SettingItemType.String` when using this property.

#### Defined in

[types.ts:416](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L416)

---

### type

> **type**: [`SettingItemType`](../enumerations/SettingItemType.md)

#### Defined in

[types.ts:410](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L410)

---

### value

> **value**: `any`

#### Defined in

[types.ts:409](https://github.com/rxliuli/joplin-utils/blob/a3a4c55f9104da0aa8b36da1259d082b810b3d68/packages/joplin-plugin-api/src/types.ts#L409)
