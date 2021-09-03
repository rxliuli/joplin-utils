[joplin-api](../README.md) / [Exports](../modules.md) / util/wait

# Module: util/wait

## Table of contents

### Functions

- [wait](util_wait.md#wait)

## Functions

### wait

▸ **wait**(`param?`): `Promise`<`void`\>

等待指定的时间/等待指定表达式成立
如果未指定等待条件则立刻执行
注: 此实现在 nodejs 10- 会存在宏任务与微任务的问题，切记 async-await 本质上还是 Promise 的语法糖，实际上并非真正的同步函数！！！即便在浏览器，也不要依赖于这种特性。

#### Parameters

| Name     | Type                                          | Description       |
| :------- | :-------------------------------------------- | :---------------- |
| `param?` | `number` \| (...`args`: `any`[]) => `boolean` | 等待时间/等待条件 |

#### Returns

`Promise`<`void`\>

Promise 对象

#### Defined in

[util/wait.ts:8](https://github.com/rxliuli/joplin-utils/blob/f2c832f/libs/joplin-api/src/util/wait.ts#L8)
