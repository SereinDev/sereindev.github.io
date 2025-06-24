# 使用协议

- 请您（下称用户）仔细阅读以下使用协议，使用本软件或服务（下称该软件）**即代表已知情并同意本使用协议**
- [Serein 开发者团队](https://github.com/orgs/SereinDev)（下称开发者）可能随时修改本文件，且可能不会提前通知。

## 版权

- Copyright © 2022 Zaitonn. All Rights Reserved.
- 此软件根据 [GPL-3.0 license](https://www.gnu.org/licenses/gpl-3.0.zh-cn.html) 发行

## 商用、分发

- 禁止将该软件作为其他软件的一部分出售、用作任何相关品牌的一部分
- 发布包含该软件的整合包时，应与开发者取得联系并获得授权
- 必须在明显的地方标明 Powered by Serein 或 此软件或整合包使用了 Serein 等相关字样和开发者信息

## 隐私

:::info
开发者保证此信息只用于统计版本信息和分析错误，方便了解用户使用情况和改进该软件，不会将用户数据用于售卖或非法用途。
:::

### Serein v2.0+

使用 [Sentry](https://sentry.io/) 匿名收集信息

包括但不限于以下行为

- 在程序启动后，上报数据用于统计当前已发布版本的使用情况
- 在程序发生异常或崩溃时，上报堆栈信息用于统计错误和分析错误原因

:::tip 关闭方法

将 `Serein/setting.json` 中的 `data.application.enableSentry` 值改为`false`后重启即可

对于 Serein.Lite 和 Serein.Plus，在 **设置>应用** 页取消勾选 **使用 Sentry 上报**后重启即可生效

:::

#### 收集内容

包括但不限于以下内容

- IP
- 该软件版本、类型
- 系统类型
- 系统版本
- .NET 运行时版本
- 内存信息
- 线程池信息
- 设备启动时间
- 设备时区
- 程序启动时间

### Serein v1.3.4 - v1.3.5

用于统计版本使用情况（实际上已废弃）

:::tip 关闭方法

将`settings/Serein.json`中的`noHeartbeat`改为`true`后重启即可

详见[`noHeartbeat`](/docs/1.x/guidance/hiddenSettings#noheartbeat)

:::

#### 收集内容

包括但不限于以下内容

- IP
- 该软件版本、类型
- 程序启动时间
- 服务器状态
- 服务器启动时间

## 免责声明

- 本程序不涉及分发、修改和传播 Minecraft 客户端及服务端，仅作为服务端的管理软件方便服务器管理员（即用户）控制服务器，造成的侵权行为由用户自行承担
  - “Minecraft”是 Mojang Synergies AB 的商标
  - 此软件与 Mojang Studio、网易、Microsoft 没有从属关系
  - 使用本程序启动任何 Minecraft 服务端即代表您已阅读并同意了以下内容
    - [MINECRAFT 最终用户许可协议](https://www.minecraft.net/zh-hans/eula)
    - [MINECRAFT 使用准则](https://www.minecraft.net/zh-hans/usage-guidelines)
- 开发者不对任何一切该软件的整合包和插件负责，使用或运行后导致的一切后果由整合包或插件发布者和用户自行承担
