?> 本项目是一个基于 [oicq](https://github.com/takayama-lily/oicq) 协议库，使用 [TypeScript](https://www.typescriptlang.org/) 语言开发的 [QQ](https://im.qq.com/index) 机器人框架

## 写在前面

核心代码及相关插件目前全都由我个人来编写维护，没有第二个人  
架构目前还没有 100% 确定下来，几乎每过几个月我就会重构一次  
如果你想自己开发插件并投入使用，目前来讲不建议你在这里投入过多时间

## 如何使用

如果你有自己的服务器，可以参考 [快速开始](guide/start) 一栏自建  
不懂编程也没关系，有使用的需求，随时都可以 [加群申请](https://jq.qq.com/?_wv=1027&k=3hcWCnhq)，目前是免费提供的

- 在使用过程中你有任何意见或建议，都可以提 issue 或在群内反馈 ~~说白了就是帮忙 debug~~
- 有比较好的想法和想要添加的新功能，涉及到插件开发，需求较大我也会 **考虑考虑**
- 由于个人时间有限，文档并不能保证第一时间更新，如果找不到相关内容就别找了 ~~大概率是没写~~
- 虽然说是 **目前免费提供** 使用，不过也没后续准备收费的打算，靠爱发电嘛，给个 star 就行（笑

## 开源协议

使用 [MIT License](https://github.com/kokkorojs/kokkoro/blob/master/LICENSE) 开源许可协议，没有特别严格的限制，项目诞生这三年来所使用过的框架如下：

- [oicq](https://github.com/takayama-lily/oicq)
  + 使用至今，以后 ~~大概率~~ 不会更换了
  + 得益于此项目才让 kokkoro 实现真正的简单轻便、开箱即用
- [mirai-ts](https://github.com/YunYouJun/mirai-ts)
  + 由于不可描述的原因，个人使用 koishi 开发不太理想，故更换框架
- [koishi](https://github.com/koishijs/koishi)
  + 因为用 Python 开发插件比较苦手，所以选择移植到 JavaScript 语言平台
- [nonebot](https://github.com/nonebot/nonebot)
  + 初版 bot 所使用的框架，当时项目还是使用酷 Q 进行通信来着（笑）

> 由衷感谢以上项目，感谢 dalao 们的无私奉献

## 环境要求

依赖 [nodejs](https://nodejs.org/zh-cn/) 运行，版本不能低于 v14 ，以下平台均通过本人测试，可稳定运行

- windows
  + [ ] windows 7 (没测过，硬盘是 mbr 格式，装不上 win7，都 2202 年了不会还有人在用吧)
  + [x] windows 8
  + [x] windows 8.1
  + [x] windows 10
  + [x] windows 11
  + [x] windows server
- lunux
  + [x] ubintu 18.04
  + [x] ubintu 20.04
  + [x] cent os 8
  + [x] cent os 8.2
  + [x] raspberry pi os desktop
- mac
  + [x] intel
  + [x] m1
