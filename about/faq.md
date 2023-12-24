# 常见问题

## 为什么 node 版本要求 20.6.0+

amesu 的是兼容 v18 的，为什么 kokkoro 只能是 v20.6.0+？

本来 amesu 的 node 版本要求能更低，因为 `request` 使用的是 `fetch` 封装，而 node fetch 是 v18 才得到的支持。

那么 kokkoro 呢？为了开发的便捷性，我使用了 `--experimental-import-meta-resolve` 用作插件的检索，这是 v20.6.0 才提供的特性。

而现在 v20.10.0 都进入 LTS 了，所以我觉得也没有去兼容旧版本的必要了。
