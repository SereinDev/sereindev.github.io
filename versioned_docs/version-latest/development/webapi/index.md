# 网页接口

## 标准

[RESTFUL](https://restfulapi.net/)

## 示例

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

## 鉴权

若 `webApi.accessTokens` 为空则所有请求都不需要鉴权，否则需要在请求头内加上 `Authorization: Bearer <token>`

## 跨域（CORS）

默认关闭；可在设置中选择开启

开启后会在响应头中添加`Access-Control-Allow-Origin: *`
