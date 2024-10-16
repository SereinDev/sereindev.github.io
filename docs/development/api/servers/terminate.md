# 强制结束服务器

```http
GET /servers/{:id}/terminate HTTP/1.1
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器Id |

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": null,
    "time": "2024-10-12T20:43:40.4236248+08:00"
}
```

```json
{
    "code": 403,
    "errorMsg": "服务器未运行",
    "data": null,
    "time": "2024-10-12T20:39:00.5250945+08:00"
}
```
