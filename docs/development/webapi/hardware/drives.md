# 驱动器

```http
GET /hardware/drives HTTP/1.1
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
      "partitionList": [
        {
          "volumeList": [],
          "bootable": true,
          "bootPartition": true,
          "caption": "磁盘 #0，分区 #0",
          "description": "GPT: 系统",
          "diskIndex": 0,
          "index": 0,
          "name": "磁盘 #0，分区 #0",
          "primaryPartition": true,
          "size": 272629760,
          "startingOffset": 1048576
        },
        {
            // ...
        }
      ],
      "caption": "******",
      "description": "磁盘驱动器",
      "firmwareRevision": "******",
      "index": 0,
      "manufacturer": "(标准磁盘驱动器)",
      "model": "******",
      "name": "******",
      "partitions": 5,
      "serialNumber": "******",
      "size": 1024203640320
    }
  ],
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T15:56:48.33881+08:00"
}
```
