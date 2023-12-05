# 简单示例

::: tip
当前页面并不会对编程语言做深入讲解，即使你是小白也可以放心观看。  
之前从未接触过 js 也没关系，接下来的开发过程中会为你逐一讲解 \(￣︶￣*\))
:::

## 编写插件

如果你对 npmjs 并不了解也没关系，在这里只会介绍本地插件的编写。  
但是如果你想对 kokkoro 有一个更深入的了解，还是需要熟悉 nodejs 及 npmjs 的基本原理。

::: info
在编写模块前，你需要先在 plugins 目录下，创建一个文件夹来存放代码文件。  
:::

例如 `plugins/test`，test 为你的 **插件名**，命名规则无严格限制。 ~~(你用中文都大丈夫，锟斤拷警告)~~

创建完成后开始在当前目录下编写 `index.js` 文件：

::: code-group

```typescript [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();
```

```javascript [javascript]
const { Plugin } = require('kokkoro');

const plugin = new Plugin();
```

:::

这个时候你就已经写好了一个插件，不需要任何额外操作，该插件会在 **项目启动时** 自动将其 `require` 执行。

不过目前这个插件还什么都不能干，我们没有为其编写相应的交互逻辑。

## 实现交互

相信你这个时候一定有很多疑问，`Plugin` 到底是什么？

::: info
当前章节仅提供示例，目的在于让你能自己编写出可以进行简单交互的插件。  
目前你无需关心这段代码是什么意思，后面会逐一介绍，所以不用着急，让我们继续。
:::

你可以参考下列代码段，添加 `message.private` 事件监听，在 `action` 回调函数里可以编写你的逻辑代码：

::: code-group

```typescript{5-9} [typescript]
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin();

plugin
  .event('message.private')
  .action((ctx, bot) => {
    bot.sendPrivateMsg(ctx.user_id, 'hello world');
  })
```

```javascript{5-9} [javascript]
const { Plugin } = require('@kokkoro/core');

const plugin = new Plugin();

plugin
  .event('message.private')
  .action((ctx, bot) => {
    bot.sendPrivateMsg(ctx.user_id, 'hello world');
  })
```

:::

这下我们就编写好了一段指令完整的交互逻辑，你可以大致理解为只要有人给 bot 私发了消息，便会收到 `hello world`，是不是非常简单？ (●'◡'●)

## 快来试试

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">hello</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">...</ChatMessage>
</ChatPanel>

什么都没有发生呐！前面我们有提到，插件会在 **项目启动时** 自动挂载，当前这个插件不是在项目启动时就存在的，而是你在当前服务运行时完成开发并 **后续添加** 的。

不过你并不需要为此就去重启整个服务，每次重启服务 bot 都将会重新登录，频繁上下线会导致登录异常甚至掉线，我们只需要 **手动挂载** 插件就可以正常使用。

## 挂载插件

你可以给机器人发送 `mount <...name>` 或者 `挂载 <...插件名>` 指令，插件名就是你刚才创建的 **文件夹名**。

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">mount test</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">
  {{
    JSON.stringify({
      test: {
        message: 'plugin mount success.',
      }
    }, null, 2)
  }}
  </ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">hello</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">hello world</ChatMessage>
</ChatPanel>

所有插件都是通过 `plugins` 和 `node_module` 内的文件夹名来作为唯一标识的。

## 插件权限

除了 `mount` 指令外，还有 `unmount`、`enable` 等内置指令，你可以输入 help 查看所有内置指令。

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">help</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">
  {{
    [
      'Commands: ',
      '  print <message>  打印测试',
      '  state  查看 bot 运行信息',
      '  plugin  插件模块列表',
      '  mount <...names>  挂载插件',
      '  unmount <...names>  卸载插件',
      '  reload <...names>  重载插件',
      '  enable <...names>  启用插件',
      '  disable <...names>  禁用插件',
      '  server  查看当前群服务列表',
      '  apply <...names>  应用群服务',
      '  exempt <...names>  免除群服务',
      '  version  版本信息',
      '  help  帮助信息',
      '',
      'More: https://kokkoro.js.org',
    ].join('\n')
  }}
  </ChatMessage>
</ChatPanel>

你一定有所疑问，`mount` 与 `enable` 有什么区别？

当你启动项目时，程序会从 `plugins` 与 `node_modules` 目录中检索，若有与之匹配的模块包，就会将其自动挂载并执行对应代码，也就是 `mount` 操作。反之，`unmount` 会直接清除整个模块包缓存，并将插件对应的事件销毁。

那么 `enable` 呢？kokkoro 支持多 bot 账号管理，若出现机器人 A 想要使用某个插件，机器人 B 却不需要这个插件时，就可以使用该项指令。

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">disable test</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">
  {{
    JSON.stringify({
      test: {
        message: 'plugin disable success.',
      },
    }, null, 2)
  }}
  </ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">hello</ChatMessage>
  <ChatMessage :id="2225151531" nickname="Yuki">将不再收到消息</ChatMessage>
</ChatPanel>

现在 kokkoro 已经将 test 插件屏蔽，**该 bot** 将不会处理 test 插件下的任何消息事件，不过插件仍然在正常运行，若你登录了多个账号，其它 bot 仍然可以正常收发消息。
