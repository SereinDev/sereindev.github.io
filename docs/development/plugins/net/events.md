# 事件监听

代码参考：[src/Serein.Core/Models/Plugins/Net/PluginBase.Events.cs](https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Plugins/Net/PluginBase.Events.cs)

## 注册

在插件类内重载虚方法即可

## 示例

```cs
using Serein.Core.Models.Plugins.Net;
using System;
using System.Threading.Tasks;

namespace MyPlugin;

public class MainPlugin : PluginBase
{
    public override void Dispose() { }
    
// highlight-start
    protected override Task OnPluginsLoaded()
    {
        Console.WriteLine("Loaded!");
        return Task.CompletedTask;
    }
// highlight-end
}
```
