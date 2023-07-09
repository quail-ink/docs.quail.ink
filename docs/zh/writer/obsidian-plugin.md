---
outline: deep
---

# Obsidian 插件

**[Quail](https://quail.ink "Quail Official Website")** 提供了一个 [Obsidian](https://obsidian.md/) 插件，可以在 Obsidian 中使用 Quail 的发布、取消发布、推送文章等功能。

配合 Obsidian 提供的强大的 Markdown 编辑功能，Quail 的 Obsidian 插件可以帮助您更好地管理您的文章。

## 获得 API KEY

Quail 的 Obsidian 插件需要使用 API KEY 来访问 Quail 的 API。请通过以下步骤获得 API KEY：

1. 登录到 Quail：https://quail.ink/login
2. 访问「[个人资料 - API 密钥](https://quail.ink/profile/apikeys)」 页面。
3. 点击「新建」按钮，输入 API 密钥名称，点击「创建」按钮
4. 在 API 密钥列表中会出现新创建的 API 密钥，点击「复制」按钮，将 API 密钥复制到剪贴板中。

请将 API 密钥保存在安全的地方，不要泄露给其他人，稍后我们将使用这个 API 密钥来配置 Obsidian 插件。

## 安装插件

目前，Quail 的 Obsidian 插件还不能在 Obsidian 的插件商店中找到，您需要手动安装插件。安装方式请参考[插件首页](https://github.com/lyricat/obsidian-quail)。

## 配置插件

在安装好插件后，您需要配置插件，才能使用插件提供的功能。

1. 首先打开 Obsidian 的设置页面，然后点击「社区插件」选项卡，找到 Quail 插件，点击「设置」按钮。
2. 在「Quail API Key」中输入刚才获得的 API 密钥
3. 在「List ID or slug」中输入您的列表 slug。例如，如果您的列表 URL 为 `https://quail.ink/smith`，则您的列表 slug 为 `smith`。
4. 其他设置保持默认即可

重启 Obsidian，插件即可生效。

## 撰写文章

您可以如同往常一样，在 Obsidian 中撰写文章。当您完成文章撰写后，您可以使用 Quail 的 Obsidian 插件来发布文章。

在发布之前，需要先按照 Quail 的要求生成一些文章的摘要

## 生成摘要等元信息

Quail 提供了 AI 生成文章摘要的功能，您可以使用 Quail 的 Obsidian 插件来调用这个功能。使用方法如下：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quail，选择「Quail: Generate Metadata」命令，按回车键
3. 稍等片刻，Quail 将会自动为您生成文章的摘要、标签等元信息，并且以 [frontmatter](https://jekyllrb.com/docs/front-matter/) 的形式插入到文章的开头。

您可以在文章的开头看到类似下面的内容：

```yaml
---
slug: "文章的 slug"
datetime: 2021-08-01T00:00:00+08:00
summary: "文章摘要"
tags: "标签1, 标签2"
cover: "文章封面图片的 URL"
---
```

其中，

- `slug` 是文章的 slug，Quail 会根据这个 slug 来生成文章的 URL。这个 slug 是整个列表唯一的，一般应该是文章标题的英文单词组合。如果您不希望使用这个 slug，可以手动修改。
- `datetime` 是文章的发布时间。
- `summary` 是文章的摘要，您也可以手动修改。
- `tags` 是文章的标签，您也可以手动修改。
- `cover` 是文章的封面图片 URL，您也可以手动修改，但是修改时请注意：
  1. 封面图片必须是一个公开的图片，或者，
  2. 封面图片必须是您的 Obsidian 中的图片，且使用绝对定位路径。请参考下文的「插入图片」一节。

::: tip
您也可以不使用 AI 生成的摘要，而是手动输入摘要。

如果您不需要使用 AI 生成的摘要，可以选择「Quail: Insert Metadata Template」命令，Obsidian 将会自动插入一个元信息模板，然后在其中手动输入信息。
::: 

## 保存文章

当您完成文章的撰写、生成摘要等元信息后，您可以使用 Quail 的 Obsidian 插件来保存文章：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quail，选择「Quail: Save」命令，按回车键
3. 稍等片刻，Quail 将会自动将文章保存到 Quail 中。

如果您此时登录到 Quail，就可以在「[文章列表](https://quail.ink/dashboard)」看到您刚才保存的文章了。

## 发布文章

发布文章将会把一篇文章从「草稿」状态变为「发布」状态，这样，您的文章就可以被大家看到了：

1. 按快捷键 `Ctrl + P`，打开 Obsidian 的命令面板（如果是 macOS 用户，请使用 `Cmd + P`）
2. 输入 Quail，选择「Quail: Publish」命令，按回车键
3. 稍等片刻，Quail 将会自动将文章发布到 Quail 中，并且弹出文章的访问地址
4. 您可以点击弹出的地址，查看您的文章

## 取消发布

取消发布将会把一篇文章从「发布」状态变为「草稿」状态，这样，您的文章就不会被大家看到了。

具体的操作和发布文章类似，只是在第 2 步中选择「Quail: Unpublish」命令即可。

## 推送文章

推送文章将会把一篇文章通过邮件推送给你的订阅者。如果您为列表设置了 Telegram 机器人，那么推送文章的同时，机器人也会自动推送文章到您的 Telegram 频道。

具体的操作和发布文章类似，只是在第 2 步中选择「Quail: Deliver」命令即可。

## 插入图片

如果您文章中的图片来自本地 Obsidian，Quail 的 Obsidian 插件能够读取它们并且在保存、发布文章时自动上传到 Quail。但是这需要满足两个要求：

1. 在文章中插入您的图片时，使用 Markdown 的图片语法，而不是 Obsidian 的内部链接语法。
2. 图片使用绝对定位路径。

下面是一个示例。

假如您的 Obsidian 目录结构如下：

```
- [essay]
  - [images]
    - image-1.png
    - image-2.png
  - [articles]
    - test
```

其中，essay、images、articles 都是文件夹，image-1.png 和 image-2.png 是图片文件，test 是文章文件。

如果希望在 test 中插入图片 image-1.png，您需要使用以下经典语法：

```markdown
![image-1](/essay/images/image-1.png)
```

而不是 Obsidian 语法：

```markdown
![[image-1]]
```

请注意，这里的 `/essay/images/image-1.png` 是绝对定位路径（即从最上层的文件夹开始），而不是相对定位路径。如果您使用相对定位路径，Quail 的 Obsidian 插件将无法找到图片文件。

---

以上就是 Quail 的 Obsidian 插件的使用方法。如果您有任何问题，欢迎在 [GitHub Issue](https://github.com/lyricat/obsidian-quail/issues) 中提出。


