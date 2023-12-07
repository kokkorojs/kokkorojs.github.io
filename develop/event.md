# 消息事件

::: tip
本章节将会涉及到变量类型及函数回调，都是一些特别基础的知识  
在这里不会做基础讲解，如果你至少要对一门编程语言有相关程度的认知，可以继续往下看
:::

## 上下文

在上一章节，我们介绍了如何编写自己的第一个插件，我们使用了 `Event`，让 `example` 插件监听了 `session.ready` 事件。

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">那个那个，ctx 到底是什么呀？</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">哈？你问我干嘛，打出来看看不就知道了嘛！</ChatMessage>
</ChatPanel>

::: code-group

```javascript [javascript]
import { useEvent } from '@kokkoro/core';

/**
 * @type {import('@kokkoro/core').Metadata}
 */
export const metadata = {
  name: 'example',
  description: '插件示例',
};

export default function Example() {
  useEvent(console.log, ['session.ready']);
}
```

```typescript [typescript (Hook)]
import { Metadata, useEvent } from '@kokkoro/core';

export const metadata: Metadata = {
  name: 'example',
  description: '示例插件',
};

export default function Example(): void {
  useEvent(console.log, ['session.ready']);
}
```

```typescript [typescript (Decorator)]
import { Context, Event, Plugin } from '@kokkoro/core';

@Plugin({
  name: 'example',
  description: '示例插件',
})
export default class Example {
  @Event('session.ready')
  onReady(ctx: Context<'session.ready'>) {
    console.log(ctx);
  }
}
```

:::

在 bot 建立通信后，可以在控制台看到如下输出。初次你可能看不懂这里面的大部分字段，但是下面的这些属性，就算我不写注释你应该也知道代表着什么。

```shell:no-line-numbers
{
  user: {
    id: '1145141919810',
    username: '可可萝',
    bot: true,
    status: 1
  },
  // ...
}
```

没错，你已经猜到了，属性 `ctx` 正是你所发送消息的**事件上下文**，里面还有着大量你用得到的属性与方法。

例如我们刚刚触发的**会话事件**，在这个上下文中就有着 bot 的 id 及账号昵称的相关字段。

## 事件监听

上面示例中的 `Event` 便是监听 bot 事件的方法，刚刚编写的 example 插件只监听了 `session.ready` 事件，所以只会在客户端建立通信时执行对应逻辑。

而事件有很多很多种，会话事件只是其中之一，其它比较常见的例如**群事件**（群消息）、**频道事件**（子频道消息）都有相关事件名。kokkoro 是基于 amesu SDK，事件名与官方保持一致，更多事件可在腾讯 [官方文档](https://bot.q.qq.com/wiki/develop/api-v2/dev-prepare/interface-framework/event-emit.html#%E4%BA%8B%E4%BB%B6%E8%AE%A2%E9%98%85Intents) 查看。

在这里，你可以通过事件制作出各种各样有趣的插件，让 kokkoro 变得更加强大 o((>ω< ))o

## 代码规范

前面我们有提到，bot 是通过事件驱动的，任何动作都会产生与之相对应的事件，消息也不例外。

比如，你可以这样子去监听频道的消息事件：

::: code-group

```javascript [hook]
import { useEvent } from '@kokkoro/core';

export default function Example() {
  useEvent(console.log, ['at.message.create']);
}
```

```typescript [decorator]
import { Context, Event } from '@kokkoro/core';

export default class Example {
  @Event('at.message.create')
  onReady(ctx: Context<'at.message.create'>) {
    console.log(ctx);
  }
}
```

:::

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">@可可萝 /测试</ChatMessage>
</ChatPanel>

```shell:no-line-numbers {3}
{
  channel_id: '633481120',
  content: '<@!3958153663914325267> /测试 ',
  guild_id: '8187260533469556672',
  id: '08c0df9ca8bcc2bfcf7110a0cf88ae0238df0548d3cac5ab06',
  member: {
    joined_at: '2022-04-05T11:55:52+08:00',
    nick: 'Yuki',
    roles: [ '4', '15' ]
  },
  // ...
}
```

这样一来，bot 就可以直接获取到消息的详情。

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">yuki yuki，听你这么一说，我完全懂了</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">啊？懂...懂什么哦？</ChatMessage>
  <ChatMessage :id="437402067" nickname="友人A">既然通过事件就能获取到消息内容，那么指令的响应我是不是就可以这样去写</ChatMessage>
</ChatPanel>

::: code-group

```javascript [hook] {6-11}
import { useEvent } from '@kokkoro/core';

export default function Example() {
  useEvent(
    ctx => {
      const { content } = ctx;
      const message = content.replace(/^.+(?=\/)/, '').trimEnd();

      if (message === '测试') {
        return 'hello world';
      }
    },
    ['at.message.create'],
  );
}
```

```typescript [decorator] {6-11}
import { Context, Event } from '@kokkoro/core';

export default class Example {
  @Event('at.message.create')
  onReady(ctx: Context<'at.message.create'>) {
    const { content } = ctx;
    const message = content.replace(/^.+(?=\/)/, '').trimEnd();

    if (message === '测试') {
      return 'hello world';
    }
  }
}
```

:::

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">@可可萝 /测试</ChatMessage>
  <ChatMessage :id="2854205915" nickname="可可萝">hello world</ChatMessage>
  <ChatMessage :id="437402067" nickname="友人A">蒋蒋~怎么样，是不是这样就可以解决问题了？</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">哈？！</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">
    <img width="200" src="/images/meme/西内.jpg" />
  </ChatMessage>
</ChatPanel>

::: danger
我们一定要避免将**指令逻辑**的代码，直接写到 `Event` 里！  
为什么说是避免，而不是禁止？ ~~(你非要写我也拦不住啊，而且这样确实能达到效果)~~
:::

## 指令处理

虽然这样写确实可以实现自定义指令的效果，但是会导致插件后续的可维护性极差，不利于维护。

所以，kokkoro 提供了 `Command` 来进行指令处理，与 `Event` 去手动监听**消息事件**实现的效果是等价的，但是更为简洁。

::: code-group

```javascript [hook] {4}
import { useEvent } from '@kokkoro/core';

export default function Example() {
  useCommand('/测试', () => 'hello world');
}
```

```typescript [decorator] {4,6}
import { Context, Command } from '@kokkoro/core';

export default class Example {
  @Command('/测试')
  sayHello() {
    return 'hello world';
  }
}
```

:::

`Command` 其实就是 `Event` 的语法糖，`Command` 为我们监听了 at.message.create 和 group.at.message.create 这两个事件，分别对应群聊与频道，并在此基础上做了指令参数校验。

## Event 还是 Command？

尽管 `Command` 看起来使用的会更加频繁，但是 `Event` 也同样重要，分别用于处理不同的业务场景。

例如你想在 bot 上线或下线时做一些 http 请求或者是 io 操作，又或者在群内有新成员加入时消息提示， `Command` 肯定是实现不了的。
