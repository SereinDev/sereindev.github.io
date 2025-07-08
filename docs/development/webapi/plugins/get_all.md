# 获取所有插件信息

```http
GET /plugins HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 内容

| 字段 | 类型                       | 说明       |
| ---- | -------------------------- | ---------- |
| -    | Record<string,  [IPlugin]> | 插件键值对 |

[IPlugin]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Plugins/IPlugin.cs

### 响应示例

```json
{
  "data": {
    "MainPlugin": {
      "fileName": "D:\\Serein\\plugins\\MyPlugin\\MyPlugin.dll",
      "info": {
        "name": "我的插件",
        "id": "MyPlugin",
        "version": "1.2.3.4",
        "type": 2,
        "authors": [],
        "description": "net",
        "tags": [0, 1, 2, 3, 4, 5],
        "dependencies": [],
        "entryFile": "MyPlugin.dll",
        "targets": {
          "min": null,
          "max": null
        }
      },
      "isEnabled": true
    }
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T19:47:26.3612781+08:00"
}
```
