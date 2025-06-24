# 关闭服务器

```http
GET /servers/{:id}/stop HTTP/1.1
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器 Id |

## 返回示例

```json
{
    "code": 202,
    "errorMsg": null,
    "data": null,
    "time": "2024-10-12T20:44:08.0818311+08:00"
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
