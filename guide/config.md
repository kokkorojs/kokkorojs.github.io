# 配置文件

::: warning TODO
不定时更新
:::

## 全局配置

在初始化项目后，会在根目录下生成 `kokkoro.json` 文件，你可以在此修改相关配置，项目启动后尽量避免编辑器直接修改配置文件，你改了也不会生效。

```json
{
  // web 服务
  "server": {
    // 端口号
    "port": 2333,
    // 域名
    "domain": null
  },
  // 日志等级
  "logLevel": "INFO",
  // bot 信息，与 amesu 保持一致
  "bots": [
    {
      "appid": "1145141919",
      "token": "38bc73e16208135fb111c0c573a44eaa",
      "secret": "6208135fb111c0c5",
      // 唯一与 amesu 不同的配置项
      // 传入字符串数组（插件的 name），用来屏蔽部分插件服务
      // 如果不传入，则默认所有已挂载的插件会对 bot 生效
      "plugins": []
    }
  ]
}
```
