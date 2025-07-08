# 获取设置

```http
GET /setting HTTP/1.1
```

## 返回内容

| 字段 | 类型    | 说明 |
| ---- | ------- | ---- |
| -    | Setting | 设置 |

## 返回示例

```json
{
  "data": {
    "connection": {
      "adapter": 1,
      "connectWhenSettingUp": false,
      "saveLog": false,
      "outputData": true,
      "listenedIds": [],
      "administratorUserIds": [],
      "self": {
        "userId": "",
        "platform": ""
      },
      "oneBot": {
        "version": 0,
        "accessToken": "",
        "autoEscape": false,
        "grantPermissionToGroupOwnerAndAdmins": false,
        "headers": {},
        "uri": "ws://127.0.0.1:12220",
        "subProtocols": [],
        "autoReconnect": true
      },
      "satori": {
        "uri": "",
        "accessToken": ""
      }
    },
    "webApi": {
      "isEnabled": true,
      "urlPrefixes": [
        "http://127.0.0.1:50000/"
      ],
      "allowCrossOrigin": false,
      "maxRequestsPerSecond": 50,
      "whiteList": [],
      "accessTokens": [],
      "certificate": {
        "isEnabled": false,
        "autoRegisterCertificate": false,
        "autoLoadCertificate": false,
        "path": null,
        "password": ""
      }
    },
    "application": {
      "autoUpdate": false,
      "checkUpdate": false,
      "customTitle": "{serein.version}",
      "enableSentry": true,
      "theme": 1,
      "cliCommandHeader": "//",
      "pluginEventMaxWaitingTime": 20,
      "jsGlobalAssemblies": [
        "System"
      ],
      "jsPatternToSkipLoadingSingleFile": [
        ".module.js"
      ],
      "disableBinderWhenServerClosed": false,
      "regexForCheckingGameId": "^[a-zA-Z0-9_\\s\\-]{3,16}$",
      "pattenForEnableMatchingMuiltLines": []
    },
    "reactions": {
      "ServerStart": [
        "[g]服务器已启动"
      ],
      "ServerExitedNormally": [
        "[g]服务器已关闭"
      ],
      "ServerExitedUnexpectedly": [
        "[g]服务器异常关闭"
      ],
      "GroupIncreased": [
        "[g]欢迎[CQ:at,qq={ID}]入群~"
      ],
      "GroupDecreased": [
        "[g]用户{ID}退出了群聊"
      ],
      "GroupPoke": [
        "[g]别戳我……(*/ω＼*)"
      ],
      "BindingSucceeded": [
        "[g]绑定成功"
      ],
      "UnbindingSucceeded": [
        "[g]解绑成功"
      ],
      "SereinCrash": [
        "[g]唔……发生了一点小问题(っ °Д °;)っ\\n1请查看Serein错误弹窗获取更多信息"
      ],
      "PermissionDeniedFromGroupMsg": [
        "[g][CQ:at,qq={ID}] 你没有执行这个命令的权限"
      ],
      "PermissionDeniedFromPrivateMsg": [
        "[p]你没有执行这个命令的权限"
      ]
    }
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-03T16:32:01.738366+08:00"
}
```
