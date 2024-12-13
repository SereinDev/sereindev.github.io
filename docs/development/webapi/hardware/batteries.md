# 电池

```http
GET /hardware/batteries HTTP/1.1
```

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
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
    "time": "2024-10-13T22:25:28.5191111+08:00"
}
```
