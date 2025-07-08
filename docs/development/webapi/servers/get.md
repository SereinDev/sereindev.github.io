# 获取服务器信息

```http
GET /servers/{id} HTTP/1.1
```

## 请求

### 方法

`GET`

### 路径参数

| 参数名 | 说明      |
| ------ | --------- |
| `id`   | 服务器 Id |

## 响应

### 状态码

- `200`
- `404`
  - 未找到指定的服务器

### 内容

| 字段 | 类型     | 说明   |
| ---- | -------- | ------ |
| -    | [Server] | 服务器 |

[Server]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Services/Servers/Server.cs

### 响应示例

```json
{
  "data": {
    "restartStatus": 0,
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
      "name": "未命名",
      "fileName": "",
      "argument": "",
      "environment": {},
      "autoStopWhenCrashing": true,
      "autoRestart": false,
      "outputCommandUserInput": true,
      "saveLog": false,
      "lineTerminator": "\r\n",
      "inputEncoding": 0,
      "outputEncoding": 0,
      "outputStyle": 1,
      "portIPv4": 19132,
      "stopCommands": [
        "stop"
      ],
      "startWhenSettingUp": false,
      "useUnicodeChars": false,
      "pty": {
        "isEnabled": false,
        "terminalWidth": 150,
        "terminalHeight": 80,
        "forceWinPty": true
      }
    },
    "pluginManager": {
      "plugins": [],
      "currentPluginsDirectory": null
    },
    "logger": {
      "id": "example",
      "history": []
    }
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T16:04:46.3600211+08:00"
}
```
