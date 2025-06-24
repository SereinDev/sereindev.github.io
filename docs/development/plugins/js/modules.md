# 使用模块

除了被主动加载的文件（插件入口点），其他 Js 文件只能通过作为模块被读取和加载

## 编写模块

使用 [`export`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export) 导出变量、函数、类

```js title="Serein/plugins/test/myModule.js"
// highlight-next-line
import { test } from './anotherLib.js'

export const value = 114514;

export async function getPosts() {
    // ...
}

export class Student {
    // ...
}
```

模块中可使用`import ... from '...'`导入其他模块

```js title="Serein/plugins/test/myModule.js"
// highlight-next-line
import { test } from './anotherLib.js'
```

## 导入

在被加载的 JS 文件中，你可以通过 `require()` 函数导入其他模块中导出的内容

```ts
require(file: string): any
```

| 参数   | 类型     | 说明                   |
| ------ | -------- | ---------------------- |
| `file` | `string` | 相对于被加载文件的路径 |

```js title="Serein/plugins/test/index.js"

const { value, getPosts, Student } = require('./myModule.js')
```
