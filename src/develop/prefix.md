# 指令前缀

:::warning TODO
不定期更新
:::

## code

```typescript{3}
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin('test');

plugin
  .command('hello')
  .action((ctx) => {
    ctx.reply('hello world');
  })
```

<ChatPanel>
  <ChatMessage id="2225151531">test hello</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>
