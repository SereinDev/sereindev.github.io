# NET 插件开发

[![dotnet](https://img.shields.io/badge/8.0-512BD4?style=for-the-badge&logo=.net)](https://dotnet.microsoft.com/zh-cn/download/dotnet/8.0)

借助.NET的CLR可动态加载的特性实现插件的热插拔功能

:::tip

不知道怎么写？[参考一下源码](https://github.com/SereinDev/Serein)

:::

## 优点

- 运行速度快
- 可以添加项目引用或[NuGet](https://www.nuget.org/)包

## 缺点

- 无法即时卸载
- 开发周期长，难度大
- 可能存在内存泄漏问题（对象引用未释放）
- 对版本变化较敏感
