# JavaScript 插件开发

## JS 标准

ECMAScript 2024 / ES6

具体特性支持列表详见[Supported features - sebastienros/jint](https://github.com/sebastienros/jint?tab=readme-ov-file#supported-features)

## 优点

- 一键热重载，快速编写插件
- [导入 NET 几乎所有的命名空间以及其对象、类、方法和属性](./clr)

:::tip
配合一定 C#基础食用更佳

C#语法详见 [.NET API 浏览器](https://learn.microsoft.com/zh-cn/dotnet/api/)
:::

```js
// https://learn.microsoft.com/zh-cn/dotnet/api/system.io.file
const File = System.IO.File;
File.WriteAllText(
    "1.txt", // 路径
    "一些文本"// 文本
);
// 输出到文件
```

```js
// https://learn.microsoft.com/zh-cn/dotnet/api/system.diagnostics.process
const Process = System.Diagnostics.Process;
Process.Start("cmd.exe");
// 启动cmd.exe
```

## 缺点

- 加密混淆后的代码运行效率极低，运行时间可能长达原来的数倍
