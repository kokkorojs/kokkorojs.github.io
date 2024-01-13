# 常见问题

## 为什么 node 版本要求 18.0.0？

kokkoro 是基于 [amesu](https://github.com/xueelf/amesu) 开发的，而 amesu 的 request 网络请求是使用 fetch 的封装，这在 18.0.0 中才得到支持。

## 为什么不推荐使用 pnpm？

我是 pnpm 的忠实信徒，使用 pnpm 作为包管理工具已有 2 年时间。在 kokkoro v1 时期，我使用 multirepo 来管理项目，重构 v2 后，便采用了 monorepo 方案，这时仍在继续使用 pnpm。

但是随着时间的推移，我遇到了出现了许许多多的问题，pnpm 并不是最优的解决方案。它最大的问题就是排他，很多东西并不是按照 npm 的标准去设计的。

而 kokkoro 作为一个开源项目，要优先保证**大部分使用者**，甚至是初学者的正常使用以及开发体验，不然会提高学习成本，所以我在这里更推荐使用 npm 和 yarn。
