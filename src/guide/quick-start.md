# 快速开始

::: tip
在开始前，请先确保你安装了 [nodejs](https://nodejs.org/zh-cn/)，因为项目使用了大量 es 最新语法，要求版本不能低于 v15。
:::

## 项目构建

本项目不用安装任何第三方软件，非常简单轻便，仅需三行命令即可构建。

```shell:no-line-numbers
# 安装 kokkoro cli
npm i -g @kokkoro/cli

# 创建并进入文件夹
mkdir bot && cd bot

# 初始化项目
kokkoro init
```

> 若网速较慢可以尝试使用阿里镜像源：  
> `npm i -g @kokkoro/cli --registry=https://registry.npm.taobao.org`

## 目录结构

当你输入 `kokkoro init` 后， kokkoro 将会为你在当前所在目录自动安装并生成相关文件。

```tex:no-line-numbers
.
├─ data/              资源目录
├─ db/                数据库目录
├─ plugins/           插件目录（存放编写好的插件）
├─ main.js            程序入口
└─ kokkoro.json       配置文件
```

这个时候你可能就要说了，yuki 你个骗子，我看了目录明明生成的文件和上面说的不一样。

kokkoro 确实只会生成上面的 5 个文件，不过 `data` 和 `db` 目录如果你 **从未启动过项目**，就不会自动创建。

至于 `node_modules`、`package.json` 等都是 npm 生成的，后面在 [插件开发](/develop/example) 中会讲到。如果你不准备开发插件，就不用去关心这些 **依赖文件**，感兴趣你也可以先使用搜索引擎查找相关知识。

## 启动程序

一切准备就绪，开始启动你的项目吧。如果你是本地安装，就要使用 `npx kokkoro start -d` 启动项目。

```shell:no-line-numbers
kokkoro start -d
```

首次启动项目会动态编译 admin 配置参数，例如 api url 等，所以时间会稍微有点慢，第一次编译完成后只要不修改相关 config 就不会再次编译。

:::info
`-d` 代表着 develop 模式，会将 web serve 指向内网 ip 运行，方便用于本地调试。若要在服务器部署可以直接使用 `kokkoro start` 或者 `node main.js`，后者指向公网 ip。
:::

如上述步骤无误，控制台会输出服务地址，首次访问会提示创建 admin 账号，之后进入后台即可管理账号登录与插件状态。

账号登录成功后，会在根目录下的 `data/bot` 自动生成 QQ 账号的缓存及相关配置文件。

## 你好世界

登录成功后，你将会收到一条私信。（你填写的 masters）

<ChatPanel>
  <ChatMessage id="709289491">おはようございます、主様♪</ChatMessage>
</ChatPanel>

输入 `print` 指令可以测试消息打印，现在开启一段属于你的物语吧♪ q(≧▽≦q)

<ChatPanel>
  <ChatMessage id="2225151531">print hello world</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>

当然，如果你有 js 的相关知识，随时都可以编写自己的插件，详情可在 [插件开发](/develop/example) 一栏查看，更多插件安装和使用说明可以在 [插件社区](/plugin/awesome) 中查找。
