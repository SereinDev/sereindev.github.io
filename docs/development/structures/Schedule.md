# Schedule

定时任务

```ts
declare type Schedule = {
  /**
   * Cron表达式
   */
  cronExp: string;

  /**
   * 命令
   */
  command: string;

  /**
   * 启用
   */
  enable: boolean;

  /**
   * 下一次运行时间
   */
  nextTime?: Date;

  /**
   * 描述
   */
  description?: string;
};
```
