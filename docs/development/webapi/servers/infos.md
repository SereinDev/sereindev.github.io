# 获取所有服务器信息

```http
GET /servers HTTP/1.1
```

## 返回内容

| 字段 | 类型                       | 说明         |
| ---- | -------------------------- | ------------ |
| -    | Dictionary\<string,Server\> | 服务器键值对 |

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "server1": {
            "status": false,
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
        }
    },
    "time": "2024-10-12T20:27:49.7666299+08:00"
}
```
