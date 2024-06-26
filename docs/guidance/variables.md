# 命令变量

在命令中插入时间、系统状态等动态信息

:::note
示例值**仅供参考**，请以实际值为准
:::

## 使用方法

在命令中插入`{变量名}` 即可，不区分大小写

:::tip 示例

```txt title='命令'
[g]现在是{datetime}
```

👇

```txt title='命令'
[g]现在是现在是2024/1/1 00:00:00
```

:::

## Serein

|         名称         | 说明       | 示例                      |
| :------------------: | ---------- | ------------------------- |
|    `serein.type`     | 类型       | *Cli*                     |
|   `serein.version`   | 版本号     | *2.0.0.0*                 |
| `serein.fullversion` | 完整版本号 | *2.0.0.0-CompliedLocally* |

## 服务器

|              名称               | 说明          | 示例              |
| :-----------------------------: | ------------- | ----------------- |
|     `servers[{id}].status`      | 状态          | *已启动 / 未启动* |
|      `servers[{id}].usage`      | 进程CPU使用率 |                   |
|     `servers[{id}].output`      | 输出行数      |                   |
|      `servers[{id}].input`      | 输入行数      |                   |
|      `servers[{id}].time`       | 运行时间      | *1:00:00*         |
|     `servers[{id}].version`     | 版本          | *1.21.0*          |
|      `servers[{id}].motd`       | 介绍          | *1.21.0*          |
| `servers[{id}].players.current` | 当前玩家数    |                   |
|   `servers[{id}].players.max`   | 最大玩家数    |                   |
| `servers[{id}].players.percent` | 玩家数占比    |                   |

:::info

- **你需要将`{id}`替换为服务器的id**
  - 例：你有一个id为`bds`的服务器，现在要获取其服务器状态，则应按如下输入
    ```js
    servers[bds].status
    // 返回：已启动 / 未启动
    ```
- 数值均返回整数
  - 玩家数占比、使用率∈[0,100]

:::

## 消息上下文

### 消息

|   名称   | 说明    | 示例      |
| :------: | ------- | --------- |
| `msg.id` | 消息 ID | `-114514` |

### 发送者

|        名称        | 说明                           | 示例                   |
| :----------------: | ------------------------------ | ---------------------- |
|    `sender.id`     | 发送者 QQ 号                   |                        |
|    `sender.sex`    | 性别                           | *未知 / 男 / 女*       |
|    `sender.age`    | 年龄                           |                        |
| `sender.nickname`  | 昵称                           |                        |
|   `sender.area`    | 地区                           |                        |
|   `sender.card`    | 群名片                         |                        |
|   `sender.level`   | 成员等级                       |                        |
|   `sender.title`   | 专属头衔（群主授予）           |                        |
|   `sender.role`    | 角色                           | *群主 / 管理员 / 成员* |
| `sender.shownName` | 显示名称（群名片若空则为昵称） |                        |

:::info

- 根据OneBot的实现不同，部分值可能**存在差异或为空**
- 以下的变量只能在群聊消息中使用
  - `area`
  - `level`
  - `card`
  - `title`
  - `role`

:::

## 时间

|          名称          | 说明              | 示例                               |
| :--------------------: | ----------------- | ---------------------------------- |
|       `datetime`       | 日期与时间        | *2024/1/1 4:05:01*                 |
|    `datetime.date`     | 日期              | *2024/1/1*                         |
|    `datetime.time`     | 时间              | *4:05:01*                          |
|    `datetime.year`     | 年                | *2024*                             |
|    `datetime.month`    | 月                | *1*                                |
|     `datetime.day`     | 日                | *1*                                |
|    `datetime.hour`     | 时                | *4*                                |
|   `datetime.minute`    | 分                | *5*                                |
|   `datetime.second`    | 秒                | *1*                                |
| `datetime.millisecond` | 毫秒              | *419*                              |
| `datetime.microsecond` | 微秒              | *198*                              |
| `datetime.nanosecond`  | 纳秒              | *100*                              |
|     `datetime.iso`     | ISO 8601 格式时间 | *2024-01-01T04:05:1.4191981+08:00* |
|  `datetime.dayofweek`  | 星期              | *Sunday*                           |

:::info

- `year` 1~9999
- `month` 1~12
- `day` 1~31
- `hour` 0~23
- `second` 0~59
- `millisecond` 0~999
- `microsecond` 0~999
- `nanosecond` 0~900
  - 总是为 100 的倍数

:::

## 系统信息

### 操作系统

|     名称     | 说明 | 示例                          |
| :----------: | ---- | ----------------------------- |
|  `os.name`   | 名称 | *Microsoft Windows 10 家庭版* |
| `os.version` | 版本 | *11.4.51419*                  |

### 中央处理器 / CPU

|          名称           | 说明         | 示例 |
| :---------------------: | ------------ | ---- |
|       `cpu.name`        | 名称         |      |
|      `cpu.caption`      | 标题         |      |
|    `cpu.description`    | 描述         |      |
|   `cpu.manufacturer`    | 制造商       |      |
|       `cpu.cores`       | 核心数       |      |
| `cpu.logicalprocessors` | 逻辑处理器数 |      |
|      `cpu.percent`      | 使用率       |      |

:::info

- 若有多个CPU则返回默认的一个
- 若检测不到CPU则返回空
- 数值均返回整数
  - 使用率∈[0,100]

:::

### 内存

|       名称        | 说明               | 示例 |
| :---------------: | ------------------ | ---- |
|    `ram.total`    | 总物理内存（MB）   |      |
|   `ram.totalgb`   | 总物理内存（GB）   |      |
|  `ram.available`  | 可用物理内存（MB） |      |
| `ram.availablegb` | 可用物理内存（GB） |      |
|    `ram.used`     | 已用物理内存（MB） |      |
|   `ram.usedgb`    | 已用物理内存（GB） |      |
|   `ram.percent`   | 使用率             |      |

:::info

- 数值均返回整数
  - 使用率∈[0,100]

:::
