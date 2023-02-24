# 消息事件

::: tip
本章节将会涉及到变量类型及函数回调，都是一些特别基础的知识  
在这里不会做基础讲解，如果你至少要对一门编程语言有相关程度的认知，可以继续往下看
:::

## 上下文

在上一章节，我们介绍了如何编写自己的第一个插件，在挂载插件后，`test` 监听了 `message.private` 事件。

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">那个那个，ctx 到底是什么呀？</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">哈？你问我干嘛，打出来看看不就知道了嘛！</ChatMessage>
</ChatPanel>

::: code-group

```typescript [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .event('message.private')
  .action(console.log)
```

```javascript [javascript]
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();

plugin
  .event('message.private')
  .action(console.log)
```

:::

给 bot 私发消息后，可以在控制台看到如下输出。初次你可能看不懂这里面的大部分字段，但是下面的这些属性，就算我不写注释你应该也知道代表着什么。

```javascript
{
  raw_message: 'hello',
  font: '微软雅黑',
  sender: {
    user_id: 2225151531,
    nickname: 'yuki',
  },
  // ...
}
```

没错，你已经猜到了，属性 `ctx` 正是你所发送消息的 **事件上下文**，它里面还有着大量你用得到的属性与方法。

例如我们刚刚发消息触发了 **私聊事件**，在这个上下文就有着对方的 qq 号及账号资料的相关字段。

## 事件监听

刚刚 `plugin.event()` 便是监听 bot 事件的方法，刚刚编写的 test 插件只监听了 `message.private` 事件，所以只会在私聊时执行对应逻辑。

例如我们刚刚使用到的是 **消息事件**，共有以下三种：

- 全部消息事件 message
- 群组消息事件 message.group
- 私聊消息事件 message.private

而事件有很多很多，消息事件只是其中之一，其它比较常见的例如 **群事件**（群消息、新人入群）、**系统事件**（登录成功）都有相关事件。

::: info
kokkoro 是基于 oicq 协议库，事件名与协议库保持一致，更多事件可查看：https://github.com/takayama-lily/oicq/wiki/92.%E4%BA%8B%E4%BB%B6%E6%96%87%E6%A1%A3
:::

在这里，你可以通过事件制作出各种各样有趣的插件，让 kokkoro 变得更加强大 o((>ω< ))o

## 代码规范

刚刚编写的 test 插件虽然实现了基础的消息收发，但是我们并没有对消息文本做过滤，任何人对 bot 发送 **任意消息** 都将会自动回复。

如果我们想让 bot 收到 hello 就回复 hello world，收到 bye 就发送 good bye 该如何实现？

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">yuki yuki，听你这么一说，我完全懂了</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">啊？懂...懂什么哦？</ChatMessage>
  <ChatMessage :id="437402067" nickname="友人A">当我需要用到某个插件，在去挂载的时候，kokkoro 就帮我执行插件里面所有的代码</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">没错，至于插件的挂载就是 require 操作，与 npm 规范是保持一致的</ChatMessage>
  <ChatMessage :id="437402067" nickname="友人A">那么在这个时候，我可以编写执行 plugin.event() 方法，去监听我想要得到的任何消息</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">是哦，消息事件没有你收不到，只有你想不到，目前来说足够满足日常使用</ChatMessage>
  <ChatMessage :id="437402067" nickname="友人A">那我知道怎么改了！</ChatMessage>
</ChatPanel>

```typescript
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .event('message.private')
  .action((ctx, bot) => {
    const { raw_message, user_id } = ctx;

    if (raw_message === 'hello') {
      bot.sendPrivateMsg(user_id, 'hello world');
    } else if (raw_message === 'bye') {
      bot.sendPrivateMsg(user_id, 'good bye');
    } else {
      // ...
    }
  })
```

<ChatPanel>
  <ChatMessage :id="437402067" nickname="友人A">蒋蒋~怎么样，是不是这样就可以解决问题了？</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">蛤？！</ChatMessage>
  <ChatMessage :id="2225151531" nickname="yuki">
    <img width="200" src="/images/meme/西内.jpg" />
  </ChatMessage>
</ChatPanel>

::: danger
尽量避免将 **指令过滤** 的逻辑代码直接写到 `action` 里！  
为什么说是尽量避免，而不是严格禁止？ ~~(你非要写我也拦不住啊，而且这样确实能达到效果)~~
:::

不要仅看了前面一点内容就开始急于编写代码。

