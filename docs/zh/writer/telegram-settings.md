---
outline: deep
---

# Telegram 设置

## 准备工作

在将 Quail 连接到 Telegram 前，我们需要准备一些东西。

### 创建 Telegram 机器人

第一步是创建一个 Telegram 机器人。您可以按照[官方指南](https://core.telegram.org/bots#6-botfather)创建一个机器人。

创建完机器人后，您将获得一个令牌：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `API Token`
4. 复制该令牌

请妥善保存，稍后我们将会用到。

### 创建 Telegram 频道

第二步是创建一个 Telegram 频道。您可以按照以下说明创建一个频道：

- iPhone：在聊天列表中，开始一个新消息（点击右上角的图标），然后选择“新建频道”。
- Android：在聊天列表中，点击圆形铅笔图标，然后选择“新建频道”。
- Windows Phone：在底部栏点击“+”按钮，然后选择“新建频道”。

创建完频道后，请将其设置为公开，以便所有人都能加入。公开频道将具有以下链接：`https://t.me/your_channel_name`。频道 ID 是 `@your_channel_name`。

### 将机器人添加到频道

下一步是将机器人添加到频道并赋予其权限。首先让我们修改机器人的设置：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `Bot Settings`
4. 选择 `Allow Groups`
5. 选择 `Turn on`

然后您可以将机器人添加到频道：

1. 进入频道
2. 点击频道名称，然后点击 `Administrators`
3. 点击 `Add Administrator`
4. 搜索机器人名称，然后点击它

现在您可以通过机器人向频道发送消息。

## 将 Quail 连接到 Telegram

剩下的步骤非常简单，只需访问 [Quail 的写作面板](https://quail.ink/dashboard)，选择要连接的列表，然后点击侧边栏的 `列表设置`。

您将看到一个 "Telegram 设置" 部分，只需填写令牌和频道 ID，然后点击 `Verify` 按钮。

如果一切正常，新的设置将被保存。现在，所有新发布的文章也将发送到该频道。

