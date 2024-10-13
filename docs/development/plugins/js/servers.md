# 服务器

## 所有服务器

`serein.servers`

- 类型
  - `{ [id: string]: Server }`

## 服务器状态

`serein.servers[id].status`

- 类型
  - [`ServerStatus`](./structures/ServerStatus)

## 服务器进程ID

`serein.servers[id].pid`

- 类型
  - `number` | `null`

## 服务器信息

`serein.servers[id].info`

- 类型
  - [`ServerInfo`](./structures/ServerInfo)

## 开启服务器

```ts
serein.servers[id].start(): void
```

- 若服务器已在运行或启动失败（文件不存在、权限不足等）则会报错，可用`try...catch`捕获

## 关闭服务器

```ts
serein.servers[id].stop(): void
```

- 若服务器已关闭则会报错，可用`try...catch`捕获
- 实质上是向服务器发送关闭命令（默认为`stop`）

## 强制关闭服务器

```ts
serein.servers[id].terminate(): void
```

- 若服务器已关闭或强制结束失败（系统原因）则会报错，可用`try...catch`捕获

## 输入到服务器

```ts
serein.servers[id].input(...lines: string[]): void
```

| 参数    | 类型       | 说明   |
| ------- | ---------- | ------ |
| `lines` | `string[]` | 输入行 |

- 若服务器已关闭或输入失败（系统原因）则会报错，可用`try...catch`捕获

```ts title="示例"
serein.servers['bds'].input(
    'help', 
    'say 你好',
    'say Minecraft'
    );
```
