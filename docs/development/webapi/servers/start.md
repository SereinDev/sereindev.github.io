# 启动服务器

```http
GET /servers/{:id}/start HTTP/1.1
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器 Id |

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
    "errorMsg": "启动文件为空",
    "data": null,
    "time": "2024-10-12T20:38:25.8339327+08:00"
}
```
