# CPU

```http
GET /hardware/cpus HTTP/1.1
```

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": [
        {
            "caption": "Intel64 Family 6 Model 126 Stepping 5",
            "currentClockSpeed": 3036,
            "description": "Intel64 Family 6 Model 126 Stepping 5",
            "l1InstructionCacheSize": 131072,
            "l1DataCacheSize": 196608,
            "l2CacheSize": 2097152,
            "l3CacheSize": 6291456,
            "manufacturer": "GenuineIntel",
            "maxClockSpeed": 1498,
            "name": "Intel(R) Core(TM) i5-1035G4 CPU @ 1.10GHz",
            "numberOfCores": 4,
            "numberOfLogicalProcessors": 8,
            "processorId": "*****************************************",
            "secondLevelAddressTranslationExtensions": true,
            "socketDesignation": "U3E1",
            "virtualizationFirmwareEnabled": true,
            "vmMonitorModeExtensions": true,
            "percentProcessorTime": 41,
            "cpuCoreList": [
                {
                    "name": "0",
                    "percentProcessorTime": 44
                },
                {
                    "name": "1",
                    "percentProcessorTime": 19
                },
                {
                    "name": "2",
                    "percentProcessorTime": 19
                },
                {
                    "name": "3",
                    "percentProcessorTime": 13
                },
                {
                    "name": "4",
                    "percentProcessorTime": 87
                },
                {
                    "name": "5",
                    "percentProcessorTime": 19
                },
                {
                    "name": "6",
                    "percentProcessorTime": 50
                },
                {
                    "name": "7",
                    "percentProcessorTime": 37
                }
            ]
        }
    ],
    "time": "2024-10-13T22:19:45.2828931+08:00"
}
```
