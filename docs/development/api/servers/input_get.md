# 输入服务器（GET）

```http
GET /servers/{:id}/input HTTP/1.1
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器Id |

## 查询参数

| 参数名 | 说明                 |
| ------ | -------------------- |
| `line` | 要输入的内容，可多个 |

```text title="示例"
GET /servers/server1/input?line=1111&line=2222 HTTP/1.1
```

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": null,
    "time": "2024-10-12T20:43:40.4236248+08:00"
}

```json
{
    "code": 403,
    "errorMsg": "服务器未运行",
    "data": null,
    "time": "2024-10-12T20:39:00.5250945+08:00"
}
```
