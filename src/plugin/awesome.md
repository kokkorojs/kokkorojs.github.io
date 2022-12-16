# 插件社区

::: tip
当前页面列出的插件都是 **曾经有过** 的，因项目历经重构，并不是所有插件都能立即使用，你可以将这个页面视为 TODO 清单。

还在适配中的插件会注明，该页面未适配完成的功能都会随着时间逐步完善，若有你比较中意的功能可以在群里催更或者提 issue，会优先开发。
:::

## 切噜语

```shell
npm i kokkoro-plugin-cherugo
```

类似 `熊说`、`佛曰`，可使用切噜语实现文本加密

### 加密

<ChatPanel>
  <ChatMessage id="2225151531">切噜一下 会长我挂树了</ChatMessage>
  <ChatMessage id="709289491">切噜～♪切噼噼卟蹦咧噼哔噜蹦巴叮拉嘭噼叮拉噜巴啰铃卟巴噼巴</ChatMessage>
</ChatPanel>

### 解密

<ChatPanel>
  <ChatMessage id="2225151531">切噜～♪切噼噼卟蹦咧噼哔噜蹦巴叮拉嘭噼叮拉噜巴啰铃卟巴噼巴</ChatMessage>
  <ChatMessage id="709289491">会长我挂树了</ChatMessage>
</ChatPanel>

## 一言

```shell
npm i kokkoro-plugin-hitokoto
```

### 来句骚话

<ChatPanel>
  <ChatMessage id="2225151531">来点骚话</ChatMessage>
  <ChatMessage id="709289491">
    <span>『不对失误耿耿于怀，而是专心为今后做打算，这才是最有效率的』</span>
    <br />
    <div style="text-align: right;">—— 间谍过家家</div>
  </ChatMessage>
</ChatPanel>

### ~~网抑云~~

在每天凌晨自动发送

<ChatPanel>
  <ChatMessage id="709289491">
    <span>失恋的时候，许多年轻人以为整个世界都抛弃了自己，别傻了，世界根本就没需要过你。</span>
  </ChatMessage>
</ChatPanel>

## 群管理

```shell
npm i kokkoro-plugin-group
```

### 申请头衔

<ChatPanel>
  <ChatMessage id="2225151531">申请头衔 咕咕咕</ChatMessage>
  <ChatMessage id="709289491">申请成功</ChatMessage>
</ChatPanel>

### 欢新提示

在群成员发生变更时发送

<ChatPanel>
  <ChatMessage id="709289491">欢迎新人的加入</ChatMessage>
  <ChatMessage id="709289491">新人已退出群聊</ChatMessage>
</ChatPanel>

## 色图

```shell
npm i kokkoro-plugin-setu
```

### 随机涩图

<ChatPanel>
  <ChatMessage id="2225151531">来点色图</ChatMessage>
  <ChatMessage id="709289491">不可以涩涩！</ChatMessage>
</ChatPanel>

### 指定涩图

<ChatPanel>
  <ChatMessage id="2225151531">来点萝莉色图</ChatMessage>
  <ChatMessage id="709289491">不可以涩涩！</ChatMessage>
</ChatPanel>

### 多张色图

<ChatPanel>
  <ChatMessage id="2225151531">来10份色图</ChatMessage>
  <ChatMessage id="709289491">不可以涩涩！</ChatMessage>
</ChatPanel>

## RSS 订阅

::: warning
因 kokkoro v1 重构，该插件适配中
:::

```shell
npm i kokkoro-plugin-rss
```

## SauceNAO 图片搜索

```shell
npm i kokkoro-plugin-saucenao
```

### 搜图

<ChatPanel>
  <ChatMessage id="2225151531">搜图</ChatMessage>
  <ChatMessage id="709289491">请发送你要搜索的图片 (●'◡'●)</ChatMessage>
  <ChatMessage id="2225151531">
    <img width="200" src="/74237509.jpg" />
  </ChatMessage>
  <ChatMessage id="709289491">
    <div>平台：Pixiv</div>
    <div>封面：</div>
    <img width="100" src="/74237509.jpg" />
    <div>相似：98.3%</div>
    <div>地址：<a style="color: dodgerblue;">https://www.pixiv.net/artworks/74237509</a></div>
  </ChatMessage>
</ChatPanel>

## 公主连结

::: warning
因 kokkoro v1 重构，该插件适配中
:::

```shell
npm i kokkoro-plugin-pcr
```

kokkoro 最初就是以公主连结玩家为核心开发相关功能的，现在计划将一系列插件整合

- kokkoro-plugin-rank
- kokkoro-plugin-battle
- kokkoro-plugin-guild
- kokkoro-plugin-jjc
- kokkoro-plugin-gacha
- kokkoro-plugin-dynamic
- kokkoro-plugin-web

上列插件月底将全部废弃，并正式更名为 kokkoro-plugin-pcr

### 会战

