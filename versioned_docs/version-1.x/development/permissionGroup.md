# 权限组

一个于`v1.3.4.2`加入的新内容，可以方便插件设置指定条件下用户的权限，并提供简单的继承和权限计算功能

## 权限组结构

<details>
  <summary>配置文件</summary>

```json title="permission.json" showLineNumbers
{
  "default": {
    "description": "Serein内置权限组",   // 介绍
    "conditions": [                     // 匹配条件
      {
        "type": "group",                // 类型
        "onlyListened": true            // 仅监听的群聊
      },
      {
        "type": "private"
      }
    ],
    "permissions": {                    // 权限内容
      "permission1": {                  // 权限对象
        "object": {
          "bool": true
        },
        "array": [
          1,
          2,
          3
        ],
        "string": "text",
        "number": 114514,
        "null": null
      }
    },
    "priority": 0,                      // 优先级
    "parents": []                       // 父权限组
  }
}
```

</details>

### description `string|null`

权限组的描述

### conditions `Condition[]`

匹配条件

#### type `'group'|'private'|'temp'|'unknown'`

匹配类型（分别对应群聊、私聊、临时会话和未知）

#### onlyListened `bool|null`

仅监听的群聊

- 仅当`type`为`group`或`temp`有效

#### groups `Int64[]?`

触发来源群聊

- 仅当`type`为`group`或`temp`有效
- 为`null`时代表匹配全体

#### requireAdmin `bool?`

需要管理权限

#### onlyListened `bool?`

仅监听的群聊

- 仅当`type`为`group`或`temp`有效

### permissions `any`

权限内容

:::caution
使用JS设置权限组时，在`permissions`内填入函数将导致无法正确保存
:::

### priority `number`

优先级，数值越高的权限组的优先级越高

### parents `string[]`

父权限组（用于权限继承）

## 逻辑

### 继承

你可以通过指定[父权限组](#parents-string)来选择要继承的权限组

- 继承时仅继承权限内容，并未判断父权限组的条件是否满足
- 继承后权限内容优先级
  - 根权限组最高
  - 继承的权限组中按照[父权限组](#parents-string)中的顺序，越前面优先级越高
- 继承有最大深度：`3`
  - 无论是否出现重复继承或继承自己，继承均最多传三代

### 权限优先级

由`priority`和权限组顺序决定，具体逻辑请看下面的例子

<details>
  <summary>优先级主导</summary>

```json showLineNumbers
{
  "test1": {
    "description": "测试权限组1",
    "conditions": [
      // ...
    ],
    "permissions": {
      "example.perm": "1"
    },
    // highlight-next-line
    "priority": 999,
    "parents": []
  },
  "test2": {
    "description": "测试权限组2",
    "conditions": [
      // ...
    ],
    "permissions": {
      "example.perm": "2"
    },
    // highlight-next-line
    "priority": 0,
    "parents": []
  }
}
```

以上两个权限组，有**不同**的优先级，但都有相同的权限`key`

因为`测试权限组1`的优先级`999`大于`测试权限组2`，故获取到的`example.perm`权限为`"1"`

</details>

<details>
  <summary>权限组顺序主导</summary>

```json showLineNumbers
{
  // highlight-next-line
  "test1": {
    "description": "测试权限组1",
    "conditions": [
      // ...
    ],
    "permissions": {
      "example.perm": "1"
    },
    "priority": 0,
    "parents": []
  },
  // highlight-next-line
  "test2": {
    "description": "测试权限组2",
    "conditions": [
      // ...
    ],
    "permissions": {
      "example.perm": "2"
    },
    "priority": 0,
    "parents": []
  }
}
```

以上两个权限组，有**相同**的优先级和相同的权限`key`

因为`测试权限组1`的顺序先于`测试权限组2`，故获取到的`example.perm`权限为`"1"`

</details>

## 函数

### 获取所有权限组

`serein.getPermissionGroups()`

- 参数
  - 空
- 返回
  - `object<string, PermissionGroup>`

### 添加权限组

`serein.addPermissionGroup(group_name: string, permission_group: PermissionGroup, overwrite?: boolean)`

- 参数
  - `group_name` 权限组名称
    - 不允许为`null`、`undefined`、`''`*（空字符串）*或纯空格字符串
  - `permission_group` 权限组对象
    - 未声明的属性将保持默认值
  - `overwrite` 允许覆盖
    - 若此项为空或`false`时，添加一个已经存在的权限组会返回`false`
- 返回
  - `boolean`
    - 成功为`true`，否则为`false`

### 删除指定权限组

`serein.removePermissionGroup(group_name: string)`

- 参数
  - `group_name` 权限组名称
- 返回
  - `boolean`
    - 成功为`true`，否则为`false`

### 是否存在指定权限组

`serein.existPermissionGroup(group_name: string)`

- 参数
  - `group_name` 权限组名称
- 返回
  - `boolean`
    - 存在为`true`，否则为`false`

### 设置权限内容

`serein.setPermission(group_name: string, permission_key: string, permission: any)`

- 参数
  - `group_name` 权限组名称
  - `permission_key` 权限key
  - `permission` 权限内容
- 返回
  - `boolean`
    - 成功为`true`，否则为`false`

### 根据所给的条件计算权限内容

`serein.calculatePermission(type: 'group'|'private'|'temp'|'unknown', user_id: number, group_id?: number)`

- 参数
  - `type` [匹配类型](#type-groupprivatetempunknown)
  - `user_id` 对方QQ号
  - `group_id` 群号
- 返回
  - `object<string, any>`
