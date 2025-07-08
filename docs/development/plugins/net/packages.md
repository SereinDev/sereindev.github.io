# 添加 NuGet 包或项目引用

和普通项目添加方法相同

:::warning

在发布时需要携带相应的类库文件（`.dll`），否则插件会报错

:::

## 示例

假设一个项目添加了`Newtonsoft.Json`的 NuGet 包引用，则在发布时需同时携带`Newtonsoft.Json.dll`

```txt title="文件结构"
📂release
 ├─📄Newtonsoft.Json.dll
 ├─📄plugin-info.json
 ├─📄Serein.Tests.Plugin.deps.json
 ├─📄Serein.Tests.Plugin.dll
 └─📄Serein.Tests.Plugin.runtimeconfig.json
```
