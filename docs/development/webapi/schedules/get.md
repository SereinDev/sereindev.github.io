# 获取定时任务

```http
GET /schedules/{id} HTTP/1.1
```

## 请求

### 方法

`GET`

### 路径参数

| 参数名 | 说明    |
| ------ | ------- |
| `id`   | 定时任务 Id |

## 响应

### 状态码

- `200`
  - 定时任务存在
- `404`
  - 定时任务不存在

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
