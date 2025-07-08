# 输入到服务器

```http
POST /servers/{id}/input HTTP/1.1
Content-Type: application/json

[ /** ... */ ]
```

## 请求

### 方法

`POST`

### 路径参数

| 参数名 | 说明      |
| ------ | --------- |
| `id`   | 服务器 Id |

### 请求体参数

| 参数名 | 说明       |
| ------ | ---------- |
| -      | 字符串列表 |

### 请求示例

```http title="示例"
POST /servers/server1/input HTTP/1.1
Content-Type: application/json

["1111", "2222"]
```

## 响应

### 状态码

- `202`
  - 输入成功
- `400`
  - 请求中未包含有效的服务器 Id
- `403`
  - 服务器未运行
- `404`
  - 未找到指定的服务器

### 响应示例

```json
{
  "data": null,
  "errorMsg": null,
  "details": [],
  "time": "2024-10-12T20:43:40.4236248+08:00"
}
