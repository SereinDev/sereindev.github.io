# 打印机

```http
GET /hardware/printers HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 响应示例

```json
{
  "data": [
    {
      "caption": "Microsoft Print to PDF",
      "default": true,
      "description": "",
      "horizontalResolution": 600,
      "local": true,
      "name": "Microsoft Print to PDF",
      "network": false,
      "shared": false,
      "verticalResolution": 600
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:52:06.4278745+08:00"
}
```
