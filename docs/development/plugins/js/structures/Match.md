# Match

匹配对象

```ts
declare type Match = {
  /**
   * 正则表达式
   */
  regExp: string;

  /**
   * 命令
   */
  command: string;

  /**
   * 作用域类型
   */
  fieldType: FieldType;

  /**
   * 需要管理员权限
   */
  requireAdmin: boolean;

  /**
   * 限制参数
   */
  restrictions?: string;

  /**
   * 描述
   */
  description?: string;
};
```
