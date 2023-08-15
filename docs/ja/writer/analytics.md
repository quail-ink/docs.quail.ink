---
outline: deep
---

# 分析

## 組み込み分析

クエイルは、手間なしで使用できるシンプルな組み込み分析を提供します。これを使用するために何も設定する必要はありません。

各投稿の分析指標には以下が含まれます：

1. ページビュー：投稿が表示された回数（ウェブページとメールを含む）。
2. 投稿の閲覧回数：投稿が読まれた回数。ユーザーが投稿に10秒以上滞在すると、投稿は読まれたと見なされます。
3. メールでの読解回数：メールで投稿が読まれた回数。この指標は、メール経由で投稿を送信する場合にのみ利用可能です。

## サードパーティ分析

クエイルは、サードパーティの分析サービス[Umami.is](https://umami.is/)および[Google Analytics](https://analytics.google.com/)をサポートしています。

### Umami.is

Umamiは、Google Analyticsのプライバシーに重点を置いたオープンソースの代替手段です。

現時点では、Quailはクラウドバージョンのみをサポートしています。[Umami.is](https://umami.is/)でアカウントにサインアップし、クエイルの分析設定で `Website ID` を入力できます。

### Google Analytics

Google Analyticsは、人気のある分析サービスです。Umamiと同様に、[Google Analytics](https://analytics.google.com/)でアカウントにサインアップし、クエイルの分析設定で `Measurement Id` を入力する必要があります。