# 从模块中加载

v1.3.4 后你可以创建新的js文件，并在里面写一些基本的函数方便日常调用，如判断是否为管理、格式化自定义的时间等

参考：[export - JavaScript | MDN - Mozilla Developer](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export)

## 导出

:::caution

必须为导出的成员加上`export`关键字

:::

```js title="modules/export.js"
export const myvalue = 1;

export function isMyGroup(groupID) {
    return serein.getSettingsObject().Bot.GroupList.includes(groupID);
}

// ...
```

## 导入

`require(file: string)`

此处的`file`参数对应为你在 plugins 文件夹创建的js文件路径

:::caution

- 必须使用相对路径（基目录为 plugins）
- 必须以`./`开头
- 需包含扩展名
- 导入时会被完整运行一次
- 非模块类型的文件不允许使用`import`语句导入

:::

```js title="eg.js"
const isMyGroup = require('./modules/export.js').isMyGroup(114514);
```

这样你就可以导入已经导出了的内容了
