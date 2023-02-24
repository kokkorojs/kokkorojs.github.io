# 参数获取

::: warning TODO
不定期更新
:::

## code

```typescript{6-7,9}
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin('test');

plugin
  .command('say <message>')
  .sugar(/^复述\s?(?<message>.+)/)
  .action(ctx => {
    const { query } = ctx;
    const { message } = query;

    ctx.reply(message);
  })
```

<ChatPanel>
  <ChatMessage id="2225151531">test say hello world</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
  <ChatMessage id="2225151531">复述 hello world</ChatMessage>
  <ChatMessage id="709289491">hello world</ChatMessage>
</ChatPanel>
