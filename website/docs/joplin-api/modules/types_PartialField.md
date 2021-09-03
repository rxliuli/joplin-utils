[joplin-api](../README.md) / [Exports](../modules.md) / types/PartialField

# Module: types/PartialField

## Table of contents

### Type aliases

- [PartialField](types_PartialField.md#partialfield)

## Type aliases

### PartialField

Ƭ **PartialField**<`T`, `K`\>: `Partial`<`Pick`<`T`, `K`\>\> & `Omit`<`T`, `K`\>

声明对象中的指定字段是可选的

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `K`  | extends keyof `T` |

#### Defined in

[types/PartialField.ts:4](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/types/PartialField.ts#L4)
