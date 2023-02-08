# 配置文件

:::warning
在 kokkoro v1.0 前，所使用的的配置文件为 YAML 而非 JSON。  
因考虑到后续 web 间的数据传输，所以替换了方案，后续 **可能会** 使用 TOML，不会向下兼容
:::

## 配置参数

在初始化项目后，会在根目录下生成 `kokkoro.json` 文件，你可以在此修改相关配置，项目启动后尽量避免编辑器直接修改配置文件，你改了也不会生效，使用 **指令修改** 可以立即生效。

```json
{
  // web 服务
  "server": {
    // 端口号
    "port": 2333,
    // 域名
    "domain": null,
  },
  // 日志等级，默认 info
  // 打印日志会降低性能，若消息量巨大建议修改此参数
  "log_level": "info",
   // bot 信息，可添加多个
  "bots": [
    {
      // bot 账号
      "uin": 1145141919,
      // 项目启动时自动登录，默认 false
      // "auto_login": true,
      // 账号密码，若不填写则使用扫码登陆
      "password": null,
      // bot 主人，可添加多个
      "masters": [
        2225151531
      ],
      // 账号密码，若不填写则使用扫码登陆
      "password": null,
      // 协议配置，不要随意修改，除非你知道自己在做什么
      "protocol": {
        // 日志等级，与上面的 log_level 不同，只针对 bot 消息打印
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
  ]
}
```

## 环境变量

如果你想配置全局环境变量，可以在项目根目录创建 `.env` 文件，例如有些插件会需要用到 api key。

```tex
# saucenao api key
KOKKORO_SAUCENAO=3d14159265358979323846264338327950288419
```

命名并无限制，不过为了防止变量名冲突，我一般用 `KOKKORO` 作为前缀名。项目启动时会将其添加到 `process.env` 中，文件支持热更，修改后会自动修改变量值。
