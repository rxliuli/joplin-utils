[joplin-api](../README.md) / [Exports](../modules.md) / types/RequiredFiled

# Module: types/RequiredFiled

## Table of contents

### Type aliases

- [RequiredField](types_RequiredFiled.md#requiredfield)

## Type aliases

### RequiredField

Ƭ **RequiredField**<`T`, `K`\>: `Required`<`Pick`<`T`, `K`\>\> & `Omit`<`T`, `K`\>

声明对象中的指定字段是必填的

#### Type parameters

| Name | Type              |
| :--- | :---------------- |
| `T`  | `T`               |
| `K`  | extends keyof `T` |

#### Defined in

[types/RequiredFiled.ts:4](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/types/RequiredFiled.ts#L4)
