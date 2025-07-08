# 重新加载所有插件

```http
POST /plugin-manager/reload HTTP/1.1
```

## 请求

### 方法

`POST`

## 响应

### 状态码

- `202`
  - 重新加载中
- `403`
  - 正在加载插件

### 响应示例

```json
{
  "data": null,
  "errorMsg": null,
  "details": [],
  "time": "2025-07-04T19:53:26.8462963+08:00"
}
```
