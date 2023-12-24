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

如果你为指令添加了必填参数（&lt;arg>），当参数不匹配的时候，就会自动发送语法提示。

<ChatPanel>
  <ChatMessage qq="2225151531" nickname="Yuki">@可可萝 /复读</ChatMessage>
  <ChatMessage qq="2854205915" nickname="可可萝">缺少指令参数，有效语句为："/复读 &lt;message>"</ChatMessage>
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
  <ChatMessage qq="2225151531" nickname="Yuki">@可可萝 /复读</ChatMessage>
  <ChatMessage qq="2854205915" nickname="可可萝">null</ChatMessage>
</ChatPanel>

## 可变参数

可变参数（&lt;...args>、[...args]）会将后续的**所有内容**全部追加至数组中，这与 JavaScript 中的 [Rest 语法](https://zh.javascript.info/rest-parameters-spread) 十分相似。

`command` 针对可变参数做了严格的语法校验，与 JavaScript 一样，它们都只能放在**参数的最后面**，不然会导致插件无法被正常挂载。

::: code-group

```javascript [hook] {4}
import { useCommand } from '@kokkoro/core';

export default function Example() {
  useCommand('/来点涩图 <...tags>', ctx => ctx.query.tags);
}
```

```typescript [decorator] {4}
import { Command, CommandContext } from '@kokkoro/core';

export default class Example {
  @Command('/来点涩图 <...tags>')
  sendEroImage(ctx: CommandContext<{ tags: string[] }>) {
    return ctx.query.tags;
  }
}
```

:::

<ChatPanel>
  <ChatMessage qq="2225151531" nickname="Yuki">@可可萝 /来点涩图 贫乳 萝莉 白丝</ChatMessage>
  <ChatMessage qq="2854205915" nickname="可可萝">["贫乳", "萝莉", "白丝"]</ChatMessage>
</ChatPanel>

::: warning 不可以涩涩
这里只是为了趣味性才举了这么一个例子，你可别真的去做一个涩图插件，连指令都过不了审。~~别问我是怎么知道的~~
:::

值得注意的是，必选可变参数的非空校验依然存在，而可选可变参数在不传入任何内容的时候，其变量的值是 `[]` 空数组，而不是 `null`。

## 参数类型的自动转换
