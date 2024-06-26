# Q&A

## 服务器频繁重启

Serein 没有设置重启上限次数，在投入生产环境前请确保服务器能正常运行，以免造成占用过多的系统资源

:::tip

- 暂时关闭 设置>服务器>服务器非正常退出时自动重启
- 可能是服务器存在异常导致启动失败，请自行参照[崩服/假死/卡顿情况排查与记录方法](https://www.minebbs.com/resources/bds.3403/)向其他大佬询问
:::

## 输入乱码

编码不匹配

:::tip
在设置中选择相应的编码类型
:::

- 在基岩版 1.19 之后，BDS 服务端控制台输入编码被改为 UTF-16，但由于一些问题，无论如何修改编码都无法正常输入中文。
  - 你可以使用 LLSE 插件[Unescaper for Serein.js](https://www.minebbs.com/resources/unescaper-for-serein.5441/)，并在设置中开启 使用 Unicode 字符 选项或使用[Unicode 命令输入](../guidance/command#在服务器中执行命令)将命令内的非 ASCII 的字符使用 Unicode 字符表示即可

## 输出乱码

编码不匹配

:::tip
在设置中选择相应的编码类型
:::

- Java 启动的服务端（Nukkit、PNX 和大部分 Java 版的服务器）
  - Java 默认编码为 GBK
    - ~~因为 NET 对该编码不完全支持~~，（**v1.3.5 已支持**）所以你可以在启动的批处理文件中添加`-Dfile.encoding=utf-8`参数。
      - 举个例子
        ```bat
        java -Dfile.encoding=utf-8 -jar server.jar nogui
        ```
    - v1.3.5 中已支持使用 GBK 编码作为输入和输出的编码，故你可以直接在 服务器-输出编码 选择此编码


- Python 启动的进程（如[MCDReforged](https://github.com/Fallen-Breath/MCDReforged)）
  - Windows 中文版 CMD 输出编码为 GBK，故你可以在启动脚本中添加`set PYTHONIOENCODING=utf-8`行
    - 举个例子
      ```bat
      set PYTHONIOENCODING=utf-8
      python start.py
      ```
  - v1.3.5 中已支持使用 GBK 编码作为输入和输出的编码，故你可以直接在 服务器-输出编码 选择此编码

## 使用批处理启动的服务器进程无法强制结束

使用批处理文件启动服务器，使用强制结束功能时发现服务器仍在后台运行

由于批处理启动服务器时，批处理作为 Serein 的子进程启动，而服务器作为批处理的子进程启动，结束进程功能仅能结束当前运行的进程，而无法结束子进程的子进程（即孙子进程）

:::note
自`v1.3.4`起，NET6 的版本支持自动结束子进程
:::

## 无法登录

:::tip

- 你可以现在自己电脑上扫码登陆后，将整个文件夹复制到服务器上
- ~~使用魔法~~
:::

:::info
2023.7 你需要一个签名服务器。你可以参考此视频👇

<iframe src="//player.bilibili.com/player.html?aid=530300995&bvid=BV1nu411h7bS&cid=1177748002&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>
:::

## 连接失败

:::tip

- 检查端口是否一致
- 机器人是否运行中
- 机器人是否配置了正向的 websocket 连接方式
:::

## 无法接收消息

:::tip

- 检查网络连接
- 打开 设置>机器人>输出接收和发送的数据 ，在机器人控制台检查是否有输出
- [提交 ISSUE](https://github.com/Zaitonn/Serein/issues/new)，附上机器人名称、下载链接和相关配置文件（上传前记得自行去除敏感信息）
- 无法发送消息
  - 检查网络连接
  - 检查是否被禁言
  - 可能是被 tx 屏蔽了，可以多挂几天后再试试
:::

## Serein 卡顿

- 正则匹配延迟较大
- 服务器控制台输出特别慢（特别是在服务器占用极大时几乎无法输出）
- 插件执行缓慢

:::tip
打开`任务管理器`，在详细信息页找到 Serein 进程，右键设置优先极为`高`或`高于正常`即可
:::

## 其他

[提交 ISSUE](https://github.com/SereinDev/Serein/issues/new/choose)

:::tip
记得提供具体复现步骤
:::
