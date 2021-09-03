[joplin-api](../README.md) / [Exports](../modules.md) / [modal/BaseProperties](../modules/modal_BaseProperties.md) / BaseProperties

# Interface: BaseProperties

[modal/BaseProperties](../modules/modal_BaseProperties.md).BaseProperties

## Hierarchy

- **`BaseProperties`**

  ↳ [`FolderProperties`](modal_FolderProperties.FolderProperties.md)

  ↳ [`NoteProperties`](modal_NoteProperties.NoteProperties.md)

  ↳ [`ResourceProperties`](modal_ResourceProperties.ResourceProperties.md)

## Table of contents

### Properties

- [created_time](modal_BaseProperties.BaseProperties.md#created_time)
- [encryption_applied](modal_BaseProperties.BaseProperties.md#encryption_applied)
- [encryption_cipher_text](modal_BaseProperties.BaseProperties.md#encryption_cipher_text)
- [id](modal_BaseProperties.BaseProperties.md#id)
- [is_shared](modal_BaseProperties.BaseProperties.md#is_shared)
- [title](modal_BaseProperties.BaseProperties.md#title)
- [updated_time](modal_BaseProperties.BaseProperties.md#updated_time)
- [user_created_time](modal_BaseProperties.BaseProperties.md#user_created_time)
- [user_updated_time](modal_BaseProperties.BaseProperties.md#user_updated_time)

## Properties

### created_time

• **created_time**: `number`

When the folder was created.

#### Defined in

[modal/BaseProperties.ts:9](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L9)

---

### encryption_applied

• **encryption_applied**: `number`

#### Defined in

[modal/BaseProperties.ts:33](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L33)

---

### encryption_cipher_text

• **encryption_cipher_text**: `string`

text

#### Defined in

[modal/BaseProperties.ts:29](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L29)

---

### id

• **id**: `string`

text

#### Defined in

[modal/BaseProperties.ts:5](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L5)

---

### is_shared

• **is_shared**: `number`

#### Defined in

[modal/BaseProperties.ts:37](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L37)

---

### title

• **title**: `string`

The tag title.

#### Defined in

[modal/BaseProperties.ts:25](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L25)

---

### updated_time

• **updated_time**: `number`

When the folder was last updated.

#### Defined in

[modal/BaseProperties.ts:13](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L13)

---

### user_created_time

• **user_created_time**: `number`

When the folder was created. It may differ from created_time as it can be manually set by the user.

#### Defined in

[modal/BaseProperties.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L17)

---

### user_updated_time

• **user_updated_time**: `number`

When the folder was last updated. It may differ from updated_time as it can be manually set by the user.

#### Defined in

[modal/BaseProperties.ts:21](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L21)
