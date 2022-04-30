!> _TODO_

<!-- 
?> 本章节将会涉及到变量类型及函数回调，都是一些特别基础的知识  
在这里不会做基础讲解，如果你至少要对一门编程语言有相关程度的认知，可以继续往下看

## 账号实例

在上一章节，我们介绍了如何编写自己的第一个插件

在插件加载后 kokkoro 去调用了 `enable` 函数，去执行 `bot` 对象的 `on` 方法

那个那个，bot 到底是什么呀？~~（哈？你问我干嘛，打出来看看不就知道了嘛！）~~

``` javascript
function enable(bot) {
  console.log(bot);

  bot.on('message.group', listener);
}
```

你可能看不懂这里面的大部分字段，但是下面的这些属性，就算我不写注释你一定知道代表着什么

``` shell
bot {
  nickname: 'kokkoro',
  age: 12,
  sex: 'female',
  uin: 437402067,
  ...
}
```

没错，你已经猜到了，属性 bot 正是你所登录账号的实例对象，有着各种各样的方法及参数

## 消息事件

而 `bot.on()` 便是监听事件消息的方法，可接收 `<event>` 与 `<callback>` 两个参数

刚刚编写的 hello 插件只监听了 `message.private` 事件，所以只会在私聊时执行对应逻辑

?> 事件有很多很多，`消息接收` 只是其中之一  
其它比较常见的例如 `新人入群`、`塞口球` 甚至是 `戳一戳` 都有相关事件  
在这里，你可以制作各种各样有趣的插件，能让 kokkoro 变得更加强大 o((>ω< ))o

例如我们刚刚使用到的是消息事件，共有以下三种：

``` javascript
// 全部消息事件
bot.on('message', event => console.log(event));
// 群组消息事件
bot.on('message.group', event => console.log(event));
// 私聊消息事件
bot.on('message.private', event => console.log(event));
```

我们可以看到，在 `bot.on` 的回调函数中，能够接收到一个 `event` 对象

不同之前介绍的 `bot` 与 `enable` ，在一般插件开发中，对于 `event` 使用是 **最为频繁** 的

> 更多 oicq 消息事件可查看：https://github.com/takayama-lily/oicq/wiki/92.%E4%BA%8B%E4%BB%B6%E6%96%87%E6%A1%A3

## 消息对象

为什么说 `event` 的使用及其频繁？

其实 `event` 参数，正是事件监听的 **事件消息对象**

``` javascript
function listener (event) {
  event.raw_message === '你好' && event.reply(`你好呀`);
}
```

回顾之前编写的代码，我们使用了 `event` 对象里的 `raw_message` 属性与 `reply` 方法

属性 `raw_message` 是接收到的消息文本，方法 `reply` 则是引用来源回复（私信和群聊都可使用）

> 远不止如此，它里面还有着大量你用得到的属性与方法  
例如我们监听消息事件，除了文本字段，对方的 qq 号或群号，及账号相关资料全都可以获取

- 想要做自定义收发消息
  + 你就要获取 bot 收到的文本字段
- 想要做新人入群的欢迎致辞
  + 你就要得到新成员的 qq 及其它信息
- 或者是想做一个戳一戳掉落卡片的收集游戏
  + 你就必须要知道是谁戳了谁
- 还是说部分功能仅希望管理和群主才能使用
  + 你就要判断对方的群身份做相应处理

所以 `event` 才显得如此重要，你想要的在这里都能找到 (\*/ω＼\*)

## 代码规范

天の声：“yuki yuki，听你这么一说，我完全懂了”  
yuki：“啊？懂...懂什么哦？”

天の声：“当我需要用到某个插件，在去启用的时候，kokkoro 就帮我调用了插件里面的 `enable` 方法”  
yuki：“唔姆，是这样的，因为启用插件是统一的固定操作，所以方法名 **不能修改**”

天の声：“那么在这个时候，我可以编写执行 `bot.on()` 方法，去监听我想要得到的 **任何消息**”  
yuki：“是哦，消息事件没有你收不到，只有你想不到，目前来说足够满足日常使用”

天の声：“也就是说...（敲代码中）”  
yuki：“嗯？（察觉）”

``` javascript
export function enable(bot) {
  bot.on('message', event => {
    const { raw_message, reply } = event;

    if (raw_message === '你好') {
      reply(`你好呀`);
    }
  });
}
```

天の声：“蒋蒋~我把 hello 代码优化了亿下，怎么样？是不是比你一开始写的要好多了？”  
yuki：“蛤？！”

![shine](../assets/images/emoji/shine.jpg ':size=200')

你现在这样写会**直接报错**，而且这段代码因为使用了解构赋值和箭头函数会导致各种各样的问题

!> 尽量避免将 **逻辑代码** 直接写到 `enable`、`disable` 方法里  
为什么说是尽量避免，而不是严格禁止？ ~~你非要写我也拦不住啊，而且这样并不会有编译错误~~

不要仅看了前面一点内容就开始急于编写代码

确实，如果你有编程经验，甚至熟悉 js 的话，你现在完全可以独立写出自己的插件

但是在这之前，请务必完整看完插件的 [生命周期](/develop/liftcycle)，在了解整套体系之后，在写也不迟 -->