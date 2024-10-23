# 定时任务

通过Cron表达式在特定的时间执行[命令](./command)，实现定时重启、整点报时、公告滚动等功能

![定时任务](./schedule.png#light)

![定时任务](./schedule_dark.png#dark)

## Cron表达式

分为五个部分，使用空格隔开

```js
// highlight-next-line
* * * * *
- - - - -
| | | | |
| | | | +----- 一周内的第几天 (0 - 6) （周天记为0）
| | | +------- 月 (1 - 12)
| | +--------- 日 (1 - 31)
| +----------- 时 (0 - 23)
+------------- 分 (0 - 59)
```

### 生成器

- [Crontab guru](https://crontab.guru/)
- [Crontab.run](https://crontab.run/zh)

### 语法
  
- [POSIX cron 语法](https://pubs.opengroup.org/onlinepubs/9699919799/utilities/crontab.html#tag_20_25_07)
- [Crontab Expression](https://github.com/atifaziz/NCrontab/wiki/Crontab-Expression)
