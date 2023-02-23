# 指令鉴权

:::warning TODO
不定期更新
:::

在 kokkoro 看来，任何发送消息都是成员都是有等级的

- level 0 群成员（随活跃度提升）
- level 1 群成员（随活跃度提升）
- level 2 群成员（随活跃度提升）
- level 3 管　理
- level 4 群　主
- level 5 主　人（你填写的 masters）
- level 6 维护组

## code

```typescript{7}
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin('test');

plugin
  .command('hello')
  .sugar(/^你好$/)
  .limit(4)
  .action(ctx => {
    ctx.reply('hello world');
  })
```

<ChatPanel>
  <ChatMessage id="437402067">你好</ChatMessage>
  <ChatMessage id="709289491">越权，指令 disable 的 level 范围：4 ~ 6，你当前的 level 为：0</ChatMessage>
  <ChatMessage id="2225151531">你好</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>
