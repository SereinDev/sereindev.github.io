# 导入&导出

## 导出

```ts
serein.exports(name: string, value?: any): boolean
```

| 参数    | 类型     | 说明       |
| ------- | -------- | ---------- |
| `name`  | `string` | 导出的名称 |
| `value` | `any`    | 导出的对象 |

| 返回值类型 | 说明                                           |
| ---------- | ---------------------------------------------- |
| `boolean`  | `name`不为空且导出时未发生内部错误时返回`true` |

- 当指定的导出项为`undefined`或`null`时将删除原有的导出项
- 导出项可能被其他插件覆盖
- 导出函数可能会带来一些意想不到的的后果

## 导入

```ts
serein.imports(name: string): any
```

| 参数   | 类型     | 说明                 |
| ------ | -------- | -------------------- |
| `name` | `string` | 导入项的名称（见上） |

| 返回值类型 | 说明                                    |
| ---------- | --------------------------------------- |
| `any`      | 当指定的导入项不存在时将返回`undefined` |