# 绑定

## 绑定游戏 ID

`serein.bindMember(userid: number, gameid: string)`

- 参数
  - `userid` QQ 号
  - `gameid` 游戏 ID
- 返回
  - `boolean`
    - 成功为`true`，否则为`false`

## 删除绑定记录

`serein.unbindMember(userid: number)`

- 参数
  - `userid` QQ 号
- 返回
  - `boolean`
    - 成功为`true`，否则为`false`

## 获取指定用户 QQ

`serein.getID(gameid: string)`

- 参数
  - `gameid` 游戏 ID
- 返回
  - `number` QQ 号

## 获取指定游戏 ID

`serein.getGameID(userid: number)`

- 参数
  - `userid` QQ 号
- 返回
  - `string` 游戏 ID
