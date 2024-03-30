# 属性

## Serein.exe所在文件夹

`serein.path`

- 返回
  - `string`

## Serein版本

`serein.version`

- 返回
  - `string`

## Serein类型

`serein.type`

- 返回
  - `number`
    - 0 - 控制台
    - 1 - winform
    - 2 - wpf

## Serein类型文本

`serein.typeName`

- 返回
  - `string`
    - console
    - winform
    - wpf

## Serein启动时间

`serein.startTime`

- 返回
  - `Date`

## JS命名空间

`serein.namespace`

- 返回
  - `string`

:::note
JS命名空间用于内部区分JS解释器和其他属性，实例化[WebSocket](class/WSClient)等时需要提供此参数
:::

:::tip
此外，你也可以通过[注册插件](functions/serein#注册插件)来获取命名空间
:::
