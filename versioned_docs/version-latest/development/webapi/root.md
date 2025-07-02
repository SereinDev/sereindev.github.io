# 获取所有终结点

```http
GET / HTTP/1.1
```

## 返回内容

| 字段 | 类型                | 说明                 |
| ---- | ------------------- | -------------------- |
| -    | ApiEndpointRecord[] | 终结点列表（见示例） |

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": [
        {
            "route": "/connection",
            "method": "GET"
        },
        {
            "route": "/connection/open",
            "method": "GET"
        },
        {
            "route": "/connection/close",
            "method": "GET"
        },
        {
            "route": "/hardware/memoryStatus",
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
            "route": "/hardware/mouses",
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
            "route": "/hardware/soundDevices",
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
            "route": "/servers",
            "method": "GET"
        },
        {
            "route": "/servers/{id}",
            "method": "POST"
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
            "route": "/servers/{id}/start",
            "method": "GET"
        },
        {
            "route": "/servers/{id}/stop",
            "method": "GET"
        },
        {
            "route": "/servers/{id}/terminate",
            "method": "GET"
        },
        {
            "route": "/servers/{id}/input",
            "method": "GET"
        },
        {
            "route": "/servers/{id}/input",
            "method": "POST"
        },
        {
            "route": "/setting",
            "method": "GET"
        }
    ],
    "time": "2024-10-24T19:47:13.883246+08:00"
}
```
