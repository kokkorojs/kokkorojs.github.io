# 快速上手

::: info 准备工作
在开始前，请先确保你安装了 **18.0.0** 或以上版本的 [Node.js](https://nodejs.org/zh-cn/)，并在 [QQ 开放平台](https://bot.q.qq.com/wiki/develop/api-v2/) 注册好了机器人账号。
:::

## 项目构建

本项目不用安装任何第三方软件，非常简单轻便，仅需 2 行命令即可构建。

```shell:no-line-numbers
# 安装 kokkoro 脚手架
npm i @kokkoro/cli -g

# 初始化项目
kokkoro init
```

> 若网速较慢可以尝试使用淘宝镜像源：  
> `npm i @kokkoro/cli -g --registry=https://registry.npmmirror.com`

## 目录结构

当你使用 `init` 命令做好相关配置后， kokkoro 将会为你在指定目录自动生成相关文件。

```tex:no-line-numbers
.
├─ logs/              日志列表
├─ plugins/           插件目录（存放编写好的插件）
├─ index.js           程序入口
└─ kokkoro.json       配置文件
```

接下来，你便可以参考终端的相关提示，安装依赖项：

```shell:no-line-numbers
# 切换至项目根目录
cd robot
# 安装依赖
npm i
```

等待安装命令执行完毕后，你会发现，在根目录下又生成了 `node_modules` 和 `package.json` 这两个文件，后面在 [插件开发](/develop/application) 中将会为你详细介绍。

如果你不准备开发插件，就不用去关心这些**依赖文件**，感兴趣你也可以先使用搜索引擎查找相关知识。

## 启动程序

一切准备就绪，开始启动你的项目吧。

```shell:no-line-numbers
kokkoro start
```

> 如果你不是全局安装的 cli，也可以使用 `npm run start` 启动项目。

如上述步骤无误，在项目启动后，便会开始为机器人建立会话通信。

## 插件扩展

你可以直接安装 npm 插件来为自己的机器人扩展相对应的功能，例如：

```shell:no-line-numbers
npm i kokkoro-plugin-hitokoto
```

程序会在机器人建立会话通信前，**自动挂载**项目内的所有插件。

<ChatPanel>
  <ChatMessage qq="2225151531" nickname="Yuki">@可可萝 /来点骚话</ChatMessage>
  <ChatMessage qq="2854205915" nickname="可可萝">『大部分人并不想长大，只是没办法继续当一个小孩子。』——「小林家的龙女仆」</ChatMessage>
</ChatPanel>

现在，开启一段属于你的物语吧 ♪ q(≧▽≦q)

当然，如果你有 JavaScript 的相关知识，随时都可以编写自己的插件，详情可在 [插件开发](/develop/overview) 一栏查看，更多插件安装和使用说明可以在 [插件社区](/plugin/awesome) 中查找。
