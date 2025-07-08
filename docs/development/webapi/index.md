# 网页接口

## 风格

[RESTFUL](https://restfulapi.net/)

## 示例

```json
{
  "data": {
    "assemblyName": "Serein.Core, Version=2.1.0.0, Culture=neutral, PublicKeyToken=null",
    "version": "2.1.0.0",
    "fullVersion": "2.1.0+a6f38b12502d8c52b5423d7e0f5e8ec2c554caa3",
    "type": 3,
    "isReleaseConfiguration": false,
    "isSingleFile": false
  },
  "errorMsg": null,
  "details": [],
  "time": "2025-07-02T15:42:50.1661194+08:00"
}
```

## 配置

### 鉴权

#### Bearer（内置）

若 `webApi.accessTokens` 为空则所有请求都不需要鉴权，否则需要在请求头内加上 `Authorization: Bearer <token>`

```http
GET /metadata HTTP/1.1

Authorization: Bearer your_token_here
```

#### Basic

需要使用 [更好的API验证方式](https://sereincommunity.github.io/plugins/advanced-auth-gate/) 插件

### 跨域（CORS）

默认关闭；可在设置中选择开启

开启后会在响应头中添加`Access-Control-Allow-Origin: *`
