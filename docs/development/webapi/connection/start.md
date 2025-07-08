# 启动连接功能

```http
POST /connection HTTP/1.1
```

## 请求

### 方法

`POST`

## 响应

### 状态码

- `202`
  - 启动成功
- `403`
  - 连接功能未关闭
  - 使用了不支持的适配器类型

### 响应示例

```json
{
  "data": null,
  "errorMsg": null,
  "details": [],
  "time": "2025-07-02T15:53:54.3530914+08:00"
}
```
