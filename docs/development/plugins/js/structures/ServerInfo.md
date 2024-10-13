# ServerInfo

服务器信息

```ts
declare type ServerInfo = {
  /**
   * 启动文件
   */
  readonly fileName?: string;

  /**
   * 启动参数
   */
  readonly argument?: string;

  /**
   * 启动时间
   */
  readonly startTime?: Date;

  /**
   * 进程退出时间
   */
  readonly exitTime?: Date;

  /**
   * 输出行数
   */
  readonly outputLines?: number;

  /**
   * 输入行数
   */
  readonly inputLines?: number;

  /**
   * CPU使用率
   */
  readonly usage?: number;
};
```
