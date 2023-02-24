<script setup>
import Kokkoro from '../../.vitepress/theme/components/kokkoro/index.vue';
</script>

# 简介

::: info 你正在阅读的是 kokkoro v2 的文档！

- 目前 kokkoro v2 处于 `alpha` 状态，不过她已经适用于开箱即用。
- 极少部分 API 和配置项可能会在未来版本中发生变化。
:::

## 什么是 kokkoro？

kokkoro (可可萝) 是一个基于 [oicq](https://github.com/takayama-lily/oicq) 协议库，使用 TypeScript 语言开发的 QQ 机器人框架。本项目的初衷是想让 bot 开发变得 **简单易上手**，她完全基于 node 环境，无需安装任何第三方应用，API 也十分简洁。

下面是一个最基本的插件示例：

::: code-group

```typescript [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .command('hello')
  .sugar('你好')
  .action(ctx => {
    ctx.reply('hello world');
  })
```

```javascript [javascript]
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();

plugin
  .command('hello')
  .sugar('你好')
  .action(ctx => {
    ctx.reply('hello world');
  })
```

:::

#### 结果展示

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="yuki">hello</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">hello world</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">你好</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">hello world</ChatMessage>
</ChatPanel>

上面的示例展示了 kokkoro 的两个核心功能：

- **命令行式交互：** 在计算机还没有出现图形界面的时候，人们就是通过输入一些 command 来与系统进行沟通的 ~~(例如 sudo rm -rf /*)~~，这对于 bot 来说也同样契合。
- **语法糖：** kokkoro 能自定义正则匹配，让指令的处理更贴近自然语言。

你可能已经有了些疑问 —— 先别急，在后续的文档中我们会详细介绍每一个细节。现在，请继续看下去，以确保你对 kokkoro 作为一个框架到底提供了什么有一个宏观的了解。

::: info 预备知识
虽然 kokkoro 上手非常简单，但你应该对 **JavaScript** 有着基础的知识，如果你对开发完全陌生，最好不要直接从一个框架开始进行入门学习。你可以通过这篇 [JavaScript 概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview) 来检验你的 **JavaScript** 知识水平。如果之前有其他框架的经验会很有帮助，但也不是必须的。
:::

## 名字的由来

可可萝 (コッコロ) 是 Cygames 开发和发行的游戏 《公主连结Re:Dive》 中的登场角色，其罗马音 **kokkoro** 用作了本项目的名字。

<Kokkoro />

最初起名为 [yumemi（まるで、夢みたい）](https://github.com/dcyuki/yumemi_bot) 作为自用 bot，并没打算开源。因立项时没有考虑过后续维护，导致代码严重耦合，重构后就顺便开源了。一想到我的项目能多少给他人带来便利，难到不是一件很 cool 的事情么？

## 开发初衷

接触过 QQ 机器人的应该都知道，类似的框架其实有非常非常多，为什么还要去重复造轮子呢？  

其实这个项目在 19 年就开坑了，起初是因为想利用 QQ 做一些自动化消息推送，后面因为疫情开始接触 pcr，认识了各种各样有趣的人，加上游戏内公会战也需要 bot 去查询各类信息，就用 coolq 简单做了一个。

后来发生的事情大家也都知道，coolq 跑路导致机器人无法正常使用，所以就萌生了开发框架的想法。

不过这其实也不是主要原因，在开坑前就有许多优秀的项目，mirai、nonebot、koishi 等，但中途的各种阴差阳错让我最终还是选择了自研，如果你比较感兴趣也可以去查看这一份无关紧要的 [开发历程](/about/history) 了解下黑历史（笑）

## 开箱即用

在 kokkoro 开坑前，几乎 GitHub 上所有的开源项目我都看了个遍，也全都尝试过，都是通过 mirai、cqhttp 等适配器 **建立 ws 通信** 实现的交互。

这会导致部署过程十分繁琐，如果是基于 nonebot 开发的框架，我需要 **先 clone 代码仓库**，**配置 Python 环境**，**安装相关依赖**，**启动 bot 服务**，还要配置 Java 环境 **建立通信服务**，期间还会遇到端口被占用需手动修改配置文件，依赖库版本不兼容等问题...

其次是开发文档层次不齐，想开发插件部分情况下找不到相关 API，只能面向源码编程或面向群主编程，也没有体验较好的 cli。考虑到这一点，kokkoro 的设计非常注重简易性和 “可以被直接使用” 这个特点。与当时的各类项目对于，kokkoro 有着以下特性：

- 多群插件管理，所有插件针对不同群聊均支持参数自定义
- 支持扫码登录，能有效避免因操作不当导致账号风控、掉线等问题
- 友好的脚手架，无需手动修改配置文件，全由命令自动构建
- 账号同步登录，可添加多个 bot 自由管理
- 路由服务扩展，每个插件均支持独立的 web 页面及页面服务
- ~~高性能多线程，使用 worker_threads 分离 bot 与 plugin 线程，密集运算性能更佳~~ [已弃案](/about/project)

能够基于不同的群聊单独配置插件设置项，而且支持多账号登录，可以用 cli 一键创建项目、安装插件、生成插件开发模板...这在当时是绝无仅有的。

不过现在这些问题随着版本的迭代，各类框架都改善了不少，包括 docker 脚本和一键部署包，甚至是 GUI 界面，相比之下 kokkoro 现在来讲其实并没有任何优势。

本身是出于自用开发的，平时都是用业余时间维护，也没有做过相关宣传与推广，两年时间都没有第二个人开发。不过 kokkoro 依然在保持着更新。

至于维护到什么时候嘛，谁知道呢，毕竟这傻女儿是我一手带大的，就这么弃坑也有点不舍233，没有最好的框架，只有自己用着最顺手的，如果这个项目帮到了你，那就是我最大的荣幸了。

## 如何使用

如果你有自己的服务器，可以参考 [快速开始](/guide/quick-start) 一栏自建。

不懂编程也没关系，有使用的需求随时都可以 [加群申请](https://jq.qq.com/?_wv=1027&k=3hcWCnhq)，是免费提供的，未来也没有准备收费的打算，靠爱发电嘛，给个 star 就行（笑）

在使用过程中你有任何意见或建议，都可以提 issue 或在群内反馈，有想要添加的新功能都可以来跟我说，比较实用而且需求较大我会 **考虑开发**。
