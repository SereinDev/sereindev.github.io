# 获取连接信息

```http
GET /connection HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 内容

连接状态信息

| 字段        | 类型           | 说明                    |
| ----------- | -------------- | ----------------------- |
| `isActive`  | boolean        | 是否启动                |
| `sent`      | number         | 发送的数据包数量        |
| `received`  | number         | 收到的数据包数量        |
| `startedAt` | string \| null | 连接开始时间（ISO格式） |

## 响应示例

```json
{
  "data": {
    "isActive": false,
    "sent": 0,
    "received": 0,
    "startedAt": null
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-02T15:50:36.4145009+08:00"
}
```
