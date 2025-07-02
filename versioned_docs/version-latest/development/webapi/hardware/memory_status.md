# 内存状态

```http
GET /hardware/memoryStatus HTTP/1.1
```

:::note

若要获取内存条的相关信息，详见[此处](./memory)

:::

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": {
        "totalPhysical": 8155979776,
        "availablePhysical": 1709805568,
        "totalPageFile": 23997460480,
        "availablePageFile": 7518126080,
        "totalVirtual": 140737488224256,
        "availableVirtual": 138256505991168,
        "availableExtendedVirtual": 0
    },
    "time": "2024-10-13T22:26:23.657056+08:00"
}
```
