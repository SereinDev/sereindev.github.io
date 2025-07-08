# 更新网页接口设置

```http
PUT /settings/web-api HTTP/1.1
Content-Type: application/json

{
  "isEnabled":true,
  // ...
}
```

## 请求

### 方法

`PUT`

### 请求体参数

| 参数名 | 说明     |
| ------ | -------- |
| -      | 网页接口设置 |

## 响应

### 状态码

`200`

### 响应示例

```json
{
  "data": null,
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T18:17:09.8104921+08:00"
}
```
