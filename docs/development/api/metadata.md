# 获取元数据

```http
GET /metadata HTTP/1.1
```

## 返回内容

| 字段          | 类型   | 说明                                 |
| ------------- | ------ | ------------------------------------ |
| `version`     | string | 版本                                 |
| `fullVersion` | string | 详细版本                             |
| `type`        | string | [类型](../../tutorial/rookie/choose) |

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "version": "2.0.0.0",
        "fullVersion": "2.0.0.0-alpha+1bfd185e1f28b86f44b4fd42463ddfa8f9e1de57",
        "type": "Cli"
    },
    "time": "2024-10-12T20:20:54.368191+08:00"
}
```