<ChatPanel>
  <ChatMessage id="2225151531">开启会战</ChatMessage>
  <ChatMessage id="709289491">
    <div>当前状态:</div>
    <div>&emsp;1 周目 1 阶段 1 王</div>
    <div>boss 信息:</div>
    <div>&emsp;6000000 / 6000000</div>
    <div>更新时间:</div>
    <div>&emsp;2022/09/29 22:32:30</div>
  </ChatMessage>
  <ChatMessage id="2225151531">尾刀</ChatMessage>
  <ChatMessage id="709289491">
    <div>当前状态:</div>
    <div>&emsp;1 周目 1 阶段 2 王</div>
    <div>boss 信息:</div>
    <div>&emsp;8000000 / 8000000</div>
    <div>更新时间:</div>
    <div>&emsp;2022/09/29 22:35:30</div>
  </ChatMessage>
  <ChatMessage id="2225151531">预约 5</ChatMessage>
  <ChatMessage id="709289491">预约成功</ChatMessage>
</ChatPanel>

### 十连

<ChatPanel>
  <ChatMessage id="2225151531">来发十连</ChatMessage>
  <ChatMessage id="709289491">素敵な仲間が増えますよ~</ChatMessage>
</ChatPanel>

### 竞技场

### 买药

### rank

### 日程推送

## 沙盒

::: warning
因 kokkoro v1 重构，该插件适配中
:::

可执行任意 js 代码段，包括 bot api 和发送网络请求，有着极高的可玩性，你可以把这个插件当做浏览器的 f12 去实现各种有意思的东西

### 执行运算符

<ChatPanel>
  <ChatMessage id="2225151531">> 1000 - 7</ChatMessage>
  <ChatMessage id="709289491">993</ChatMessage>
</ChatPanel>

### 创建变量

<ChatPanel>
  <ChatMessage id="2225151531">> const 贴贴 = "不要贴贴，贴贴危险，还会密接"</ChatMessage>
  <ChatMessage id="709289491">true</ChatMessage>
  <ChatMessage id="2225151531">贴贴</ChatMessage>
  <ChatMessage id="709289491">不要贴贴，贴贴危险，还会密接</ChatMessage>
  <ChatMessage id="2225151531">delete 贴贴</ChatMessage>
  <ChatMessage id="709289491">true</ChatMessage>
</ChatPanel>

