export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "writer_manual": "Writer",
    "list_settings": "List Settings" ,
    "payment_settings": "Payment Settings" ,
    "telegram_settings": "Telegram Settings" ,
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "writer_manual": "作者手册",
    "list_settings": "列表设置" ,
    "payment_settings": "支付设置" ,
    "telegram_settings": "Telegram 设置" ,
    "faq": "常见问题",
    "troubleshooting": "故障排除",
  },
  "ja": {
    "home": "ホーム",
    "tutorial": "チュートリアル",
    "writer_manual": "作者マニュアル",
    "list_settings": "リスト設定" ,
    "payment_settings": "支払い設定" ,
    "telegram_settings": "Telegram設定" ,
    "faq": "よくある質問",
    "troubleshooting": "トラブルシューティング",
  }
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
