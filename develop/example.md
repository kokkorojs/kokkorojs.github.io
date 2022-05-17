?> 当前页面并不会对 js 做深入讲解，即使你是小白也可以放心观看  
即使你之前从未接触过 js 也没关系，接下来的开发过程中会为你逐一讲解 \\(￣︶￣*\\))

## 插件目录

在编写插件之前，我们首先要了解项目结构

项目部署时就已经为大家做了初步介绍，插件共分为两大类，**本地插件** 和 **npm 插件**

- 本地插件
  + 本地插件将全部存放在根目录的 `plugins` 下
  + 所有由你自己编写，并 **仅供个人使用** 的插件就可以称为本地插件
- npm 插件
  + npm 插件都是直接使用 `npm i` 命令安装，存放在 `node_modules` 目录下
  + 是由我或者其他开发者编写，上传至 [npmjs](https://www.npmjs.com/) 平台，为 **所有使用 kokkoro 框架的人** 提供服务

还记得在初始化项目时输入的 `kokkoro init` 么，在界面会有一个选择安装插件的步骤，那些插件就全部属于 npm 插件

如果你对 npmjs 并不了解也没关系，在这里只会介绍本地插件的编写  
但是如果你想对 kokkoro 有一个更深入的了解，还是需要熟悉 nodejs 及 npmjs 的基本原理

## 编写插件

> 在编写模块前，你需要先在 plugins 目录下，创建一个文件夹来存放代码文件

例如 `plugins/hello`，创建完成后开始编写 index.js ，命名规范遵循 **CommonJS**  
除非你创建了 `package.json` ，否则文件名 **不能随意更改** ，不然会导致插件无法被检索

```text
plugins
└─ hello                 hello 插件
   ├─ index.js           程序主入口
   └─ package.json       包管理文件 (可选)
```

现在就可以开始编写代码了，需要注意的是，`plugin` 变量是必须实例化并导出的

``` javascript
const { Plugin } = require('kokkoro');

const plugin = new Plugin();

plugin
  .command('hello')
  .action(function () {

  });

module.exports = {
  plugin,
};
```

这个时候你就已经写好了一个最基础的插件，不过目前它还什么都不能干

## 实现交互

相信你这个时候一定有很多疑问，`Plugin` 是什么？`command` 又是什么？`action` ？

> 当前章节仅提供示例，目的在于让你能自己编写出可以进行简单交互的插件  
目前你无需关心这段代码是什么意思，后面会逐一介绍，所以不用着急，让我们继续

在 `action` 函数里添加以下代码

```javascript
action(function () {
  // 可以在此处编写你的指令逻辑
  this.replay('你好鸭~');
})
```

## 完整代码

``` javascript
const { Plugin } = require('kokkoro');
  
const plugin = new Plugin();

plugin
  .command('hello')
  .action(function () {
    this.replay('你好鸭~');
  });

module.exports = {
  plugin,
};
```

当然，你完全也可以使用 ts 来编写插件，能给你带来更好的开发体验，kokkoro 两种方式都支持

```typescript
import { Plugin } from 'kokkoro';

export const plugin = new Plugin();

plugin
  .command('hello')
  .action(function () {
    this.replay('你好鸭~');
  });
```
这下我们就编写好了一段指令完整的交互逻辑  
只要有人给 bot 发送了 `hello` ，便会回复 `你好鸭~`，是不是非常简单？ (●'◡'●)

## 启用插件
> 要注意的是，这个插件不是在项目启动时就存在的  
> 而是你现在完成开发并后续添加的，所以需要 **启用插件** 后才能正常使用

kokkoro 支持插件热重载，启用或禁用插件都不用重启整个 bot 服务

<!-- chat:start -->

#### **yuki**

启用 hello

#### **kokkoro**

启用插件成功

#### **yuki**

hello

#### **kokkoro**

你好鸭~

<!-- chat:end -->

在这里我们引入了一个新概念，插件的启用，如果你此从未接触过 bot 可能比较陌生  
不过没关系，下一章节将会为你介绍项目的生命周期，不用担心，其实也没有那么复杂