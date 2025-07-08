# 内存状态

```http
GET /hardware/memory-status HTTP/1.1
```

:::note

若要获取内存条的相关信息，详见[此处](./memory)

:::

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 响应示例

```json
{
  "data": {
    "totalPhysical": 29860155392,
    "availablePhysical": 21384384512,
    "totalPageFile": 50261250048,
    "availablePageFile": 31179538432,
    "totalVirtual": 140737488224256,
    "availableVirtual": 138255905923072,
    "availableExtendedVirtual": 0
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:56:04.713423+08:00"
}
```
