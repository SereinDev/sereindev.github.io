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
    "code": 200,
    "errorMsg": null,
    "data": {
        "connection": {
            "accessToken": null,
            "autoEscape": false,
            "autoReconnect": false,
            "saveLog": false,
            "outputData": false,
            "givePermissionToAllAdmins": false,
            "groups": [],
            "administrators": [],
            "headers": {},
            "uri": "ws://127.0.0.1:8080",
            "useReverseWebSocket": false,
            "subProtocols": []
        },
        "webApi": {
            "enable": true,
            "urlPrefixes": [
                "http://127.0.0.1:50000/"
            ],
            "allowCrossOrigin": false,
            "maxRequestsPerSecond": 50,
            "whiteList": [],
            "accessTokens": [],
            "certificate": {
                "enable": false,
                "autoRegisterCertificate": false,
                "autoLoadCertificate": false,
                "path": null,
                "password": null
            }
        },
        "application": {
            "autoUpdate": false,
            "checkUpdate": true,
            "customTitle": "{serein.version}",
            "enableSentry": true,
            "theme": 0,
            "cliCommandHeader": "//",
            "pluginEventMaxWaitingTime": 500,
            "jsGlobalAssemblies": [
                "System"
            ],
            "jsPatternToSkipLoadingSingleFile": [
                ".module.js"
            ],
            "disableBinderWhenServerClosed": false,
            "regexForCheckingGameId": "^[a-zA-Z0-9_\\s\\-]{3,16}$",
            "pattenForEnableMatchingMuiltLines": [
                "players online:",
                "个玩家在线"
            ]
        },
        "reactions": {
            "ServerStart": [
                "[g]服务器正在启动"
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
            "SereinCrash": [
                "[g]唔……发生了一点小问题(っ °Д °;)っ\n请查看Serein错误弹窗获取更多信息"
            ],
            "PermissionDeniedFromGroupMsg": [
                "[g][CQ:at,qq={ID}] 你没有执行这个命令的权限"
            ],
            "PermissionDeniedFromPrivateMsg": [
                "[p]你没有执行这个命令的权限"
            ]
        }
    },
    "time": "2024-10-12T20:25:11.5049053+08:00"
}
```
