# 从 v2.0 迁移

## 用户 Id 类型变更

为适配 OneBot V12 和 Satori 协议，内部用户 Id 类型均由 `long` 改为 `string`

## `binding-records.sqlite.db` 表结构发生变化

- 储存数据的表名由 `Records` 改为 `Datas`
- 因[用户 Id 类型](#用户-id-类型变更)变更，主键的类型由 `INTEGER` 改为 `TEXT`

:::tip 解决方法

**手动**执行 SQLite 命令

```sql
INSERT INTO Datas (UserId, GameIds, Time, ShownName)
SELECT 
    CAST(UserId AS TEXT),  -- 将整数UserId转换为文本类型
    GameIds, 
    Time, 
    ShownName
FROM Records;
```

:::

## `permission-groups.json` 文件部分属性发生变化
