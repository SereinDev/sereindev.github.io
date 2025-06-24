# 插件信息文件

用于储存插件的名称、作者、版本、介绍等信息

:::tip

你可以将以下内容复制到`plugin-info.json`中，根据代码编辑器的提示补全即可

```json
{
    "$schema": "https://sereincommunity.github.io/json-schemas/v2/plugin-info.json"
}
```

:::

```json
{
    // highlight-start
    // 以下高亮部分为必填项
    "id": "example-plugin",
    "name": "名称",
    "type": "js",
    "version": "1.2.3.4",
    // highlight-end

    "entryFile": "index.js",
    "authors": [
        {
            "name": "用户名",
            "description": "描述"
        }
    ],
    "description": "描述",
    "tags": [
        "entertainment",
        "development",
        "tool",
        "information",
        "management",
        "api"
    ],
    "dependencies": [
        {
            "id": "dependency-1",
            "versions": [
                "1.2.3.4"
            ]
        }
    ]
}
```

## id

:::note

此项为必填项

:::

用于区分插件

- `id`
  - 类型：`string`
  - 正则表达式
    ```regex
    ^[a-zA-Z][a-zA-Z0-9\-]{4,25}$
    ```

## 名称

:::note

此项为必填项

:::

为你的插件取个易懂易区分的简单名字

- `name`
  - 类型：`string`

## 语言类型

:::note

此项为必填项

:::

区分插件的类型，方便使用不同的插件加载器进行读取

- `type`
  - 类型：`string`
    - `js` -> [JavaScript 插件](./js/)
    - `net` -> [.NET 插件](./net/)

## 版本

:::note

此项为必填项

:::

- `version`
  - 类型：`string`
    - 参考：[语义化版本](https://semver.org/lang/zh-CN/)
    - 格式：
        ```regex
        ^\d+(\.\d+){1,3}$
        ```

## 作者

- `authors`
  - 类型：`{ name: string, description?: string }[]`

## 描述

简单描述一下插件的功能

- `description`
  - 类型：`string`

## 入口点文件

指定插件的入口（即第一个被加载的文件）

- `entryFile`
  - 类型：`string`

:::note

默认值

- JavaScript
  - `index.js`
- NET
  - `{id}.dll`

:::

## 标签

按类型区分插件，方便用户搜索

- `tags`
  - 类型：`string[]`
    - `entertainment` 娱乐
    - `development` 开发
    - `tool` 工具
    - `information` 信息
    - `management` 管理
    - `api` 应用程序接口

## 依赖

:::warning

预计在下个版本中加入实际功能

:::

- `dependencies`
  - 类型：`{ id: string, versions: string[] }[]`
