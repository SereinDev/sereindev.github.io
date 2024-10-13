# 获取服务器信息

```http
GET /servers/{:id} HTTP/1.1
```

## 路径参数

| 参数名 | 说明     |
| ------ | -------- |
| `id`   | 服务器Id |

## 返回内容

| 字段 | 类型   | 说明   |
| ---- | ------ | ------ |
| -    | Server | 服务器 |

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "status": 0,
        "pid": null,
        "info": {
            "fileName": null,
            "argument": null,
            "startTime": null,
            "exitTime": null,
            "outputLines": 0,
            "inputLines": 0,
            "cpuUsage": 0,
            "stat": null
        },
        "commandHistory": [],
        "commandHistoryIndex": 0,
        "configuration": {
            "name": "生存1服",
            "fileName": "",
            "argument": "",
            "autoStopWhenCrashing": true,
            "autoRestart": false,
            "outputCommandUserInput": true,
            "saveLog": false,
            "lineTerminator": "\r\n",
            "inputEncoding": 0,
            "outputEncoding": 0,
            "outputStyle": 0,
            "portIPv4": 19132,
            "stopCommands": [
                "stop"
            ],
            "startWhenSettingUp": false,
            "useUnicodeChars": false
        },
        "pluginManager": {
            "plugins": [],
            "currentPluginsDirectory": null
        }
    },
    "time": "2024-10-12T20:30:13.4851742+08:00"
}
```

```json
{
    "code": 404,
    "errorMsg": "未找到指定的服务器",
    "data": null,
    "time": "2024-10-12T20:28:53.5945982+08:00"
}
```
