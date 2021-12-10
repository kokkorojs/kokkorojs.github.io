?> 在此之前你需要安装并掌握 [nodejs](https://nodejs.org/) 及 [npmjs](https://www.npmjs.com/) 的相关知识

## 项目安装

本项目不用安装任何第三方软件，非常简单轻便，仅需三行命令即可部署

``` shell
# 安装 kokkoro
npm i -g kokkoro

# 创建并进入文件夹
mkdir bot && cd bot

# 初始化项目
kokkoro init
```

> 若网速较慢可以尝试使用阿里镜像源 `npm i -g kokkoro --registry=https://registry.npm.taobao.org`

## 目录结构

当你输入 `kokkoro init` 后， kokkoro 将会为你在当前所在目录自动安装并生成相关文件

``` text
.
├─ data                  资源目录
│  └─ bots                 bot 目录
├─ plugins               插件目录（存放编写好的插件）
└─ kkrconfig.json        配置文件
```

!> 项目启动后尽量避免编辑器直接修改配置文件，你改了也不会生效的，使用 **指令修改** 可以立即生效

## 启动程序

一切准备就绪，开始启动你的项目吧

``` shell
kokkoro start
```

> 如上述步骤无误，根据控制台的提示输入密码及对应验证即可成功登录  
账号登录成功后，会在 `data/bots`目录下自动生成 QQ 账号的缓存及相关配置文件

## 你好世界

登录成功后，你将会收到一条私信（你填写的 masters）
输入 `>echo` 指令可以测试消息打印，现在开启一段属于你的物语吧 q(≧▽≦q)

![hello world](../images/illustrate/hello_world.png)

~~yuki yuki，为什么我没有找到机器人的相关插件呀（因为我还没有做移植呀）~~

> 当然，如果你有 `js` 的相关知识，随时都可以编写自己的插件，详情可在 [开发](/develop/) 一栏查看