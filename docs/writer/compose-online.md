---
outline: deep
---

# Writing Articles Online

> This document explains how to use Quail's online editor to write articles. If you use Markdown editors like Obsidian, you can refer to the "[Obsidian Plugin](./obsidian-plugin.md)".

## Article Title and Alias

The article title refers to the title of the article, which will be displayed in the title bar of the article page. The article alias is a unique identifier for the article and will be displayed in the URL of the article page. Generally, the article alias is the English translation of the article title or the pinyin of the article title.

For example:

- Article Title: "Introduction to Quail: Understanding Quail in Five Minutes"
- Article Alias: "quail-introduction-five-minutes-to-understand-quail"

Quail provides a feature to automatically generate article aliases. You can click the "AI Guess" magic wand button on the right side of the article alias input box, and Quail will automatically generate an article alias based on the article title.

## Article Cover, Summary, and Tags

The article cover is the featured image of the article, which will be displayed at the top of the article page and in the article list.

Authors can upload their own article covers or use the free images provided by Unsplash. If you use images from Unsplash, please follow the steps below:

1. Click the "Unsplash" button on the right side of the cover image.
2. Enter keywords in the pop-up box to search for images.
3. Select the desired image and click the "Select" button.
4. The image will be automatically inserted into the article, and Quail will automatically add the image source and author information for you.

The article summary is a brief introduction of the article, which will be displayed in the article list and in feeds and search engines. The article tags are labels associated with the article, which will be displayed on the article detail page.

Quail provides an AI feature to extract article summaries and tags. You can click the "AI Guess Metadata" option in the dropdown menu at the top right corner, and Quail will automatically extract article summaries and tags based on the article content.

## Article Content

### Markdown Syntax

Quail uses [Markdown syntax](https://www.markdownguide.org/basic-syntax/) to write articles. Markdown is a lightweight markup language that allows authors to focus on content rather than formatting.

If you are not familiar with Markdown syntax, Quail provides a quick reference for Markdown syntax within the online article editor. You can click the "?" button in the top right corner of the editor to view it.

### Inserting Images

Similar to the article cover, authors can choose to upload their own images or use the free images provided by Unsplash. The toolbar buttons have the same functionality as the article cover, so we won't go into detail here.

### Inserting Videos

Quail currently does not support uploading video files directly, but you can insert videos from third-party video platforms. Currently, Quail supports YouTube and Bilibili.

Here's how you can do it:

1. Open the YouTube or Bilibili video page.
2. Select the "Share" option and copy the URL of the video.
3. Paste the URL on a separate line in the editor.

After publishing the article, Quail will automatically convert the video link into a video player.

### Inserting Members-Only Content (Paid)

Quail allows inserting a paywall in the article. After inserting the paywall, the content before the paywall is free, and the content after the paywall is only readable by premium members.

Here's how you can do it:

1. Write the article and move the cursor to the position where you want to insert the paywall.
2. Click the "Insert Paywall" button (a Spock gesture) in the editor toolbar.
3. The paywall tag `<!--paywall-->` will appear in the editor.

After publishing the article, Quail will enable the paywall for that article.