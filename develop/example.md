<div class="updated">{docsify-updated}</div>

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

例如 `plugins/hello`，hello 为你的插件名，命名规则无严格限制 ~~你用中文都大丈夫~~

创建成功后在当前目录下创建 index.js，命名规范遵循 `CommonJS` ，文件名 **不能随意更改** ，否则无法被检索

``` text
plugins
└─ hello            hello 插件
   └─ index.js
```

现在就可以开始编写代码了，需要注意的是，`enable` 和 `disable` 方法是必须写入并导出的

``` javascript
// 在这里编写你的插件逻辑，名字不一定非要是 listener
function listener (event) {

}

// 插件启用函数（必须编写）
function enable (bot) {
  bot.on('message.private', listener);
}

// 插件禁用函数（必须编写）
function disable (bot) {
  bot.off('message.private', listener);
}

// enable 和 disable 必须导出
module.exports = {
  enable, disable
}
```

## 实现交互

相信你这个时候一定有很多疑问，`bot` 是什么？`message.private` 又是什么？`event` ？

> 当前章节仅提供示例，目的在于让你能自己编写出可以进行简单交互的插件  
目前你无需关心这段代码是什么意思，后面会逐一介绍，所以不用着急，让我们继续

在 `listener` 函数里添加以下代码

``` javascript
function listener (event) {
  /**
   * 如果收到的字段是 'hello'，则调用 reply 发送消息
   * raw_message 是 bot 接收到的消息字段，reply 是引用消息回复的方法
   */
  event.raw_message === '你好' && event.reply(`你好呀`);
}
```

现在，启用插件后，只要有人给 bot **私信发送** 了 `你好` ，便会自动回复 `你好呀` 相关字段，是不是非常简单？ (●'◡'●)