# 打印机

```http
GET /hardware/printers HTTP/1.1
```

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": [
        {
            "caption": "Microsoft Print to PDF",
            "default": false,
            "description": "",
            "horizontalResolution": 600,
            "local": true,
            "name": "Microsoft Print to PDF",
            "network": false,
            "shared": false,
            "verticalResolution": 600
        }
    ],
    "time": "2024-10-13T22:38:15.4395291+08:00"
}
```
