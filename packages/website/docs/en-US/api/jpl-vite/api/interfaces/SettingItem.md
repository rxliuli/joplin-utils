[Documentation](../../../packages.md) / [jpl-vite](../../index.md) / [api](../index.md) / SettingItem

# Interface: SettingItem

## Properties

### advanced?

> `optional` **advanced**: `boolean`

An advanced setting will be moved under the "Advanced" button in the
config screen.

#### Defined in

joplin-plugin-api/dist/types.d.ts:354

---

### appTypes?

> `optional` **appTypes**: [`AppType`](../enumerations/AppType.md)[]

Reserved property. Not used at the moment.

#### Defined in

joplin-plugin-api/dist/types.d.ts:344

---

### description?

> `optional` **description**: `string`

#### Defined in

joplin-plugin-api/dist/types.d.ts:318

---

### isEnum?

> `optional` **isEnum**: `boolean`

To create a setting with multiple options, set this property to `true`.
That setting will render as a dropdown list in the configuration screen.

#### Defined in

joplin-plugin-api/dist/types.d.ts:335

---

### label

> **label**: `string`

#### Defined in

joplin-plugin-api/dist/types.d.ts:317

---

### maximum?

> `optional` **maximum**: `number`

#### Defined in

joplin-plugin-api/dist/types.d.ts:360

---

### minimum?

> `optional` **minimum**: `number`

Set the min, max and step values if you want to restrict an int setting
to a particular range.

#### Defined in

joplin-plugin-api/dist/types.d.ts:359

---

### options?

> `optional` **options**: `Record`\<`any`, `any`\>

This property is required when `isEnum` is `true`. In which case, it
should contain a map of value => label.

#### Defined in

joplin-plugin-api/dist/types.d.ts:340

---

### public

> **public**: `boolean`

A public setting will appear in the Configuration screen and will be
modifiable by the user. A private setting however will not appear there,
and can only be changed programmatically. You may use this to store some
values that you do not want to directly expose.

#### Defined in

joplin-plugin-api/dist/types.d.ts:325

---

### section?

> `optional` **section**: `string`

You would usually set this to a section you would have created
specifically for the plugin.

#### Defined in

joplin-plugin-api/dist/types.d.ts:330

---

### secure?

> `optional` **secure**: `boolean`

Set this to `true` to store secure data, such as passwords. Any such
setting will be stored in the system keychain if one is available.

#### Defined in

joplin-plugin-api/dist/types.d.ts:349

---

### step?

> `optional` **step**: `number`

#### Defined in

joplin-plugin-api/dist/types.d.ts:361

---

### storage?

> `optional` **storage**: [`SettingStorage`](../enumerations/SettingStorage.md)

Either store the setting in the database or in settings.json. Defaults to database.

#### Defined in

joplin-plugin-api/dist/types.d.ts:365

---

### subType?

> `optional` **subType**: [`SettingItemSubType`](../enumerations/SettingItemSubType.md)

Currently only used to display a file or directory selector. Always set
`type` to `SettingItemType.String` when using this property.

#### Defined in

joplin-plugin-api/dist/types.d.ts:316

---

### type

> **type**: [`SettingItemType`](../enumerations/SettingItemType.md)

#### Defined in

joplin-plugin-api/dist/types.d.ts:311

---

### value

> **value**: `any`

#### Defined in

joplin-plugin-api/dist/types.d.ts:310
