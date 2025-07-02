# 服务器管理

Serein v2 已经支持了多服务器管理，这意味着你只需要一个 Serein 实例即可控制多个服务器

![服务器管理](./servers.png#light)
![服务器管理](./servers_dark.png#dark)

:::info 相关阅读

- [添加服务器](../tutorial/rookie/add_server)
- [编辑或删除服务器配置](../tutorial/rookie/edit_server)
- [使用虚拟终端](../tutorial/advanced/pty)

:::

## 服务器 Id

用于区分服务器

```regex title="校验正则"
^\w{3,}$
```
