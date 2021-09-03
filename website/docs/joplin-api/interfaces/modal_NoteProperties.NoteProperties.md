[joplin-api](../README.md) / [Exports](../modules.md) / [modal/NoteProperties](../modules/modal_NoteProperties.md) / NoteProperties

# Interface: NoteProperties

[modal/NoteProperties](../modules/modal_NoteProperties.md).NoteProperties

## Hierarchy

- [`BaseProperties`](modal_BaseProperties.BaseProperties.md)

  ↳ **`NoteProperties`**

## Table of contents

### Properties

- [altitude](modal_NoteProperties.NoteProperties.md#altitude)
- [application_data](modal_NoteProperties.NoteProperties.md#application_data)
- [author](modal_NoteProperties.NoteProperties.md#author)
- [base_url](modal_NoteProperties.NoteProperties.md#base_url)
- [body](modal_NoteProperties.NoteProperties.md#body)
- [body_html](modal_NoteProperties.NoteProperties.md#body_html)
- [created_time](modal_NoteProperties.NoteProperties.md#created_time)
- [crop_rect](modal_NoteProperties.NoteProperties.md#crop_rect)
- [encryption_applied](modal_NoteProperties.NoteProperties.md#encryption_applied)
- [encryption_cipher_text](modal_NoteProperties.NoteProperties.md#encryption_cipher_text)
- [id](modal_NoteProperties.NoteProperties.md#id)
- [image_data_url](modal_NoteProperties.NoteProperties.md#image_data_url)
- [is_conflict](modal_NoteProperties.NoteProperties.md#is_conflict)
- [is_shared](modal_NoteProperties.NoteProperties.md#is_shared)
- [is_todo](modal_NoteProperties.NoteProperties.md#is_todo)
- [latitude](modal_NoteProperties.NoteProperties.md#latitude)
- [longitude](modal_NoteProperties.NoteProperties.md#longitude)
- [markup_language](modal_NoteProperties.NoteProperties.md#markup_language)
- [order](modal_NoteProperties.NoteProperties.md#order)
- [parent_id](modal_NoteProperties.NoteProperties.md#parent_id)
- [source](modal_NoteProperties.NoteProperties.md#source)
- [source_application](modal_NoteProperties.NoteProperties.md#source_application)
- [source_url](modal_NoteProperties.NoteProperties.md#source_url)
- [title](modal_NoteProperties.NoteProperties.md#title)
- [todo_completed](modal_NoteProperties.NoteProperties.md#todo_completed)
- [todo_due](modal_NoteProperties.NoteProperties.md#todo_due)
- [updated_time](modal_NoteProperties.NoteProperties.md#updated_time)
- [user_created_time](modal_NoteProperties.NoteProperties.md#user_created_time)
- [user_updated_time](modal_NoteProperties.NoteProperties.md#user_updated_time)

## Properties

### altitude

• **altitude**: `number`

numeric

#### Defined in

[modal/NoteProperties.ts:28](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L28)

---

### application_data

• **application_data**: `string`

text

#### Defined in

[modal/NoteProperties.ts:60](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L60)

---

### author

• **author**: `string`

text

#### Defined in

[modal/NoteProperties.ts:32](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L32)

---

### base_url

• **base_url**: `string`

If body_html is provided and contains relative URLs, provide the base_url parameter too so that all the URLs can be converted to absolute ones. The base URL is basically where the HTML was fetched from, minus the query (everything after the '?'). For example if the original page was https://stackoverflow.com/search?q=%5Bjava%5D+test, the base URL is https://stackoverflow.com/search.

#### Defined in

[modal/NoteProperties.ts:76](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L76)

---

### body

• **body**: `string`

The note body, in Markdown. May also contain HTML.

#### Defined in

[modal/NoteProperties.ts:12](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L12)

---

### body_html

• **body_html**: `string`

Note body, in HTML format

#### Defined in

[modal/NoteProperties.ts:72](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L72)

---

### created_time

• **created_time**: `number`

When the folder was created.

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[created_time](modal_BaseProperties.BaseProperties.md#created_time)

#### Defined in

[modal/BaseProperties.ts:9](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L9)

---

### crop_rect

• **crop_rect**: `Object`

If an image is provided, you can also specify an optional rectangle that will be used to crop the image. In format { x: x, y: y, width: width, height: height }

#### Type declaration

| Name     | Type     |
| :------- | :------- |
| `height` | `number` |
| `width`  | `number` |
| `x`      | `number` |
| `y`      | `number` |

#### Defined in

[modal/NoteProperties.ts:84](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L84)

---

### encryption_applied

• **encryption_applied**: `number`

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[encryption_applied](modal_BaseProperties.BaseProperties.md#encryption_applied)

#### Defined in

[modal/BaseProperties.ts:33](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L33)

---

### encryption_cipher_text

• **encryption_cipher_text**: `string`

text

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[encryption_cipher_text](modal_BaseProperties.BaseProperties.md#encryption_cipher_text)

#### Defined in

[modal/BaseProperties.ts:29](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L29)

---

### id

• **id**: `string`

text

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[id](modal_BaseProperties.BaseProperties.md#id)

#### Defined in

[modal/BaseProperties.ts:5](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L5)

---

### image_data_url

• **image_data_url**: `string`

An image to attach to the note, in Data URL format.

#### Defined in

[modal/NoteProperties.ts:80](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L80)

---

### is_conflict

• **is_conflict**: `number`

Tells whether the note is a conflict or not.

#### Defined in

[modal/NoteProperties.ts:16](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L16)

---

### is_shared

• **is_shared**: `number`

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[is_shared](modal_BaseProperties.BaseProperties.md#is_shared)

#### Defined in

[modal/BaseProperties.ts:37](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L37)

---

### is_todo

• **is_todo**: [`IntBool`](../modules/types_IntBool.md#intbool)

Tells whether this note is a to-do or not.

#### Defined in

[modal/NoteProperties.ts:40](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L40)

---

### latitude

• **latitude**: `number`

numeric

#### Defined in

[modal/NoteProperties.ts:20](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L20)

---

### longitude

• **longitude**: `number`

numeric

#### Defined in

[modal/NoteProperties.ts:24](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L24)

---

### markup_language

• **markup_language**: `number`

int

#### Defined in

[modal/NoteProperties.ts:68](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L68)

---

### order

• **order**: `number`

int

#### Defined in

[modal/NoteProperties.ts:64](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L64)

---

### parent_id

• **parent_id**: `string`

ID of the notebook that contains this note. Change this ID to move the note to a different notebook.

#### Defined in

[modal/NoteProperties.ts:8](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L8)

---

### source

• **source**: `string`

text

#### Defined in

[modal/NoteProperties.ts:52](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L52)

---

### source_application

• **source_application**: `string`

text

#### Defined in

[modal/NoteProperties.ts:56](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L56)

---

### source_url

• **source_url**: `string`

The full URL where the note comes from.

#### Defined in

[modal/NoteProperties.ts:36](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L36)

---

### title

• **title**: `string`

The tag title.

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[title](modal_BaseProperties.BaseProperties.md#title)

#### Defined in

[modal/BaseProperties.ts:25](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L25)

---

### todo_completed

• **todo_completed**: [`IntBool`](../modules/types_IntBool.md#intbool)

Tells whether to-do is completed or not. This is a timestamp in milliseconds.

#### Defined in

[modal/NoteProperties.ts:48](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L48)

---

### todo_due

• **todo_due**: [`IntBool`](../modules/types_IntBool.md#intbool)

When the to-do is due. An alarm will be triggered on that date.

#### Defined in

[modal/NoteProperties.ts:44](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/NoteProperties.ts#L44)

---

### updated_time

• **updated_time**: `number`

When the folder was last updated.

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[updated_time](modal_BaseProperties.BaseProperties.md#updated_time)

#### Defined in

[modal/BaseProperties.ts:13](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L13)

---

### user_created_time

• **user_created_time**: `number`

When the folder was created. It may differ from created_time as it can be manually set by the user.

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[user_created_time](modal_BaseProperties.BaseProperties.md#user_created_time)

#### Defined in

[modal/BaseProperties.ts:17](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L17)

---

### user_updated_time

• **user_updated_time**: `number`

When the folder was last updated. It may differ from updated_time as it can be manually set by the user.

#### Inherited from

[BaseProperties](modal_BaseProperties.BaseProperties.md).[user_updated_time](modal_BaseProperties.BaseProperties.md#user_updated_time)

#### Defined in

[modal/BaseProperties.ts:21](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/modal/BaseProperties.ts#L21)
