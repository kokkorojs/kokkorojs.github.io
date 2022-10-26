# 简单示例

:::tip
当前页面并不会对编程语言做深入讲解，即使你是小白也可以放心观看。  
之前从未接触过 js 也没关系，接下来的开发过程中会为你逐一讲解 \(￣︶￣*\))
:::

## 插件目录

在编写插件之前，我们首先要了解项目结构。

项目部署时就已经为大家做了初步介绍，插件共分为 **本地插件** 和 **npm 插件** 两大类。

- 本地插件
  - 本地插件将全部存放在根目录的 `plugins` 下。
  - 所有由你自己编写，并 **仅供个人使用** 的插件就可以称为本地插件。
- npm 插件
  - npm 插件都是直接使用 `npm i` 命令安装，存放在 `node_modules` 目录下。
  - 是由我或者其他开发者编写，上传至 [npmjs](https://www.npmjs.com/) 平台，为 **所有使用 kokkoro 框架的人** 提供服务。

还记得在初始化项目时输入的 `kokkoro init` 么，在界面会有一个选择安装插件的步骤，那些插件就全部属于 npm 插件。

如果你对 npmjs 并不了解也没关系，在这里只会介绍本地插件的编写。  
但是如果你想对 kokkoro 有一个更深入的了解，还是需要熟悉 nodejs 及 npmjs 的基本原理。

## 编写插件

:::info
在编写模块前，你需要先在 plugins 目录下，创建一个文件夹来存放代码文件。
:::

例如 `plugins/test`，test 为你的 **插件名**，命名规则无严格限制。 ~~你用中文都大丈夫 (锟斤拷警告)~~

创建完成后开始在当前目录下编写 index.js 文件，与文件夹命名不同，该文件需要遵循 **CommonJS** 规范。

```tex
plugins/
└─ test/                 test 插件
   ├─ index.js           程序主入口
   └─ package.json       包管理文件 (可选)
```

除非你创建了 `package.json` ，否则 index 文件名 **不能随意更改** ，不然会导致插件无法被检索。

```javascript
const { Plugin } = require('kokkoro');

const plugin = new Plugin();
```

这个时候你就已经写好了一个插件，不需要任何额外操作，仅需将 Plugin 类实例化，就会在 **项目启动时** 为其自动创建对应的工作线程。  
不过目前这个插件还什么都不能干，我们没有为其编写相应的交互逻辑。

## 实现交互

相信你这个时候一定有很多疑问，因为这其中涉及到相当多的概念，`Plugin` 到底是什么？工作线程？

:::info
当前章节仅提供示例，目的在于让你能自己编写出可以进行简单交互的插件。  
目前你无需关心这段代码是什么意思，后面会逐一介绍，所以不用着急，让我们继续。
:::

你可以参考下列代码段，添加 `message.private` 事件监听，在 `trigger` 回调函数里可以编写你的逻辑代码：

```javascript
const { Plugin } = require('kokkoro');

const plugin = new Plugin();

plugin
  .listen('message.private')
  .trigger((event) => {
    const { sender } = event;
    const { user_id } = sender;

    event.botApi('sendPrivateMsg', user_id, 'hello world');
  })
```

当然，你完全也可以使用 ts 来编写插件，能给你带来更好的开发体验，kokkoro 两种方式都支持

```typescript
import { Plugin } from 'kokkoro';

const plugin = new Plugin();

plugin
  .listen('message.private')
  .trigger((event) => {
    const { sender } = event;
    const { user_id } = sender;

    event.botApi('sendPrivateMsg', user_id, 'hello world');
  })
```

这下我们就编写好了一段指令完整的交互逻辑，你可以大致理解为只要有人给 bot 私发了消息，便会收到 `hello world`，是不是非常简单？ (●'◡'●)

## 快来试试！

<ChatPanel>
  <ChatMessage id="2225151531">hello</ChatMessage>
  <ChatMessage id="2225151531">...</ChatMessage>
</ChatPanel>

什么都没有发生呐！前面我们有提到，插件会在项目服务启动时创建对应的工作线程，当前这个插件不是在项目启动时就存在的，而是你在当前服务运行时完成开发并 **后续添加** 的。

不过你并不需要为此就去重启整个服务，每次重启服务 bot 都将会重新登录，频繁上下线会导致登录异常甚至掉线，我们只需要单独 **挂载插件** 就可以正常使用。

## 挂载插件

你可以给机器人发送 `mount <name>` 或者 `挂载 <插件名>` 指令，插件名就是你刚才创建的 **文件夹名**，所有插件都是通过 `plugins` 和 `node_module` 内的文件夹名来创建工作线程的。

<ChatPanel>
  <ChatMessage id="2225151531">挂载 test</ChatMessage>
  <ChatMessage id="709289491">已创建 test 线程</ChatMessage>
  <ChatMessage id="2225151531">hello</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>

当然，你也可以自定义插件名和版本信息

```typescript
import { Plugin } from 'kokkoro';

const plugin = new Plugin();

plugin
  .name('测试插件')
  .version('0.0.1')
```

## 插件生命周期

除了 `mount` 指令外，还有 `unmount`、`enable` 等内置指令，你可以输入 help 查看所有内置指令。

<ChatPanel>
  <ChatMessage id="2225151531">help</ChatMessage>
  <ChatMessage id="709289491">
    <div>Commands: </div>
    <div>&emsp;print &lt;message&gt;  打印测试</div>
    <div>&emsp;state  查看 bot 运行信息</div>
    <div>&emsp;plugin  插件模块列表</div>
    <div>&emsp;mount &lt;name&gt;  挂载插件</div>
    <div>&emsp;unmount &lt;name&gt;  卸载插件</div>
    <div>&emsp;reload &lt;name&gt;  重载插件</div>
    <div>&emsp;enable &lt;name&gt;  启用插件</div>
    <div>&emsp;disable &lt;name&gt;  禁用插件</div>
    <div>&emsp;help  帮助信息</div>
    <div>&emsp;version  版本信息</div>
    <br />
    <div>More: <a style="color: dodgerblue;">https://kokkoro.js.org/</a></div>
  </ChatMessage>
</ChatPanel>

你一定有所疑问，mount 与 enable 有什么区别？

kokkoro 使用了 [worker_threads](https://nodejs.org/api/worker_threads.html) 分离插件与 bot，每一个插件都是独立的线程服务。当你挂载插件，程序会从 plugins 与 node_modules 目录中检索，若有与之匹配的 js 文件，就会为其创建一个全新的线程执行对应代码。反之，`unmount` 会直接销毁掉整个插件线程。

那么 enable 呢？kokkoro 支持多 bot 账号管理，若出现机器人 A 想要使用某个插件，机器人 B 却不需要这个插件时，就可以使用该项指令。

<ChatPanel>
  <ChatMessage id="2225151531">禁用 test</ChatMessage>
  <ChatMessage id="709289491">已将 test 添加至禁用列表</ChatMessage>
  <ChatMessage id="2225151531">hello</ChatMessage>
  <ChatMessage id="2225151531">将不再收到消息</ChatMessage>
</ChatPanel>

现在 kokkoro 已经将 test 插件屏蔽，该 bot 将不会处理任何 test 插件下的消息事件，不过 test 插件线程仍然在正常运行。
