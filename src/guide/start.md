# 快速开始

::: tip
在开始前，请先确保你安装了 [nodejs](https://nodejs.org/zh-cn/)，因为项目使用了大量 es 最新语法，要求版本不能低于 v15。
:::

## 项目构建

本项目不用安装任何第三方软件，非常简单轻便，仅需三行命令即可构建。

```shell
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

```tex
.
├─ data/              资源目录
├─ plugins/           插件目录（存放编写好的插件）
├─ main.js            程序入口
└─ kokkoro.json       配置文件
```

这个时候你可能就要说了，yuki 你个骗子，我看了目录明明生成了不止上面说的 4 个文件。

别急，kokkoro 确实只会生成上面的 4 个文件，其它例如 `node_modules`、`package.json` 等都是 npm 生成的，后面在 [插件开发](/develop/example) 中会讲到。

如果你不准备开发插件，就不用去关心这些 **依赖文件**，感兴趣你也可以先使用搜索引擎查找相关知识。

## 启动程序

一切准备就绪，开始启动你的项目吧。如果你是本地安装，就要使用 `npx kokkoro start` 启动项目。

```shell
kokkoro start
```

如上述步骤无误，根据控制台的提示扫码或输入密码即可成功登录。  
账号登录成功后，会在根目录下的 `data/bot` 自动生成 QQ 账号的缓存及相关配置文件。

## 你好世界

登录成功后，你将会收到一条私信。（你填写的 masters）  
输入 `print` 指令可以测试消息打印，现在开启一段属于你的物语吧♪ q(≧▽≦q)

<ChatPanel>
  <ChatMessage id="2225151531">print hello world</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>

当然，如果你有 js 的相关知识，随时都可以编写自己的插件，详情可在 [开发](develop/example) 一栏查看。

## 配置参数

:::info
项目启动后尽量避免编辑器直接修改配置文件，你改了也不会生效，使用 **指令修改** 可以立即生效。
:::

在初始化项目后，会在根目录下生成 `kokkoro.json` 文件，你可以在此修改相关配置。

```json
{
  // 第三方服务 api key
  "api_key": {
    // 例如 saucenao 搜图
    "saucenao": "3d14159265358979323846264338327950288419"
  },
  // web 服务端口号
  "port": 0,
  // bot 信息，可添加多个
  "bots": {
    // bot 账号
    "1145141919": {
      // 项目启动时自动登录，默认 true
      "auto_login": true,
      // 登录模式，默认扫码登录
      "mode": "qrcode",
      // bot 主人，可添加多个
      "masters": [
        2225151531
      ],
      // 协议配置，不要随意修改，除非你知道自己在做什么
      "protocol": {
        // 日志等级，默认 info
        // 打印日志会降低性能，若消息量巨大建议修改此参数
        "log_level": "info",
        // 1:安卓手机(默认) 2:aPad 3:安卓手表 4:MacOS 5:iPad
        "platform": 1,
        // 忽略自己的消息，默认 true
        "ignore_self": true,
        // 被风控时是否尝试用分片发送，默认 true
        "resend": true,
        // 数据存储文件夹
        "data_dir": "data/bot",
        // 重新登录间隔，默认5(秒)
        "reconn_interval": 5,
        // 是否缓存群员列表，默认 true，
        // 群多的时候 (500~1000) 会多占据约 100MB+ 内存
        // 关闭后进程只需不到 20MB 内存
        "cache_group_member": true,
        // 自动选择最优服务器
        // 关闭后会一直使用 `msfwifi.3g.qq.com:8080` 进行连接
        "auto_server": true
      }
    }
  }
}
```

更多插件和使用说明可以在 [插件社区](/plugin/awesome) 中查找。
