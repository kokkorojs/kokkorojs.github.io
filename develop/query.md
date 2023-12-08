# 参数获取

::: warning TODO
不定期更新
:::

## 语法

你可以通过命令行语法（command line syntax），来为指令添加参数，例如：[arg]、[...args]、&lt;arg>、&lt;...args>。

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

export default function Example() {
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

指令参数会全部存储在 `ctx.query` 中，typescript 可以通过泛型来定义类型。需要注意的是，如果指令没提供任何**命令行参数语法**，那么 `query` 的值是 `null`，而不是 `{}` 空对象。

## 必选参数

如果你为指令添加了必填参数（&lt;arg>），那么当参数不匹配的时候，会自动发送语法提示。

<ChatPanel>
  <ChatMessage :qq="2225151531" nickname="Yuki">@可可萝 /复读</ChatMessage>
  <ChatMessage :qq="2854205915" nickname="可可萝">缺少指令参数，有效语句为："/复读 &lt;message>"</ChatMessage>
</ChatPanel>

## 可选参数

如果你为指令添加了可选参数（[arg]），那么当指令未传入参数时，该字段的值是 `null` 而不是 `undefined`，这点需要注意。

::: code-group

```javascript [hook] {4}
import { useCommand } from '@kokkoro/core';

export default function Example() {
  useCommand('/复读 [message]', ctx => ctx.query.message);
}
```

```typescript [decorator] {4}
import { Command, CommandContext } from '@kokkoro/core';

export default class Example {
  @Command('/复读 [message]')
  replayMessage(ctx: CommandContext<{ message: string | null }>) {
    return ctx.query.message;
  }
}
```

:::

<ChatPanel>
  <ChatMessage :qq="2225151531" nickname="Yuki">@可可萝 /复读</ChatMessage>
  <ChatMessage :qq="2854205915" nickname="可可萝">null</ChatMessage>
</ChatPanel>

## 参数类型的自动转换
