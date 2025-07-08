# 连接

获取控制台输出、数据包收发情况

## 路径

```txt
/ws/connection
```

## 事件

| 事件名        | `origin` 值                 | 说明            |
| ------------- | --------------------------- | --------------- |
| `received`    | `Serein` / 适配器类型枚举值 | 接收数据        |
| `sent`        | `Serein` / 适配器类型枚举值 | 发送数据        |
| `information` | `Serein`                    | Serein 信息日志 |
| `warning`     | `Serein`                    | Serein 警告日志 |
| `error`       | `Serein`                    | Serein 错误日志 |

对于 `received` 和 `sent` 的事件，当 `origin` 为 `Serein` 时，`data` 为解析后的控制台输出，如：

```json title='"data":'
"[群聊(123456)] Zaitonn(654321): 这是一条消息(-123456)"
```

其他情况下为对应适配器收到的原始数据文本，如

```json title='"data":'
"{\"time\":1751885353, ...}"
```

## 示例

```json
{
    "type": "information",
    "origin": "Serein",
    "data": "反向 WebSocket 服务器已在 ws://127.0.0.1:12220 开启"
}
```

```json
{
    "type": "error",
    "origin": "Serein",
    "data": "System.Net.Sockets.SocketException: 由于目标计算机积极拒绝，无法连接。"
}
```

```json
{
    "type": "warning",
    "origin": "Serein",
    "data": "连接已断开"
}
```

```json
{
    "type": "received",
    "origin": "OneBot_ForwardWebSocket",
    "data": "{\"time\":1751936917, ...}"
}
```

```json
{
    "type": "received",
    "origin": "Serein",
    "data": "[群聊(954829203)] NaN(22679330): [CQ:image,summary=[动画表情]] (id=543378632)"
}
```
