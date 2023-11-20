---
outline: deep
---

# Markdown Syntax

## Basic Syntax

Quail uses GitHub Flavored Markdown Spec as the basic syntax for writing posts. Please refer to the [GFM spec](https://github.github.com/gfm/) for more details.

The [syntax guide](https://www.markdownguide.org/basic-syntax/) of Markdown Guide is also a good reference.

## Extended Syntax

Some syntaxes are not supported by GFM, but are supported by Quail, they are listed below. You can also check out the [live demo](https://quail.ink/blog/p/extended-markdown-syntax)

> Most of following syntax are currently rendered in the web browser only, and cannot be displayed in Email.


### Equations and Diagrams

**Equations**

Quail uses [MathJax](https://www.mathjax.org/) to render equations and formulas. This is useful for writing scientific and engineering articles (please enable "Enable MathJax" at the post options), for example:

```
$$
\int f(x)dx \\
\int_1^\infty \frac{1}{x^2}dx
$$
```


**Mermaid Diagrams**

Quail uses [mermaid.js](https://mermaid.js.org//) to render diagrams, which is also a great tool for writing scientific and engineering articles.

The syntax is as follows:

```mermaid
sequenceDiagram
    Alice->>John: Hello John, how are you?
    John-->>Alice: Great!
    Alice-)John: See you later!
```

## Embeded Video and Object

3rd-party video link and object can be embedded in Quail posts. Currently, Quail supports the following video and object providers:

- YouTube
- Bilbili
- X.com (formerly Twitter)
- TradingView
- Quail's List and Post

The embeded video and object syntax is the same as the one used for images:

```markdown
![](https://youtu.be/dQw4w9WgXcQ?si=0kalBBLQpIXT1Wcd)

![](https://www.bilibili.com/video/BV1uT4y1P7CX)

![](https://twitter.com/NASA/status/1704954156149084293)

![](https://www.tradingview.com/chart/AA0aBB8c/?symbol=BITFINEX%3ABTCUSD)

![](https://quail.ink/blog)

![](https://quail.ink/blog/p/quail-weekly-19)
```

## Fence Blocks

The fence block syntax can be used to create a stylised block of text. The syntax starts with `:::` and ends with `:::`. 

The first line of the block is the type and title of the block, and the rest of the block is the content.

The predefined block types are: `info`, `tip`, `warning`, `danger`, `info`

Here is some examples:

```markdown
:::info
This is a block of information, usually used to inform readers of some extra information. For example: grapes are a kind of fruit that can be eaten.
:::

:::tip
This is a tip, usually used to tell readers some tips. For example: you can eat grapes without spitting out the skin.
:::

:::warning
This is a warning, usually used to warn readers. For example: if you don't chew grapes, you may choke, please pay attention to the grapes in your mouth.
:::

:::danger
This is a danger message, usually used to emphasize dangerous operations. For example: choking on grapes can lead to death, please be careful!
:::
```

Writer can also offer a title for the block:

```markdown
:::danger Serious Announcement
The grapes are innocent, please do not ban the planting of grapes because eating grapes can lead to death.
:::
```

## Footnotes 

Quail supports [PHP Markdown Extra](https://michelf.ca/projects/php-markdown/extra/#footnotes) style footnotes. Each footnote consists of two parts: a marker in the text that will become a superscript number `[^N]`, and the footnote itself that will appear at the bottom of the document.

The footnote marker in the text can be placed anywhere in the document, but the footnote itself will always appear at the bottom of the document.

Here is an example:

```markdown
"The road to hell is paved with good intentions" is a proverb or aphorism. 
An alternative form is "Hell is full of good meanings, but heaven is full of good works".[^1] 

The exact origin of this proverb is unknown and several variations exist. 
It appeared in full in a London newspaper in 1828 where it was referred to as a Portuguese proverb.[^2] 
It was also published in Henry G. Bohn's A Hand-book of Proverbs in 1855.[^3] 

...

[^1]: "the road to Hell is paved with good intentions", Proverbs, Infobase Publishing, 2007, p. 234, ISBN 9780816066735
[^2]: "2 Nov 1828, 1 - The Weekly Dispatch at Newspapers.com". Newspapers.com. Retrieved 2022-04-11.
[^3]: Bohn, Henry (1855), A Hand-book of Proverbs
```
