# 常见问题

## 为什么非要 node 15+

oicq 的是兼容 node 14 的，为什么 kokkoro 只能是 node 15+？

为了开发的便捷性，项目中使用了大量 es 最新语法，例如下面这几段代码：

```typescript{6,15}
/*
 * package: @kokkoro/core
 * file: src/core/core.ts
 * line: 108
 */
this.group[group_id] ??= {
  name: group_name, setting: {},
};

/*
 * package: @kokkoro/core
 * file: src/plugin/command.ts
 * line: 228
 */
const option = setting?.[name] ?? null;
```

逻辑空赋值 `??=` 在 node 14 中就无法使用，其实要做到兼容完全可以使用下面这种写法：

```typescript
x ??= y;
x ?? (x = y);
```

但是这样写不纯纯的恶心人嘛！node 18 都进入 LTS 了，3202 年国内除了银行和政府教育机构也没有要求兼容 ie 的项目呀（恼

## 扫码无法登录

自从去年 QQ 出现大量盗号后腾讯调整了安全策略，现在扫码登录必须与设备保持同一网络环境。如果要在服务器登录，可以先在本地登录账号后在将 `data/bot/{uin}/` 文件夹下的 `token` 文件放到服务器，就可以直接登录，详见 [Issue1](https://github.com/kokkorojs/kokkoro/issues/1)
