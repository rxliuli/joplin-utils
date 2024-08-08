[Documentation](../../packages.md) / [joplin-api](../index.md) / NoteProperties

# Interface: NoteProperties

## Extends

- [`BaseProperties`](BaseProperties.md)

## Properties

### altitude

> **altitude**: `number`

numeric

#### Defined in

[model/NoteProperties.ts:28](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L28)

---

### application_data

> **application_data**: `string`

text

#### Defined in

[model/NoteProperties.ts:60](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L60)

---

### author

> **author**: `string`

text

#### Defined in

[model/NoteProperties.ts:32](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L32)

---

### base_url

> **base_url**: `string`

If body_html is provided and contains relative URLs, provide the base_url parameter too so that all the URLs can be converted to absolute ones. The base URL is basically where the HTML was fetched from, minus the query (everything after the '?'). For example if the original page was https://stackoverflow.com/search?q=%5Bjava%5D+test, the base URL is https://stackoverflow.com/search.

#### Defined in

[model/NoteProperties.ts:76](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L76)

---

### body

> **body**: `string`

The note body, in Markdown. May also contain HTML.

#### Defined in

[model/NoteProperties.ts:12](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L12)

---

### body_html

> **body_html**: `string`

Note body, in HTML format

#### Defined in

[model/NoteProperties.ts:72](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L72)

---

### created_time

> **created_time**: `number`

When the folder was created.

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`created_time`](BaseProperties.md#created-time)

#### Defined in

[model/BaseProperties.ts:9](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L9)

---

### crop_rect

> **crop_rect**: `object`

If an image is provided, you can also specify an optional rectangle that will be used to crop the image. In format `{ x: x, y: y, width: width, height: height }`

#### height

> **height**: `number`

#### width

> **width**: `number`

#### x

> **x**: `number`

#### y

> **y**: `number`

#### Defined in

[model/NoteProperties.ts:84](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L84)

---

### encryption_applied

> **encryption_applied**: `number`

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`encryption_applied`](BaseProperties.md#encryption-applied)

#### Defined in

[model/BaseProperties.ts:33](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L33)

---

### encryption_cipher_text

> **encryption_cipher_text**: `string`

text

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`encryption_cipher_text`](BaseProperties.md#encryption-cipher-text)

#### Defined in

[model/BaseProperties.ts:29](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L29)

---

### id

> **id**: `string`

text

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`id`](BaseProperties.md#id)

#### Defined in

[model/BaseProperties.ts:5](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L5)

---

### image_data_url

> **image_data_url**: `string`

An image to attach to the note, in Data URL format.

#### Defined in

[model/NoteProperties.ts:80](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L80)

---

### is_conflict

> **is_conflict**: `number`

Tells whether the note is a conflict or not.

#### Defined in

[model/NoteProperties.ts:16](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L16)

---

### is_shared

> **is_shared**: `number`

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`is_shared`](BaseProperties.md#is-shared)

#### Defined in

[model/BaseProperties.ts:37](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L37)

---

### is_todo

> **is_todo**: `IntBool`

Tells whether this note is a to-do or not.

#### Defined in

[model/NoteProperties.ts:40](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L40)

---

### latitude

> **latitude**: `number`

numeric

#### Defined in

[model/NoteProperties.ts:20](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L20)

---

### longitude

> **longitude**: `number`

numeric

#### Defined in

[model/NoteProperties.ts:24](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L24)

---

### markup_language

> **markup_language**: `number`

int

#### Defined in

[model/NoteProperties.ts:68](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L68)

---

### order

> **order**: `number`

int

#### Defined in

[model/NoteProperties.ts:64](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L64)

---

### parent_id

> **parent_id**: `string`

ID of the notebook that contains this note. Change this ID to move the note to a different notebook.

#### Defined in

[model/NoteProperties.ts:8](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L8)

---

### source

> **source**: `string`

text

#### Defined in

[model/NoteProperties.ts:52](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L52)

---

### source_application

> **source_application**: `string`

text

#### Defined in

[model/NoteProperties.ts:56](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L56)

---

### source_url

> **source_url**: `string`

The full URL where the note comes from.

#### Defined in

[model/NoteProperties.ts:36](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L36)

---

### title

> **title**: `string`

The tag title.

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`title`](BaseProperties.md#title)

#### Defined in

[model/BaseProperties.ts:25](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L25)

---

### todo_completed

> **todo_completed**: `IntBool`

Tells whether to-do is completed or not. This is a timestamp in milliseconds.

#### Defined in

[model/NoteProperties.ts:48](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L48)

---

### todo_due

> **todo_due**: `IntBool`

When the to-do is due. An alarm will be triggered on that date.

#### Defined in

[model/NoteProperties.ts:44](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/NoteProperties.ts#L44)

---

### updated_time

> **updated_time**: `number`

When the folder was last updated.

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`updated_time`](BaseProperties.md#updated-time)

#### Defined in

[model/BaseProperties.ts:13](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L13)

---

### user_created_time

> **user_created_time**: `number`

When the folder was created. It may differ from created_time as it can be manually set by the user.

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`user_created_time`](BaseProperties.md#user-created-time)

#### Defined in

[model/BaseProperties.ts:17](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L17)

---

### user_updated_time

> **user_updated_time**: `number`

When the folder was last updated. It may differ from updated_time as it can be manually set by the user.

#### Inherited from

[`BaseProperties`](BaseProperties.md).[`user_updated_time`](BaseProperties.md#user-updated-time)

#### Defined in

[model/BaseProperties.ts:21](https://github.com/rxliuli/joplin-utils/blob/856dd8cbf75fe71932485581a99ca0e4ebcdd5e8/packages/joplin-api/src/model/BaseProperties.ts#L21)
