# 连接

## 是否连接

```ts
serein.connection.active
```

- 类型
  - `boolean`

## 启动

```ts
serein.connection.start(): void
```

- 若已连接则会报错，可用`try...catch`捕获

## 停止

```ts
serein.connection.stop(): void
```

- 若未连接则会报错，可用`try...catch`捕获

## 发送文本

```ts
serein.connection.sendData(text: string): void
```

| 参数   | 类型     | 说明       |
| ------ | -------- | ---------- |
| `text` | `string` | 发送的内容 |

## 发送私聊消息

```ts
serein.connection.sendPrivateMsg(id: number, message: string): void
```

| 参数      | 类型     | 说明   |
| --------- | -------- | ------ |
| `id`      | `number` | 用户Id |
| `message` | `string` | 消息   |

## 发送群聊消息

```ts
serein.connection.sendGroupMsg(id: number, message: string): void
```

| 参数      | 类型     | 说明   |
| --------- | -------- | ------ |
| `id`      | `number` | 群聊Id |
| `message` | `string` | 消息   |
