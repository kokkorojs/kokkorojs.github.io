# 参数获取

::: warning TODO
不定期更新
:::

## 语法

你可以通过 reset 语法来为指令添加参数，例如：[arg]、[...args]、&lt;arg>、&lt;...args>。

::: code-group

```javascript [javascript] {12}
import { useCommand } from '@kokkoro/core';

/**
 * @type {import('@kokkoro/core').Metadata}
 */
export const metadata = {
  name: 'example',
  description: '插件示例',
};

export default function Example() {
  useCommand('/复读 <message>', ctx => ctx.query.message);
}
```

```typescript [typescript (Hook)] {9}
import { Metadata, useCommand } from '@kokkoro/core';

export const metadata: Metadata = {
  name: 'example',
  description: '示例插件',
};

export default function Example(): void {
  useCommand<{ message: string }>('/复读 <message>', ctx => ctx.query.message);
}
```

```typescript [typescript (Decorator)] {8}
import { Command, CommandContext, Plugin } from '@kokkoro/core';

@Plugin({
  name: 'example',
  description: '示例插件',
})
export default class Example {
  @Command('/复读 <message>')
  replayMessage(ctx: CommandContext<{ message: string }>) {
    return ctx.query.message;
  }
}
```

:::

指令参数会全部存储在 `ctx.query`，typescript 可以通过泛型来定义类型。需要注意的是，如果指令没提供任何参数，那么 `query` 的值是 `null` 而不是 `{}` 空对象。

## 参数校验

如果你为指令添加了必填参数（&lt;arg>），那么当参数不匹配的时候，会自动发送语法提示。

<ChatPanel>
  <ChatMessage :id="2225151531" nickname="Yuki">@可可萝 /复读</ChatMessage>
  <ChatMessage :id="2854205915" nickname="可可萝">缺少指令参数，有效语句为："/复读 &lt;message>"</ChatMessage>
</ChatPanel>
