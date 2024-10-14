# 插件信息

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
    "targetingSerein": [
        "2.0"
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
    - `js` -> [JavaScript插件](./js/)
    - `net` -> [.NET插件](./net/)

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

## 入口点文件

- `version`
  - 类型：`string`

## 作者

- `authors`
  - 类型：`{ name: string, description?: string }[]`

## 描述

简单描述一下插件的功能

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

## 目标Serein版本

支持此插件的Serein版本

- `targetingSerein`
  - 类型：`string[]`
    - `2.0`

## 依赖

:::warning

预计在下个版本中加入实际功能

:::

- `dependencies`
  - 类型：`{ id: string, versions: string[] }[]`
