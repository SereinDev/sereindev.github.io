# 储存

为插件提供便捷的字符串储存功能

<details>

<summary>
TypeScript类型声明
</summary>

```ts
/**
 * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage)
 */
interface Storage {
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/length)
   */
  readonly length: number;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/clear)
   */
  clear(): void;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/getItem)
   */
  getItem(key: string): string | null;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/key)
   */
  key(index: number): string | null;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/removeItem)
   */
  removeItem(key: string): void;
  /**
   * [MDN Reference](https://developer.mozilla.org/docs/Web/API/Storage/setItem)
   */
  setItem(key: string, value: string): void;
  [name: string]: any;
}
```

</details>

<details>

<summary>
C#类型声明
</summary>

```cs
public interface IStorage
{
    int Length { get; }

    void Clear();

    string? GetItem(string key);

    void RemoveItem(string key);

    void SetItem(string key, string value);

    string? Key(int index);

    string? this[string key] { get; set; }
}
```

</details>

## 本地储存

保存在本地文件（`Serein/plugins/local-storage.json`）中

:::tip

你可以借助此功能实现一些简单的配置文件的储存

:::

### Js

```ts
declare var localStorage: Storage;
```

与浏览器中的[`Window.localStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/localStorage)一致

### Net

```cs
IStorage localStorage = serviceProvider.GetRequiredService<LocalStorage>();
```

## 会话储存

仅保存在内存中，退出后数据丢失

:::tip

通常用于储存在同一个Serein生命周期内可以重复利用的数据

:::

### Js

```ts
declare var sessionStorage: Storage;
```

与浏览器中的[`Window.sessionStorage`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/sessionStorage)一致

### Net

```cs
IStorage sessionStorage = serviceProvider.GetRequiredService<SessionStorage>();
```