# 定时任务

::: warning TODO
不定期更新
:::

## code

```typescript
import { Plugin } from '@kokkoro/core';

const plugin = new Plugin('test');

plugin
  .schedule('0 0 0 * * *', () => {
    console.log('午时已到');
  })
  .schedule('0 0 12 * * 4', () => {
     this.plugin.bl.forEach(bot => {
      bot.gl.forEach(group => {
        bot.sendGroupMsg(group.group_id, '今天疯狂星期四，谁请我吃？');
      });
    });
  })
```
