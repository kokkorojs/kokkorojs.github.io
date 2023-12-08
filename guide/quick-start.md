# 快速上手

::: info 准备工作
在开始前，请先确保你安装了 [Node.js](https://nodejs.org/zh-cn/)，要求 **不能低于 node v20**。如果你对此有疑问，可以 [在这里](/about/faq) 查看关于版本问题。
:::

## 项目构建

本项目不用安装任何第三方软件，非常简单轻便，仅需三行命令即可构建。

```shell:no-line-numbers
# 安装 kokkoro cli
npm i @kokkoro/cli -g

# 创建并进入文件夹
mkdir bot && cd bot

# 初始化项目
kokkoro init
```

> 若网速较慢可以尝试使用淘宝镜像源：  
> `npm i @kokkoro/cli -g --registry=https://registry.npmmirror.com`

## 目录结构

当你输入 `kokkoro init` 后， kokkoro 将会为你在当前所在目录自动安装并生成相关文件。

```tex:no-line-numbers
.
├─ plugins/           插件目录（存放编写好的插件）
├─ app.js             程序入口
└─ kokkoro.json       配置文件
```

这个时候你可能就要说了，yuki 你个骗子，我看了目录明明生成的文件和上面说的不一样。

kokkoro 确实只会生成上面的 3 个文件，`node_modules`、`package.json` 都是 npm 生成的，后面在 [插件开发](/develop/application) 中会讲到。如果你不准备开发插件，就不用去关心这些**依赖文件**，感兴趣你也可以先使用搜索引擎查找相关知识。

## 启动程序

一切准备就绪，开始启动你的项目吧。

```shell:no-line-numbers
kokkoro start
```

> 如果你不是全局安装的 cli，就要使用 `npx kokkoro start` 启动项目。

如上述步骤无误，在项目启动后，便会开始为 bot 建立通信。

## 插件扩展

你可以直接安装 npm 插件来为自己的 bot 扩展相对应的功能，例如：

```shell:no-line-numbers
npm i kokkoro-plugin-hitokoto
```

程序会在 bot 建立通信前，自动挂载项目内的所有插件。

<ChatPanel>
  <ChatMessage :qq="2225151531" nickname="Yuki">@可可萝 /来点骚话</ChatMessage>
  <ChatMessage :qq="2854205915" nickname="可可萝">『大部分人并不想长大，只是没办法继续当一个小孩子。』——「小林家的龙女仆」</ChatMessage>
</ChatPanel>

现在，开启一段属于你的物语吧 ♪ q(≧▽≦q)

当然，如果你有 JavaScript 的相关知识，随时都可以编写自己的插件，详情可在 [插件开发](/develop/overview) 一栏查看，更多插件安装和使用说明可以在 [插件社区](/plugin/awesome) 中查找。
