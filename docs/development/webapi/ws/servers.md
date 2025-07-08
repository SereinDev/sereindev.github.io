# 服务器

服务器状态变更、控制台输入输出

## 路径

```txt
/ws/server?id={id}
```

| 参数名 | 说明      | 必需 |
| ------ | --------- | ---- |
| `id`   | 服务器 Id | 是   |

- 指定 Id 的服务器不存在时连接会被立即断开

## 事件

| 事件名        | `origin` 值 | 说明                |
| ------------- | ----------- | ------------------- |
| `started`     | `server`    | 服务器启动          |
| `stopped`     | `server`    | 服务器停止          |
| `removed`     | `server`    | 服务器被删除        |
| `input`       | `server`    | 输入                |
| `output`      | `server`    | 原始输出            |
| `information` | `Serein`    | Serein 信息日志输出 |
| `error`       | `Serein`    | Serein 错误日志输出 |

## 示例

```json
{
    "type": "started",
    "origin": "server",
    "data": null
}
```

```json
{
    "type": "information",
    "origin": "Serein",
    "data": "“D:\\Server\\start.bat”启动中"
}
```

```json
{
    "type": "output",
    "origin": "server",
    "data": "[10:14:19 INFO]: Done (18.449s)! For help, type \"help\""
}
```

```json
{
    "type": "stopped",
    "origin": "server",
    "data": null
}
```

```json
{
    "type": "error",
    "origin": "Serein",
    "data": "One or more errors occurred. (...)"
}
```
