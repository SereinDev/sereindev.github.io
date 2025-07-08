# 获取指定插件信息

```http
GET /plugins/{id} HTTP/1.1
```

## 请求

### 方法

`GET`

### 路径参数

| 参数名 | 说明    |
| ------ | ------- |
| `id`   | 插件 Id |

## 响应

### 状态码

- `200`
  - 插件存在
- `404`
  - 插件不存在

### 内容

| 字段 | 类型      | 说明 |
| ---- | --------- | ---- |
| -    | [IPlugin] | 插件 |

[IPlugin]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Plugins/IPlugin.cs

### 响应示例

```json
{
  "data": {
    "fileName": "D:\\Serein\\plugins\\MyPlugin\\MyPlugin.dll",
    "info": {
      "name": "我的插件",
      "id": "MyPlugin",
      "version": "1.2.3.4",
      "type": 2,
      "authors": [],
      "description": "net",
      "tags": [0, 1, 2, 3, 4, 5],
      "dependencies": [
        {
          "id": "dependency-1",
          "version": []
        }
      ],
      "entryFile": "MyPlugin.dll",
      "targets": {
        "min": null,
        "max": null
      }
    },
    "isEnabled": true
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T19:49:22.9714279+08:00"
}
```
