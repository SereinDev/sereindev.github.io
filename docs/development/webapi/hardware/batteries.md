# 电池

```http
GET /hardware/batteries HTTP/1.1
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
      "fullChargeCapacity": 0,
      "designCapacity": 0,
      "batteryStatus": 2,
      "estimatedChargeRemaining": 100,
      "estimatedRunTime": 71582788,
      "expectedLife": 0,
      "maxRechargeTime": 0,
      "timeOnBattery": 0,
      "timeToFullCharge": 0,
      "batteryStatusDescription": ""
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:49:04.1151839+08:00"
}
```
