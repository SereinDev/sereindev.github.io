# 计时器

## `setTimeout`

```ts
setTimeout(
    handler: Function,
    timeout: number,
    ...arguments: any[]
): number
```

和浏览器中的[`window.setTimeout`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)一致

## `clearTimeout`

```ts
clearTimeout(id: number): void
```

和浏览器中的[`window.clearTimeout`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearTimeout)一致

## `setInterval`

```ts
setInterval(
    handler: Function,
    timeout: number,
    ...arguments: any[]
): number
```

和浏览器中的[`window.setInterval`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setInterval)一致

## `clearInterval`

```ts
clearInterval(id: number): void
```

和浏览器中的[`window.clearInterval`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/clearInterval)一致

## 已知问题

:::warning

当`arguments`传入一个参数且类型为`Array`时，可能会将此参数`Array`中的各项作为调用`handler`时填充的参数

```ts
setTimeout(func, 1000, [1, 2, 3]);

// 1000ms后执行`func(1, 2, 3)`而不是`func([1, 2, 3])`
```

:::
