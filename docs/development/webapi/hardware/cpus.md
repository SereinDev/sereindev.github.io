# CPU

```http
GET /hardware/cpus HTTP/1.1
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
      "currentClockSpeed": 3756,
      "description": "******",
      "l1InstructionCacheSize": 524288,
      "l1DataCacheSize": 524288,
      "l2CacheSize": 8388608,
      "l3CacheSize": 16777216,
      "manufacturer": "******",
      "maxClockSpeed": 3801,
      "name": "******",
      "numberOfCores": 8,
      "numberOfLogicalProcessors": 16,
      "processorId": "******",
      "secondLevelAddressTranslationExtensions": false,
      "socketDesignation": "******",
      "virtualizationFirmwareEnabled": true,
      "vmMonitorModeExtensions": false,
      "percentProcessorTime": 1,
      "cpuCoreList": [
        {
          "name": "0",
          "percentProcessorTime": 3
        },
        {
            // ...
        }
      ]
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:58:42.1018218+08:00"
}
```
