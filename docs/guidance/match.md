# 匹配

通过正则表达式匹配 服务器输入/输出 或 群聊/私聊消息，并执行[命令](./command)

![匹配](./match.png#light)

![匹配](./match_dark.png#dark)

## 正则表达式

### 基础语法

- [正则表达式 - 菜鸟教程](https://www.runoob.com/regexp/regexp-tutorial.html)  
- [.NET 正则表达式 - Microsoft Docs](https://learn.microsoft.com/zh-cn/dotnet/standard/base-types/regular-expressions)

### 生成辅助

- [AI 驱动的正则表达式求解器 - regex.ai](https://regex.ai/)  
- [正则可视化 - ihateregex.io](https://ihateregex.io/playground)  
- [fast-regexp - @adams549659584](https://adams549659584.github.io/fast-regexp/)  

你可以在[命令](./command)中使用`$n`来获取第n个匹配项（n为正整数）

## 排除

用于忽略一些来自指定服务器的输入输出或来自指定群聊和用户的消息

### 语法

```txt
<来源1>=<值1>;<来源2>=<值2>;...
```

### 来源

:::note
来源不区分大小写
:::

- `server`
  - 服务器Id
- `group`
  - 群聊Id
- `user`
  - 用户Id

### 示例

```txt
group=10001;group=10002
```

将不会响应来自10001和10002两个群聊的消息

---

```txt
server=survival2
```

将不会响应来自Id为survival2的服务器的输入和输出
