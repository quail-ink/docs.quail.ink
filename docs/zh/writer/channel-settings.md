---
outline: deep
---

# 频道设置

Quail 支持将文章发送到不同的渠道。本文档将指导您完成设置渠道的过程。

目前，Quail 支持以下频道：Telegram 和 Discord，未来我们将添加更多频道。

## Discord 设置

Quail 还支持向 Discord 发送文章，步骤非常简单：

1. 假设您已经创建了一个 Discord 服务器，并且您有管理该服务器的权限。
2. 按照 [这个说明](https://techwiser.com/how-to-copy-discord-profile-channel-server-message-id-and-link/) 获Channel。
3. 访问 [Quail 的仪表板](https://quail.ink/dashboard)，选择要连接的列表，然后单击侧边栏的“列表设置”。
4. 您将看到“频道设置”部分，只需启用 Discord 频道并填Channel，然后单击“保存”按钮。
5. 可选：填写 **Discord 邀请 URL**，一个带有邀请 URL 的 Discord 图标将被添加到订阅表单中。

## Telegram 设置

### 创建 Telegram 频道

第二步是创建一个 Telegram 频道。您可以按照以下说明创建一个频道：

- iPhone：在聊天列表中，开始一个新消息（点击右上角的图标），然后选择“新建频道”。
- Android：在聊天列表中，点击圆形铅笔图标，然后选择“新建频道”。
- Windows Phone：在底部栏点击“+”按钮，然后选择“新建频道”。

创建完频道后，请将其设置为公开，以便所有人都能加入。公开频道将具有以下链接：`https://t.me/your_channel_name`Channel 是 `@your_channel_name`。

### 将 Quail 的机器人添加到频道

在telegram中搜索 `@QuailSenderBot`，然后以管理员身份添加到频道，并确保机器人有向频道发送消息的权限。

### 将 Quail 连接到 Telegram

剩下的步骤非常简单，只需访问 [Quail 的写作面板](https://quail.ink/dashboard)，选择要连接的列表，然后点击侧边栏的 `列表设置`。

您将看到一个 "Telegram 设置" 部分，只需填Channel，然后点击 `Verify` 按钮。

如果一切正常，新的设置将被保存。现在，所有新发布的文章也将发送到该频道。

### 番外篇 1：给频道设置讨论区

如果您想要在频道中添加一个讨论区，可以按照以下步骤操作：

1. 登录您的 Telegram 频道并打开您的频道个人资料。
2. 然后进入 "Discussion" 
3. 选择现有群组或点击“创建新群组”为您的频道创建新群组，并确认将该群组链接到您的频道。
  
完成这些步骤后，如果您的 Telegram 已更新并且 Telegram 频道上的评论已激活，您可以在该频道的文章下方看到评论部分。 此部分标记为“评论”，其中显示以下文本：“Leave a Comment”。 您可以轻松地将您的评论放在这篇文章下面。

### 番外篇 2：使用自己的 Telegram 机器人

**创建 Telegram 机器人**

第一步是创建一个 Telegram 机器人。您可以按照[官方指南](https://core.telegram.org/bots#6-botfather)创建一个机器人。

创建完机器人后，您将获得一个令牌：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `API Token`
4. 复制该令牌

请妥善保存，稍后我们将会用到。

**修改机器人配置**

下一步是将机器人添加到频道并赋予其权限。首先让我们修改机器人的设置：

1. 向 `@BotFather` 发送 `/mybots`
2. 选择刚刚创建的机器人
3. 选择 `Bot Settings`
4. 选择 `Allow Groups`
5. 选择 `Turn on`

然后您可以将机器人添加到频道，并且修改 Quail 频道设置中的机器人令牌和Channel，保存即可。

### LINE 设置

Quail 支持将文章发送到 LINE 频道。开始之前，请确保您已经在 [LINE Developer Dashboard](https://developers.line.biz/console) 创建了一个 LINE 频道。从头开始，您需要创建一个**Provider**，然后在该频道下创建一个**Messaging API Channel**。

1. 访问 [Quail 的仪表板](https://quail.ink/dashboard)，选择要连接的列表，然后单击侧边栏的“列表设置”。
2. 您将看到“频道设置”部分，只需启用 LINE 频道
3. 首次使用，您需要为频道创建一个密钥对，点击 `创建` 按钮。然后您将看到公钥。复制公钥以供下一步使用。
4. 访问 [LINE Developer Dashboard](https://developers.line.biz/console)，选择要连接的频道，找到 **Basic Settings** 下的 **Assertion Signing Key**，点击 **Register a public key** 按钮，粘贴刚刚复制的公钥，然后点击 **Register** 按钮。
5. 复制 **Assertion Signing Key** 并将其粘贴到频道设置页面。
6. 然后填写 **Channel ID** 和 **Channel Secret**。您可以在 **Basic Settings** 下找到它们。
7. 可选：填写 **Basic ID**，一个带有邀请 URL 的 LINE 图标将被添加到订阅表单中。

就是这样。现在您可以保存设置。新发布的文章也将发送到 LINE 频道。