你可以通过创建变量实现类似及时问答的效果，不过更推荐通过 [qa](/plugin/awesome#你问我答) 插件去定义，毕竟单纯地变量不支持正则

### 执行脚本

<ChatPanel>
  <ChatMessage id="2225151531">
    <div>> for (let i = 0; i &lt 3; i++) {</div>
    <div>&emsp;event.reply('重要的事情说三遍！');</div>
    <div>}</div>
  </ChatMessage>
  <ChatMessage id="709289491">重要的事情说三遍！</ChatMessage>
  <ChatMessage id="709289491">重要的事情说三遍！</ChatMessage>
  <ChatMessage id="709289491">重要的事情说三遍！</ChatMessage>
</ChatPanel>

我并未对执行语句做过滤，给大家提供较高的自由度并不代表可以做一些危险的举动，包括但不限于 `process.exit()`、`const exec = require('child_process')`、`while(true) {}`...

上述行为一经发现将永久拉入黑名单

## 空调

```shell
npm i kokkoro-plugin-aircon
```

### 开关

<ChatPanel>
  <ChatMessage id="2225151531">开空调</ChatMessage>
  <ChatMessage id="709289491">哔~❄️当前温度 20°</ChatMessage>
</ChatPanel>

### 温度调节

<ChatPanel>
  <ChatMessage id="2225151531">设置温度 28</ChatMessage>
  <ChatMessage id="709289491">哔~☀️当前温度 28°</ChatMessage>
</ChatPanel>

### 温度查询

<ChatPanel>
  <ChatMessage id="2225151531">群温度</ChatMessage>
  <ChatMessage id="709289491">☀️当前温度 28°</ChatMessage>
</ChatPanel>

### ~~年轻人的第一款人造太阳~~

<ChatPanel>
  <ChatMessage id="2225151531">设置温度 114514</ChatMessage>
  <ChatMessage id="709289491">哔~🥵当前温度 114514°</ChatMessage>
</ChatPanel>

## 五子棋

::: warning
因 kokkoro v1 重构，该插件适配中
:::

### 开始游戏

<ChatPanel>
  <ChatMessage id="2225151531">五子棋</ChatMessage>
  <ChatMessage id="709289491">
    <div>&ensp;&ensp;①&ensp;②&ensp;③&ensp;④&ensp;⑤&ensp;⑥&ensp;⑦&ensp;⑧</div>
    <div>Ａ┌,┬,┬,┬,┬,┬,┬,┬,┬,┬,┬,┐</div>
    <div>Ｂ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｃ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｄ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｅ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｆ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｇ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
    <div>Ｈ└,┴,┴,┴,┴,┴,┴,┴,┴,┴,┴,┘</div>
  </ChatMessage>
</ChatPanel>

### 落子

  <ChatPanel>
    <ChatMessage id="2225151531">落子 d4</ChatMessage>
    <ChatMessage id="709289491">
      <div>&ensp;&ensp;①&ensp;②&ensp;③&ensp;④&ensp;⑤&ensp;⑥&ensp;⑦&ensp;⑧</div>
      <div>Ａ┌,┬,┬,┬,┬,┬,┬,┬,┬,┬,┬,┐</div>
      <div>Ｂ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
      <div>Ｃ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
      <div>Ｄ├,┼,┼,┼,┼,●,┼,┼,┼,┼,┼,┤</div>
      <div>Ｅ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
      <div>Ｆ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
      <div>Ｇ├,┼,┼,┼,┼,┼,┼,┼,┼,┼,┼,┤</div>
      <div>Ｈ└,┴,┴,┴,┴,┴,┴,┴,┴,┴,┴,┘</div>
    </ChatMessage>
  </ChatPanel>

## 猜头像

::: warning
因 kokkoro v1 重构，该插件适配中
:::

本来是计划把猜头像也整合进 pcr 插件，考虑到后续可能会添加其它游戏类型的头像，所以仍然独立。

<ChatPanel>
  <ChatMessage id="2225151531">猜头像</ChatMessage>
  <ChatMessage id="709289491">
    <img src="/ranfa.png" />
  </ChatMessage>
  <ChatMessage id="2225151531">麻麻</ChatMessage>
  <ChatMessage id="709289491">
    <img src="/118111.webp" />
    <div>恭喜 yuki 猜对啦~</div>
    <div>关键字： 兰法、妈、妈妈、麻麻、兰法妈妈、兰法麻麻</div>
  </ChatMessage>
</ChatPanel>

## 人生重开

::: warning
因 kokkoro v1 重构，该插件适配中
:::

### 重开

<ChatPanel>
  <ChatMessage id="2225151531">重开</ChatMessage>
  <ChatMessage id="709289491">
    <div>请选取 3 个天赋：</div>
    <div>&emsp;1. 城中高楼（你出生在城市）</div>
    <div>&emsp;2. 驻颜（体质>10时颜值+3）</div>
    <div>&emsp;3. 班中红人（和同学容易处好关系）</div>
    <div>&emsp;4. 橙色转盘（变成随机橙色天赋）</div>
    <div>&emsp;5. 三胎人生（你尽可能生三胎）</div>
    <div>&emsp;6. 独生子女（你没有兄弟姐妹）</div>
    <div>&emsp;7. 贪婪（家境+10）</div>
    <div>&emsp;8. 把握不住（你有强迫症）</div>
    <div>&emsp;9. 学前启蒙（5岁时智力+2）</div>
    <div>&emsp;10. 保胎丸（你不会胎死腹中）</div>
  </ChatMessage>
</ChatPanel>

## 你问我答

::: warning
因 kokkoro v1 重构，该插件适配中
:::

### 问

<ChatPanel>
  <ChatMessage id="2225151531">有人说贴贴你就说不要贴贴，贴贴危险，还会密接</ChatMessage>
  <ChatMessage id="709289491">好的，我记住了</ChatMessage>
  <ChatMessage id="2225151531">有人说妈你就说崽</ChatMessage>
  <ChatMessage id="709289491">好的，我记住了</ChatMessage>
  <ChatMessage id="2225151531">有人说<img width="100" src="/images/meme/这河里妈.jpg" />你就说<img width="100" src="/images/meme/这真步河里.jpg" /></ChatMessage>
  <ChatMessage id="709289491">好的，我记住了</ChatMessage>
</ChatPanel>

### 答

<ChatPanel>
  <ChatMessage id="2225151531">贴贴</ChatMessage>
  <ChatMessage id="709289491">不要贴贴，贴贴危险，还会密接</ChatMessage>
</ChatPanel>

### 查

<ChatPanel>
  <ChatMessage id="2225151531">看看有人问</ChatMessage>
  <ChatMessage id="709289491">贴贴 | 妈 | <img width="100" src="/images/meme/这河里妈.jpg" /></ChatMessage>
</ChatPanel>

## Galgame

::: danger
写剧本太花时间，也没多少人玩，该插件已弃坑两年，未来看心情开发
:::

### 开始

<ChatPanel>
  <ChatMessage id="2225151531">galgame</ChatMessage>
  <ChatMessage id="709289491">
    <div>序章：翘家</div>
    <br />
    <div>阿伟：“好饿哦...”</div>
    <div>阿伟和彬彬刚走出网吧，就开始抱怨</div>
    <div>彬彬：“我们都没钱，没钱我们就只能回家”</div>
    <div>？？：诶，你们好</div>
    <div>？？：这里有一个面包，我还不饿，你们吃不吃？</div>
    <div>————————————————————</div>
    <div>A 吃</div>
    <div>B 不吃不行</div>
    <div>C 没办法，还是吃吧</div>
  </ChatMessage>
</ChatPanel>

### 存档

### 载入
