# 获取所有路由

```http
GET /routes HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 内容

| 字段 | 类型                   | 说明                 |
| ---- | ---------------------- | -------------------- |
| -    | [ApiEndpointRecord]\[] | 终结点列表（见示例） |

[ApiEndpointRecord]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Network/Web/ApiEndpointRecord.cs

### 响应示例

```json
{
  "data": [
    {
      "route": "/connection",
      "method": "GET"
    },
    {
      "route": "/connection",
      "method": "POST"
    },
    {
      "route": "/connection",
      "method": "DELETE"
    },
    {
      "route": "/hardware/memory-status",
      "method": "GET"
    },
    {
      "route": "/hardware/batteries",
      "method": "GET"
    },
    {
      "route": "/hardware/bios",
      "method": "GET"
    },
    {
      "route": "/hardware/system",
      "method": "GET"
    },
    {
      "route": "/hardware/cpus",
      "method": "GET"
    },
    {
      "route": "/hardware/memory",
      "method": "GET"
    },
    {
      "route": "/hardware/drives",
      "method": "GET"
    },
    {
      "route": "/hardware/keyboards",
      "method": "GET"
    },
    {
      "route": "/hardware/motherboards",
      "method": "GET"
    },
    {
      "route": "/hardware/monitors",
      "method": "GET"
    },
    {
      "route": "/hardware/mice",
      "method": "GET"
    },
    {
      "route": "/hardware/os",
      "method": "GET"
    },
    {
      "route": "/hardware/printers",
      "method": "GET"
    },
    {
      "route": "/hardware/sound-devices",
      "method": "GET"
    },
    {
      "route": "/metadata",
      "method": "GET"
    },
    {
      "route": "/",
      "method": "GET"
    },
    {
      "route": "/matches",
      "method": "GET"
    },
    {
      "route": "/matches/{id}",
      "method": "GET"
    },
    {
      "route": "/matches",
      "method": "POST"
    },
    {
      "route": "/matches/{id}",
      "method": "DELETE"
    },
    {
      "route": "/matches/{id}",
      "method": "PUT"
    },
    {
      "route": "/plugin-manager",
      "method": "GET"
    },
    {
      "route": "/plugin-manager/reload",
      "method": "POST"
    },
    {
      "route": "/plugins",
      "method": "GET"
    },
    {
      "route": "/plugins/{id}",
      "method": "GET"
    },
    {
      "route": "/plugins/{id}/disable",
      "method": "POST"
    },
    {
      "route": "/schedules",
      "method": "GET"
    },
    {
      "route": "/schedules/{id}",
      "method": "GET"
    },
    {
      "route": "/schedules",
      "method": "POST"
    },
    {
      "route": "/schedules/{id}",
      "method": "DELETE"
    },
    {
      "route": "/schedules/{id}",
      "method": "PUT"
    },
    {
      "route": "/servers",
      "method": "GET"
    },
    {
      "route": "/servers",
      "method": "POST"
    },
    {
      "route": "/servers/{id}",
      "method": "PUT"
    },
    {
      "route": "/servers/{id}",
      "method": "DELETE"
    },
    {
      "route": "/servers/{id}",
      "method": "GET"
    },
    {
      "route": "/servers/{id}/history",
      "method": "GET"
    },
    {
      "route": "/servers/{id}/start",
      "method": "POST"
    },
    {
      "route": "/servers/{id}/stop",
      "method": "POST"
    },
    {
      "route": "/servers/{id}/terminate",
      "method": "POST"
    },
    {
      "route": "/servers/{id}/input",
      "method": "POST"
    },
    {
      "route": "/settings",
      "method": "GET"
    },
    {
      "route": "/settings/connection",
      "method": "PUT"
    },
    {
      "route": "/settings/web-api",
      "method": "PUT"
    },
    {
      "route": "/settings/application",
      "method": "PUT"
    },
    {
      "route": "/settings/reactions",
      "method": "PUT"
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T18:08:13.9253086+08:00"
}
```
