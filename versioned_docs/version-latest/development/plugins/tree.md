# 目录结构

```txt title="示例"
Serein
├─...
└─plugins
   ├─plugin-1
   │  ├─plugin-info.json
   │  └─plugin-1.dll
   │
   ├─plugin-2
   │  ├─plugin-info.json
   │  ├─utils.js
   │  └─index.js
   │
   └─pluign-3.js
```

## 单文件插件

即上面示例中的`pluign-3.js`，只由一个Js插件组成，适用于功能极少的插件

:::note

单文件插件有如下限制

- 只限[JavaScript插件](./js/)
- 不能设置插件作者、版本、名称、介绍

:::

## 多文件插件

即上面示例中的`pluign-1`和`pluign-2`，由一个或多个文件组成，放在以插件Id为名的文件夹下，且文件夹中必须有一个`plugin-info.json`文件（内容和格式详见[插件信息](./plugin_info)）
