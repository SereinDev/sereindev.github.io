# 获取所有匹配

```http
GET /matches HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 内容

| 字段 | 类型      | 说明 |
| ---- | --------- | ---- |
| -    | [Match]\[] | 匹配 |

[Match]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Commands/Match.cs

### 返回示例

```json
{
  "data": [
    {
      "regExp": "^/开服$",
      "fieldType": 3,
      "requireAdmin": false,
      "exclusions": "",
      "description": "",
      "command": "[s]start",
      "id": 65865403
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T20:16:48.3234591+08:00"
}
```
