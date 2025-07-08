# 更新反应设置

```http
PUT /settings/reactions HTTP/1.1
Content-Type: application/json

{
  "ServerStart": [
    "[g]服务器已启动"
  ],
  // ...
}
```

## 请求

### 方法

`PUT`

### 请求体参数

| 参数名                                                                                                             | 说明     |
| ------------------------------------------------------------------------------------------------------------------ | -------- |
| [*ReactionType*](https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Commands/ReactionType.cs#L3)中的一个 | 反应类型 |

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
