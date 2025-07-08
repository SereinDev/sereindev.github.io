# 内存

```http
GET /hardware/memory HTTP/1.1
```

:::note

若要获取内存使用状态的信息，详见[此处](./memory_status)

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
  "data": [
    {
      "bankLabel": "******",
      "capacity": 8589934592,
      "formFactor": 0,
      "manufacturer": "******",
      "maxVoltage": 500,
      "minVoltage": 500,
      "partNumber": "******",
      "serialNumber": "******",
      "speed": 6400
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:55:22.3058948+08:00"
}
```
