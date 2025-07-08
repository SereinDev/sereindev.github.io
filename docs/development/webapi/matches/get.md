# 获取匹配

```http
GET /matches/{id} HTTP/1.1
```

## 请求

### 方法

`GET`

### 路径参数

| 参数名 | 说明    |
| ------ | ------- |
| `id`   | 匹配 Id |

## 响应

### 状态码

- `200`
  - 匹配存在
- `404`
  - 匹配不存在

### 内容

| 字段 | 类型    | 说明 |
| ---- | ------- | ---- |
| -    | [Match] | 匹配 |

[Match]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Commands/Match.cs

### 返回示例

```json
{
  "data": {
    "regExp": "^/开服$",
    "fieldType": 3,
    "requireAdmin": false,
    "exclusions": "",
    "description": "",
    "command": "[s]start",
    "id": 65865403
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T20:16:48.3234591+08:00"
}
```
