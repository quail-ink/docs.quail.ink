---
outline: deep
---

# Channel Settings

Quail supports to deliver posts to different channels. This document will guide you through the process of setting up channels. 

At present, Quail supports the following channels: Telegram, Discord, LINE. We will add more channels in the future.

## Discord Settings

Quail Supports sending posts to Discord. Please read [this weekly post](https://quail.ink/blog/p/how-to-integrate-discord-with-your-newsletter-by-quail) to learn how to set up Discord.

## Telegram Settings

### Create a telegram channel

The 1st step is to create a telegram channel. You can follow the the instructions below to create a channel:

- iPhone: Start a new message (tap the icon in the top-right corner in Chats). Then ‘New Channel’.
- Android: Tap the circular pencil icon in the chat list. Then ‘New Channel’.
- Windows Phone: Tap the ‘+’ button on the bottom bar. Then ‘New Channel’.

After you create the channel, please make it public so that everyone can join it. The public channel will have a link like this: `https://t.me/your_channel_name`. The channel id is `@your_channel_name`.

### Add Quail's bot to the channel

Search `@QuailSenderBot` in telegram, then add it to the channel as administrator. Make sure the bot has the permission to send messages to the channel.

### Connect Quail to telegram

The remaining steps are very simple, just visit [Quail's writer dashboard](https://quail.ink/dashboard), select the list you want to connect, and then click the `List Settings` at the sidebar.

You will see a "Channel Settings" section, just enable Telegram channel and fill in the channel id, then click the `Save` button.

If everything is ok, the new settings will be saved. Now all new deliveried posts will be sent to the channel too.

### Additional Topic 1: Set up a discussion for the channel

If you want to add a discussion board to your channel, you can follow these steps:

1. Log in to your Telegram channel and open your channel profile. 
2. Then enter the Discussion section. 
3. Select a existing group or click "Create a New Group" to create a new group for your channel, and confirm to link the group to your channel.
  
After these steps, if your telegram has been updated and commenting on the Telegram channel is activated, you can see the comment section below the posts of that channel. This section is labeled Comments, and this text appears in it: "Leave a Comment". You can easily put your comments below this post. 

### Additional Topic 2: Use your own bot

Quail also supports using your own bot to send messages to the channel.

**Create a telegram bot**

The first step is to create a telegram bot. You can follow the [official guide](https://core.telegram.org/bots#6-botfather) to create a bot.

After you create the bot, you will get a token:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `API Token`
4. copy the token

Please keep it safe, we will use it later.

**Change the bot settings**

The next step is to add the bot to the channel and give it permissions. Let's modify the bot settings first:

1. send `/mybots` to `@BotFather`
2. select the bot you just created
3. select `Bot Settings`
4. select `Allow Groups`
5. select `Turn on`

Then you can add the bot to the channel, and fill in the token and channel id in the channel settings page.

## LINE Settings

Quail supports sending posts to LINE Channel. Before you start, please make sure you have already created a LINE Channel at [LINE Developer Dashboard](https://developers.line.biz/console). Begin from stratch, you need to create a **Provider**, then create a **Messaging API Channel** under the channel.

1. Visit [Quail's dashboard](https://quail.ink/dashboard), select the list you want to connect, and then click the `List Settings` at the sidebar.
2. You will see a "Channel Settings" section, just enable LINE channel
3. For the first time, you need to create a key pair for the channel, click the `Create` button. Then you will see the public key. Copy the public key for next step.
4. Visit [LINE Developer Dashboard](https://developers.line.biz/console), select the channel you want to connect, find **Assertion Signing Key** under **Basic Settings**, click **Register a public key** button, paste the public key you just copied, then click **Register** button.
5. Copy the **Assertion Signing Key** and paste it to the channel settings page.
6. Then fill in the **Channel ID** and **Channel Secret**. You can find them under **Basic Settings**.
7. Optional: fill in the **Basic ID**, an LINE icon with invite URL will be added to the subscribe form. You can find it under **Messaging API Settings**.

That's all. Now you can save the settings. The new deliveried posts will be sent to the LINE channel too.
