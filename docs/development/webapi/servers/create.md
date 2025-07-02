# 创建服务器

```http
POST /servers/{:id} HTTP/1.1
Content-Type: application/json

{
    "configuration": { /** ... */ }
}
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器 Id |

## 请求参数

| 参数名          | 说明       |
| --------------- | ---------- |
| `configuration` | 服务器配置 |

```http title="示例"
POST /servers/server1 HTTP/1.1
Content-Type: application/json

{
    "configuration": {
        "name": "生存1服",
        "fileName": "start.bat"
    }
}
```
