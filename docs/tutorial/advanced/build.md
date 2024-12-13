# 自行构建

## 要求

- .NET SDK >=8.0

## 编译

```batch
dotnet build
```

## 一键发布单文件版本

```batch
# 仅Windows
./src/Scripts/publish.bat
```

## 运行单元测试

```batch
dotnet test src/Serein.Tests
```

:::note
其中有部分~~薛定谔的~~单元测试在某些时候可能不通过，单独运行即可通过

包括但不限于：

- `Serein.Tests.Services.NetPlugin.EventTests.ShouldInvokePluginLoadedEvent`
- `Serein.Tests.Services.NetPlugin.EventTests.ShouldInvokeServerEvent`
- `Serein.Tests.Services.Server.ConfigurationTests.ShouldOutputToFile`

:::
