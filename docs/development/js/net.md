# 导入.Net程序集

- 部分较基础的命名空间默认已加载到上下文中
  - `System`
  - `System.IO`
- 其他命名空间需要在插件信息文件中手动声明后才可导入

## 使用函数

```ts
declare function importNamespace(name: string): AssemblyObject;

declare type AssemblyObject = {
  [key: string]: AssemblyObject | any;
};
```

## 直接导入

:::tip

支持 ES6 的[解构赋值语法](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)

:::

```ts
System.IO.File.WriteAllTexts(
    'path/to/file/1.txt',
    'hello world'
    );
```

或

```ts
const { IO: File } = System;
File.WriteAllTexts(
    'path/to/file/1.txt',
    'hello world'
    );
```
