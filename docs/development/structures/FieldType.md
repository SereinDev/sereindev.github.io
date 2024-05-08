# FieldType

匹配作用域类型

```ts
declare enum FieldType {
  /**
   * 禁用
   */
  Disabled = 0,

  /**
   * 服务器输出
   */
  ServerOutput = 1,

  /**
   * 服务器输入
   */
  ServerInput = 2,

  /**
   * 群消息
   */
  GroupMsg = 3,

  /**
   * 私聊消息
   */
  PrivateMsg = 4,

  /**
   * 自身消息
   */
  SelfMsg = 5,
}
```
