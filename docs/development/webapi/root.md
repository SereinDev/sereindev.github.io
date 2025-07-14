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
| `processId`              | number  | 进程 Id                              |
| `clrVersion`             | string  | .NET 运行库版本                      |

### 响应示例

```json
{
  "data": {
    "assemblyName": "Serein.Core, Version=2.1.0.0, Culture=neutral, PublicKeyToken=null",
    "version": "2.1.0.0",
    "fullVersion": "2.1.0+9b3768f8dfd7f0e1b59ff4c0d943ba894d8448bd",
    "type": 3,
    "isReleaseConfiguration": false,
    "isSingleFile": false,
    "processId": 30284,
    "clrVersion": "8.0.17"
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-09T16:22:29.0286093+08:00"
}
```
