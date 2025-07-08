# 获取所有服务器信息

```http
GET /servers HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

- `200`
- `404`
  - 未找到指定的服务器

### 内容

| 字段 | 类型                       | 说明         |
| ---- | -------------------------- | ------------ |
| -    | Record\<string, [Server]\> | 服务器键值对 |

[Server]: https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Services/Servers/Server.cs

### 响应示例

```json
{
  "data": {
    "myserver": {
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
        "name": "生存1服",
        "fileName": "1.bat",
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
          "isEnabled": true,
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
        "id": "myserver",
        "history": []
      }
    }
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-02T15:57:21.8658485+08:00"
}
```
