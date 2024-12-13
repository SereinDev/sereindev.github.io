# 从头写一个Js插件

## 准备

- 代码编辑器（如vscode）
- 一个好用的脑子

## 添加开发助手（可选）

详见[SereinDev/HelperLib](https://github.com/SereinDev/HelperLib)

## 编写一个单文件插件

创建一个文件，在其中写下以下内容

```js
console.log("Hello, Serein " + serein.metadata.version + "!");
```

将文件保存为`Serein/plugins/myplugin.js`，在插件控制台重新加载所有插件，你应该可以在输出控制台看到以下内容

```txt
[Serein]开始加载插件
[Info][myplugin] Hello, Serein 2.0.0.0!
[Serein]所有插件加载完毕。已加载1个插件
```

恭喜！你的插件成功运行了
