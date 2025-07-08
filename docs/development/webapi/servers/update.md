# 更新服务器配置

```http
PUT /servers/{id} HTTP/1.1
Content-Type: application/json

{
    "configuration": { /** ... */ }
}
```

## 请求

### 方法

`PUT`

### 路径参数

| 参数名 | 说明      |
| ------ | --------- |
| `id`   | 服务器 Id |

### 请求体参数

| 参数名          | 说明       |
| --------------- | ---------- |
| `configuration` | 服务器配置 |

### 请求示例

```http title="示例"
POST /servers/server1 HTTP/1.1
Content-Type: application/json

{
    "configuration": {
        "name": "生存1服",
        "fileName": "start.bat"
    }
}
```

## 响应

### 状态码

- `200`
  - 服务器更新成功
- `400`
  - 请求中未包含有效的服务器配置
- `404`
  - 未找到指定的服务器

### 内容

修改后的服务器对象

| 字段 | 类型   | 说明   |
| ---- | ------ | ------ |
| -    | Server | 服务器 |

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