确实，kokkoro 的插件开发十分易上手，如果你有编程经验，甚至熟悉 js 的话，你现在完全可以独立写出自己的插件。

但是在这之前，请务将本章节看完，在了解整套体系之后，上手也不迟。

## 指令过滤

虽然这样写你可以实现自定义指令的效果，但是会导致插件后续的可维护性极差，不利于维护。

```typescript{10-16}
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .event('message.private')
  .action((ctx, bot) => {
    const { raw_message, user_id } = ctx;

    if (raw_message === 'hello') {
      bot.sendPrivateMsg(user_id, 'hello world');
    } else if (raw_message === 'bye') {
      bot.sendPrivateMsg(user_id, 'good bye');
    } else {
      // ...
    }
  })
```

kokkoro 在开坑之前，我的本意是满足自用，任何改动我都会自己先试一遍，验证过可行性再考虑后续开发。显然这种不断嵌套 if 的代码是不合理的，至少从开发者的角度出发，写起来非常的不舒服。

所以在项目初期，我几乎每过几个月都会重构一次，毕竟连我自己写起来都觉得不舒服，谁还会想着来用呢？最后，经过不断地探索，针对指令需求，我封装了 `plugin.command()` 方法。

下列代码段与 `plugin.listen()` 的效果是一致的，但是更为简洁

::: code-group

```typescript [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .command('hello')
  .action(ctx => {
    ctx.reply('hello world');
  })

plugin
  .command('bye')
  .action(ctx => {
    ctx.reply('good bye');
  })
```

```javascript [javascript]
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();

plugin
  .command('hello')
  .action(ctx => {
    ctx.reply('hello world');
  })

plugin
  .command('bye')
  .action(ctx => {
    ctx.reply('good bye');
  })
```

:::

当然，你也可以指定指令所监听的消息类型，默认值是 **all**

```typescript
// 全部
plugin.command('hello', 'all');
// 群聊
plugin.command('hello', 'group');
// 私聊
plugin.command('hello', 'private');
```

若你不喜欢链式调用，你也可以这样写

::: code-group

```typescript [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();
const hellpCommand = plugin.command('hello');
const byeCommand = plugin.command('bye');

hellpCommand.action(ctx => {
  ctx.reply('hello world');
});
byeCommand.action(ctx => {
  ctx.reply('good bye');
});
```

```javascript [javascript]
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();
const hellpCommand = plugin.command('hello');
const byeCommand = plugin.command('bye');

hellpCommand.action(ctx => {
  ctx.reply('hello world');
});
byeCommand.action(ctx => {
  ctx.reply('good bye');
});
```

:::

`ctx.reply` 其实就是 `bot.sendPrivateMsg`、`bot.sendGroupMsg` 的语法糖。

## command 还是 event？

尽管 `plugin.event()` 与 `plugin.command()` 很相似，但是它们还是有着本质上的区别。

event 是监听 bot 任意事件，而 command 是仅处理消息事件，当你调用 command 其实就是监听了与之对应的 message 事件，并针对传入的字符串做匹配处理，也只是二次封装。

例如你想在 bot 上线或下线时做一些 http 或者 io 操作，又或者在群内有新成员加入时消息提示， command 肯定是实现不了的

::: code-group

```typescript [typescript]
import { segment } from 'amesu';
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .event('notice.group.increase')
  .action(ctx, bot) => {
    const { group_id, user_id } = ctx;
    const message = ['欢迎新成员 ', segment.at(user_id), ' 的加入~'];
 
    bot.sendGroupMsg(group_id, message);
  })

plugin
  .event('system.offline')
  .action(ctx => {
    console.log('bot 已掉线，开始记录日志');
    // ...
  })
```

```javascript [javascript]
const { segment } = require('amesu');
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();

plugin
  .event('notice.group.increase')
  .action(ctx, bot) => {
    const { group_id, user_id } = ctx;
    const message = ['欢迎新成员 ', segment.at(user_id), ' 的加入~'];
 
    bot.sendGroupMsg(group_id, message);
  })

plugin
  .event('system.offline')
  .action(ctx => {
    console.log('bot 已掉线，开始记录日志');
    // ...
  })
```

:::

上列功能已有插件实现，你不用手动编写。`segment` 是构造消息段的方法，例如上面的代码我们使用了 `segment.at()` 来生成一个 at 信息，在新成员入群后 at 并提示，这个后面会讲解。
