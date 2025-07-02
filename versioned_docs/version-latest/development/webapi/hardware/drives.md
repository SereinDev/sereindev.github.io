# 驱动器

```http
GET /hardware/drives HTTP/1.1
```

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
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
                    "volumeList": [
                        {
                            "caption": "C:",
                            "compressed": false,
                            "description": "本地固定磁盘",
                            "fileSystem": "NTFS",
                            "freeSpace": 24776224768,
                            "name": "C:",
                            "size": 126746619904,
                            "volumeName": "***************",
                            "volumeSerialNumber": "************"
                        }
                    ],
                    "bootable": false,
                    "bootPartition": false,
                    "caption": "磁盘 #0，分区 #1",
                    "description": "GPT: 基本数据",
                    "diskIndex": 0,
                    "index": 1,
                    "name": "磁盘 #0，分区 #1",
                    "primaryPartition": true,
                    "size": 126746624000,
                    "startingOffset": 407896064
                },
                {
                    "volumeList": [],
                    "bootable": false,
                    "bootPartition": false,
                    "caption": "磁盘 #0，分区 #2",
                    "description": "GPT: 未知",
                    "diskIndex": 0,
                    "index": 2,
                    "name": "磁盘 #0，分区 #2",
                    "primaryPartition": false,
                    "size": 880803840,
                    "startingOffset": 127154520064
                }
            ],
            "caption": "*****************",
            "description": "磁盘驱动器",
            "firmwareRevision": "**********",
            "index": 0,
            "manufacturer": "(标准磁盘驱动器)",
            "model": "*****************",
            "name": "*****************",
            "partitions": 3,
            "serialNumber": "********************",
            "size": 128034708480
        }
    ],
    "time": "2024-10-13T22:28:27.6314565+08:00"
}
```
