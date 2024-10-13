# NET

使用.NET 8.0开发

## 0. 前提条件

- 安装`.NET SDK` >=8.0
- 代码编辑器（以下任选其一）
  - [Visual Studio Code](https://code.visualstudio.com/download)
    - 需安装[C#](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp)扩展
  - [Visual Studio](https://visualstudio.microsoft.com/downloads/)
    - 需安装 .NET 桌面开发 工作负载
  - [Rider](https://www.jetbrains.com/zh-cn/rider/)

## 1. 创建新项目

目标框架应为`net8.0`

```sh
dotnet new classlib
```

## 2. 克隆Serein仓库 / 添加为Submodule

```batch
git clone https://github.com/SereinDev/Serein.git

# or

git submodule add https://github.com/SereinDev/Serein.git
```

## 3. 添加项目引用

```xml
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net8.0</TargetFramework>
<!-- highlight-next-line -->
        <EnableDynamicLoading>true</EnableDynamicLoading>
    </PropertyGroup>

<!-- highlight-start -->
    <ItemGroup>
        <ProjectReference Include="../Serein/src/Serein.Core/Serein.Core.csproj">
            <Private>false</Private>
            <ExcludeAssets>runtime</ExcludeAssets>
        </ProjectReference>
    </ItemGroup>
<!-- highlight-end -->

</Project>
```

## 4. 实现抽象类

你的插件类必须以[`Serein.Core.Models.Plugins.Net.PluginBase`](https://github.com/SereinDev/Serein/blob/main/src/Serein.Core/Models/Plugins/Net/PluginBase.cs)为基类

:::note

在`.ctor()`内无法`FileName`、`Info`等属性

:::

```cs title="MainPlugin.cs"
using Serein.Core.Models.Plugins.Net;
using System;

namespace MyPlugin;

public class MainPlugin : PluginBase
{
    public MainPlugin()
    {
        Console.WriteLine("Loaded!");
    }

    public override void Dispose()
    {
        Console.WriteLine("Disposed!");
    }
}
```

## 5. 编译

```sh
dotnet build
```

## 6. 编写插件信息文件

## 7. 复制到插件目录下
