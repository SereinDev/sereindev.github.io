# 创建定时任务

```http
POST /schedules HTTP/1.1
Content-Type: application/json

{
  "regExp": "echo",
  // ...
}
```

## 请求

### 方法

`POST`

### 请求体参数

| 参数名 | 说明    |
| ------ | ------- |
| -      | [Schedule] |

## 响应

### 状态码

`200`

### 内容

| 字段 | 类型    | 说明 |
| ---- | ------- | ---- |
| -    | [Schedule] | 定时任务 |

[Schedule]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Commands/Schedule.cs

### 返回示例

```json
{
  "data": {
    "expression": "* * * * *",
    "command": "[s]start",
    "description": null,
    "isEnabled": true,
    "id": 53625739
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T20:41:13.7281097+08:00"
}
```
