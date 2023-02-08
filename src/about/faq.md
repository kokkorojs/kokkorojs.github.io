# 常见问题

## 扫码无法登录

自从去年 QQ 出现大量盗号后腾讯调整了安全策略，现在扫码登录必须与设备保持同一网络环境。如果要在服务器登录，可以先在本地登录账号后在将 `data/bot/{uin}/` 文件夹下的 `token` 文件放到服务器，就可以直接登录，详见 [Issue1](https://github.com/kokkorojs/kokkoro/issues/1)
