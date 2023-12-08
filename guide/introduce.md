<script setup>
import FlipCard from '../.vitepress/theme/components/FlipCard.vue';
</script>

# 简介

::: info 这里是正在施工的 kokkoro v2 文档
由于个人时间有限，部分内容可能会与框架的实际表现略有差异。
:::

## 什么是 kokkoro？

kokkoro (可可萝) 是一个基于 [amesu](https://github.com/xueelf/amesu) SDK，使用 [TypeScript](https://www.typescriptlang.org/) 语言开发的 [QQ](https://im.qq.com/) 机器人框架。本项目的初衷是想让 bot 开发变得**简单易上手**，她完全基于 node 环境，无需安装任何第三方应用，API 也十分简洁。

下面是一个最基本的插件示例：

::: code-group

```javascript [javascript]
import { useCommand, useEvent } from '@kokkoro/core';

/**
 * @type {import('@kokkoro/core').Metadata}
 */
export const metadata = {
  name: 'example',
  description: '插件示例',
};

export default function Example() {
  useEvent(
    ctx => {
      ctx.logger.mark('Bot online.');
    },
    ['session.ready'],
  );
  useCommand('/测试', () => 'hello world');
}
```

```typescript [typescript (Hook)]
import { Metadata, useCommand, useEvent } from '@kokkoro/core';

export const metadata: Metadata = {
  name: 'example',
  description: '示例插件',
};

export default function Example() {
  useEvent(
    ctx => {
      ctx.logger.mark('Bot online.');
    },
    ['session.ready'],
  );
  useCommand('/测试', () => 'hello world');
}
```

```typescript [typescript (Decorator)]
import { Command, Context, Event, Plugin } from '@kokkoro/core';

@Plugin({
  name: 'example',
  description: '示例插件',
})
export default class Example {
  @Event('session.ready')
  onReady(ctx: Context<'session.ready'>) {
    ctx.logger.mark('Bot online.');
  }

  @Command('/测试')
  sayHello() {
    return 'hello world';
  }
}
```

:::

#### 结果展示

<ChatPanel>
  <ChatMessage :qq="2225151531" nickname="Yuki">@可可萝 /测试</ChatMessage>
  <ChatMessage :qq="2854205915" nickname="可可萝">hello world</ChatMessage>
</ChatPanel>

上面的示例展示了 kokkoro 插件的两个核心功能：

- **事件监听：** 可批量监听客户端发出的任意事件。
- **指令处理：** 如果 `command` 返回了**不为空**的变量，那么会将其直接作为字符串消息回复。

你可能已经有了些疑问 —— 先别急，在后续的文档中我们会详细介绍每一个细节。现在，请继续看下去，以确保你对 kokkoro 作为一个框架到底提供了什么有一个宏观的了解。

::: info 预备知识
虽然 kokkoro 上手非常简单，但你应该对 **JavaScript** 有着基础的知识，如果你对开发完全陌生，最好不要直接从一个框架开始进行入门学习。你可以通过这篇 [JavaScript 概述](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Overview) 来检验你的 **JavaScript** 知识水平。如果之前有其他框架的经验会很有帮助，但也不是必须的。
:::

## 名字的由来

可可萝（コッコロ）是 Cygames 开发和发行的游戏[『公主连结 Re:Dive』](https://game.bilibili.com/pcr/)中的登场角色，其罗马音 **kokkoro** 用作了本项目的名字。

<flipCard
  front="/images/priconne/105931.png"
  back="/images/priconne/107661.png"
/>

最初起名为 [yumemi（まるで、夢みたい）](https://github.com/dcyuki/yumemi_bot) 作为自用 bot，并没打算开源。因立项时没有考虑过后续维护，导致代码严重耦合，重构后就顺便开源了。一想到我的项目能多少给他人带来便利，难到不是一件很 cool 的事情么？

## 开发初衷

接触过 QQ 机器人的应该都知道，类似的框架其实有非常非常多，为什么还要去重复造轮子呢？

其实我在 19 年开始接触 QQ 机器人开发了，起初是因为想利用 QQ 做一些自动化消息推送，后面因为疫情开始接触 pcr，认识了各种各样有趣的人，加上游戏内公会战也需要 bot 去查询各类信息，就用 coolq 简单做了一个。

后来发生的事情大家也都知道，coolq 跑路导致机器人无法正常使用，所以就萌生了开发框架的想法。

不过这其实也不是主要原因，在开坑前就有许多优秀的项目，mirai、nonebot、koishi 等，但中途的各种阴差阳错让我最终还是选择了自研，如果你比较感兴趣也可以去查看这一份无关紧要的 [开发历程](/about/history) 了解下黑历史（笑）

本身是出于自用开发的，平时都是用业余时间维护，也没有做过相关宣传与推广，这 3 年时间都没有第二个人开发。不过 kokkoro 依然在保持着更新。

至于维护到什么时候嘛，谁知道呢，毕竟这傻女儿是我一手带大的，就这么弃坑也有点不舍 233，没有最好的框架，只有自己用着最顺手的，如果这个项目帮到了你，那就是我最大的荣幸了。

## 如何使用

如果你有自己的服务器，可以参考 [快速上手](/guide/quick-start) 一栏自建。

不懂编程也没关系，有使用的需求随时都可以 [加群申请](https://jq.qq.com/?_wv=1027&k=3hcWCnhq)，是免费提供的，未来也没有收费的打算，靠爱发电嘛，给个 star 就行（笑）

在使用过程中你有任何意见或建议，都可以提 issue 或在群内反馈，有想要添加的新功能都可以来跟我说，比较实用而且需求较大我会**考虑开发**。
