# 语法糖

::: warning TODO
不定期更新
:::

## code

```typescript{7}
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin('test');

plugin
  .command('hello')
  .sugar(/^你好$/)
  .action(ctx => {
    ctx.reply('hello world');
  })
```

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">你好</ChatMessage>
  <ChatMessage :id="709289491" nickname="kokkoro">hello world</ChatMessage>
</ChatPanel>
