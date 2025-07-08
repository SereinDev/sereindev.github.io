# 获取 Serein 信息

```http
GET / HTTP/1.1
```

## 请求

### 方法

`GET`

## 响应

### 状态码

`200`

### 内容

| 字段                     | 类型    | 说明                                 |
| ------------------------ | ------- | ------------------------------------ |
| `assemblyName`           | string  | 程序集名称                           |
| `version`                | string  | 版本                                 |
| `fullVersion`            | string  | 详细版本                             |
| `type`                   | number  | [类型](../../tutorial/rookie/choose) |
| `isReleaseConfiguration` | boolean | 是否为发布配置                       |
| `isSingleFile`           | boolean | 是否为单文件发布                     |

### 响应示例

```json
{
  "errorMsg": null,
  "data": {
    "assemblyName": "Serein.Core, Version=2.1.0.0, Culture=neutral, PublicKeyToken=null",
    "version": "2.1.0.0",
    "fullVersion": "2.1.0+a6f38b12502d8c52b5423d7e0f5e8ec2c554caa3",
    "type": 3,
    "isReleaseConfiguration": false,
    "isSingleFile": false
  },
  "time": "2025-07-02T15:42:50.1661194+08:00"
}
```
