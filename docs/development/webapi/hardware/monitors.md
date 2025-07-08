# 显示器

```http
GET /hardware/monitors HTTP/1.1
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
      "caption": "******",
      "description": "******",
      "monitorManufacturer": "******",
      "monitorType": "******",
      "name": "******",
      "pixelsPerXLogicalInch": 192,
      "pixelsPerYLogicalInch": 192,
      "active": true,
      "manufacturerName": "******",
      "productCodeID": "******",
      "serialNumberID": "0",
      "userFriendlyName": "",
      "weekOfManufacture": 0,
      "yearOfManufacture": 2023
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:54:44.456018+08:00"
}
```
