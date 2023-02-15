# API

你可以在项目的 `.env` 文件内新增 `KOKKORO_API_KEY` 变量来控制部分 API 的鉴权。配置后 API 请求参数需要携带 `api_key`，例如 bot 的消息发送。

## Bot API

### 获取 bot 列表

get /bot/list

### 账号登录

post /bot/login

```typescript
interface Params {
  // 账号
  uin: number;
}
```

### 账号登出

post /bot/logout

```typescript
interface Params {
  // 账号
  uin: number;
}
```

### 获取扫码结果

post /bot/query-qrcode-result

```typescript
interface Params {
  // 账号
  uin: number;
}
```

### 获取好友列表

post /bot/get-friend-list

```typescript
interface Params {
  // API key
  api_key?: string;
  // 账号
  uin: number;
}
```

### 获取群列表

post /bot/get-group-list

```typescript
interface Params {
  // API key
  api_key?: string;
  // 账号
  uin: number;
}
```

### 私发消息

post /bot/send-private-msg

```typescript
interface Params {
  // API key
  api_key?: string;
  // 账号
  uin: number;
  // 好友账号
  user_id: number;
  // 消息
  message: string;
  // 是否引用
  source: boolean;
}
```

### 群发消息

post /bot/send-group-msg

```typescript
interface Params {
  // API key
  api_key?: string;
  // 账号
  uin: number;
  // 群号
  group_id: number;
  // 消息
  message: string;
  // 是否引用
  source: boolean;
}
```

## Config API

### 获取 kokkoro.json 配置项

get /config/kokkoro

## Plugin API

### 获取插件列表

get /plugin/list

## User API

### 获取用户列表

get /user/list

### 用户登录

post /user/login

```typescript
interface Params {
  // 账号
  account: string;
  // 密码
  password: string;
}
```

### 用户注册

post /user/register

```typescript
interface Params {
  // 账号
  account: string;
  // 密码
  password: string;
}
```

### 用户信息修改

需要携带 token

put /user/modify

```typescript
interface Params {
  // 账号
  account: string;
  // 密码
  password: string;
}
```

### 用户删除

需要携带 token

delete /user/remove

```typescript
interface Params {
  // 账号
  account: string;
}
```
