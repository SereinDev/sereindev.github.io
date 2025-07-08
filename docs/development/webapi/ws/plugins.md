# 插件

获取控制台输出

## 路径

```txt
/ws/plugins
```

## 事件

| 事件名        | `origin` 值             | 说明         |
| ------------- | ----------------------- | ------------ |
| `information` | `Serein` / 插件输出名称 | 信息日志输出 |
| `warning`     | `Serein` / 插件输出名称 | 警告日志     |
| `error`       | `Serein` / 插件输出名称 | 错误日志输出 |

## 示例

```json
{
    "type": "information",
    "origin": "Serein",
    "data": "开始加载插件"
}
```
