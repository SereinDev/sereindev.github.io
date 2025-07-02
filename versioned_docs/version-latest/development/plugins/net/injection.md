# 依赖服务注入

在构造函数`.ctor`中填入需要的参数，在执行构造函数时会自动填充，类似于[Microsoft.Extensions.DependencyInjection](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.dependencyinjection?view=net-8.0)中的[`IServiceCollection`](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.dependencyinjection.iservicecollection?view=net-8.0)

:::note

- 当有多个公开的构造函数时，将会选择第一个进行填充和调用
- 当首选的构造函数**存在无法获取的服务** 或 **没有找到可用的构造函数（公开且非静态）** 时 将报错

:::

## 参数类型

- [`IServiceProvider`](https://learn.microsoft.com/zh-cn/dotnet/api/system.iserviceprovider?view=net-8.0)
- 当前注册过的其他服务（详见[src/Serein.Core/SereinAppBuilder.cs](https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/SereinAppBuilder.cs)）

:::tip

你可以使用[`serviceProvider.GetRequiredService<T>()`扩展方法](https://learn.microsoft.com/zh-cn/dotnet/api/microsoft.extensions.dependencyinjection.serviceproviderserviceextensions.getrequiredservice?view=net-8.0)快速通过类型获取服务对象

:::

## 示例

```cs
using Serein.Core.Models.Plugins.Net;
using System;

namespace MyPlugin;

public class MainPlugin : PluginBase
{
    private readonly IServiceProvider _serviceProvider;

// highlight-start
    public MainPlugin(IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider; // 保存为字段方便后续调用
    }
// highlight-end

    public override void Dispose() { }
}
```

```cs
using Serein.Core.Models.Plugins.Net;
using Serein.Core.Services.Data;
using System;

namespace MyPlugin;

public class MainPlugin : PluginBase
{
// highlight-start
    public MainPlugin(SettingProvider settingProvider)
    {
        settingProvider.Save(); // 保存设置
    }
// highlight-end

    public override void Dispose() { }
}
```
