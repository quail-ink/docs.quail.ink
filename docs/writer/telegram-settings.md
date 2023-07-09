---
outline: deep
---

# Telegram Settings

**[Quail](https://quail.ink "Quail Official Website")** can deliver posts to telegram channels. This document will guide you through the process of setting up telegram channels.

## Preparation

We need to prepare a few things before we can connect Quail to telegram.

### Create a telegram bot

The first step is to create a telegram bot. You can follow the [official guide](https://core.telegram.org/bots#6-botfather) to create a bot.

After you create the bot, you will get a token:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `API Token`
4. copy the token

Please keep it safe, we will use it later.

### Create a telegram channel

The second step is to create a telegram channel. You can follow the the instructions below to create a channel:

- iPhone: Start a new message (tap the icon in the top-right corner in Chats). Then ‘New Channel’.
- Android: Tap the circular pencil icon in the chat list. Then ‘New Channel’.
- Windows Phone: Tap the ‘+’ button on the bottom bar. Then ‘New Channel’.

After you create the channel, please make it public so that everyone can join it. The public channel will have a link like this: `https://t.me/your_channel_name`. The channel id is `@your_channel_name`.

### Add the bot to the channel

The next step is to add the bot to the channel and give it permissions. Let's modify the bot settings first:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `Bot Settings`
4. select `Allow Groups`
5. select `Turn on`

Then you can add the bot to the channel:

1. enter the channel
2. tap the channel name, then tap `Administrators`
3. tap `Add Administator`
4. search the bot name, then tap it

Now you can send messages to the channel via the bot.

## Connect Quail to telegram

The remaining steps are very simple, just visit [Quail's writer dashboard](https://quail.ink/dashboard), select the list you want to connect, and then click the `List Settings` at the sidebar.

You will see a "Telegram Settings" section, just fill in the token and channel id, then click the `Verify` button.

If everything is ok, the new settings will be saved. Now all new deliveried posts will be sent to the channel too.

