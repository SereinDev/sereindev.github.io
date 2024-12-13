# 数据格式

所有广播消息均使用JSON文本传输

```json
{
    "type": "Output",
    "data": "Hello World."
}
```

| 字段名 | 说明     | 类型               |
| ------ | -------- | ------------------ |
| `type` | 广播类型 | `string`           |
| `data` | 数据主体 | `string` \| `null` |

## 广播类型

| 类型          | 说明         |
| ------------- | ------------ |
| `Started`     | 服务器启动   |
| `Stopped`     | 服务器停止   |
| `Removed`     | 服务器被删除 |
| `Input`       | 输入         |
| `Output`      | 输出         |
| `Error`       | 错误消息     |
| `Information` | 信息消息     |

:::note

当且仅当类型是 `Started`、`Stopped`、`Removed` 的其中之一时，`data`为`null`

:::
