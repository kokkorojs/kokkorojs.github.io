# 插件配置项

::: warning TODO
不定期更新
:::

## code

```typescript
import { Plugin, Option } from '@kokkoro/core';

interface TestOption extends Option {

}

const option: TestOption = {
  apply: true,
  lock: false,
};
const plugin = new Plugin('test', option);

plugin
  .command('hello')
  .action(ctx => {
    ctx.reply(ctx.option);
  })
```
