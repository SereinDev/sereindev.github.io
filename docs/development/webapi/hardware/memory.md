# 内存

```http
GET /hardware/memory HTTP/1.1
```

:::note

若要获取内存使用状态的信息，详见[此处](./memory_status)

:::

## 返回示例

```json
{
    "code": 200,
    "errorMsg": null,
    "data": [
        {
            "bankLabel": "BANK 0",
            "capacity": 4294967296,
            "formFactor": 0,
            "manufacturer": "Samsung",
            "maxVoltage": 0,
            "minVoltage": 0,
            "partNumber": "K4U6E3S4AA-MGCL     ",
            "serialNumber": "",
            "speed": 4267
        }
    ],
    "time": "2024-10-13T22:27:01.0256592+08:00"
}
```
