# 从头写一个.NET插件

:::info
考虑到此页篇幅有限，故假设你已有一定.NET开发基础，关于类的结构和方法的调用不在此处赘述
:::

## 准备

- 一个好用的脑子
- 安装.NET SDK (>=8.0)
- IDE（以下任选其一）
  - [Visual Studio Code](https://code.visualstudio.com/download)
    - 需安装 [**C#扩展**](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)
  - [Visual Studio](https://visualstudio.microsoft.com/downloads/)
    - 需安装 **.NET 桌面开发** 工作负载
  - [Rider](https://www.jetbrains.com/zh-cn/rider/)

## 1. 创建新类库项目

目标框架应为`net8.0`

```batch
dotnet new classlib -f net8.0 -n MyPlugin
```

:::note

你也可以使用`net8.0-windows`或`net8.0-macos`，但可能不能在所有平台上运行

:::

## 2. 拉取Serein代码

克隆Serein仓库

```sh
git clone https://github.com/SereinDev/Serein.git
```

或

添加为Submodule

```sh
git submodule add https://github.com/SereinDev/Serein.git
```

## 3. 为插件项目添加项目引用

将`Serein.Core.csproj`添加到项目引用

按如下高亮部分修改项目文件（`MyPlugin.csproj`）

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net8.0</TargetFramework>
<!-- highlight-next-line -->
        <EnableDynamicLoading>true</EnableDynamicLoading>
    </PropertyGroup>

    <ItemGroup>
        <!-- 根据实际情况修改路径 -->
<!-- highlight-start -->
        <ProjectReference Include="../Serein/src/Serein.Core/Serein.Core.csproj">
            <Private>false</Private>
            <ExcludeAssets>all</ExcludeAssets>
        </ProjectReference>
<!-- highlight-end -->
    </ItemGroup>

</Project>
```

## 4. 编写插件信息文件

在项目文件的同目录下创建一个新的`plugin-info.json`文件，并按照[插件信息页](../../development/plugins/plugin_info)修改

按如下高亮部分修改项目文件，使得在编译时自动复制插件信息文件

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net8.0</TargetFramework>
        <EnableDynamicLoading>true</EnableDynamicLoading>
    </PropertyGroup>

    <ItemGroup>
        <ProjectReference Include="../Serein/src/Serein.Core/Serein.Core.csproj">
            <Private>false</Private>
            <ExcludeAssets>all</ExcludeAssets>
        </ProjectReference>

<!-- highlight-start -->
        <None Include="plugin-info.json" CopyToOutputDirectory="Always" />
<!-- highlight-end -->
    </ItemGroup>

</Project>
```

## 5. 实现抽象类

你的插件类必须以[`Serein.Core.Models.Plugins.Net.PluginBase`](https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Plugins/Net/PluginBase.cs)为基类

:::warning

- 在构造函数`.ctor()`内时，`FileName`、`Info`等属性为空
- 不能在一个程序集内实现两个抽象类，这会导致无法判断加载哪一个类而抛出异常而使插件加载失败

:::

:::tip

你可以使用[依赖注入](../../development/plugins/net/injection)获取Serein服务

:::

```cs title="MainPlugin.cs"
using Serein.Core.Models.Plugins.Net;
using System;

namespace MyPlugin;

public class MainPlugin : PluginBase
{
    public MainPlugin(IServiceProvider serviceProvider)
    {
        Console.WriteLine("Loaded!");
    }

    public override void Dispose()
    {
        Console.WriteLine("Disposed!");
    }
}
```

## 6. 编译

```batch
dotnet build
```

## 7. 复制到插件目录下

将输出目录下的所有文件复制到`Serein/plugins/MyPlugin`下