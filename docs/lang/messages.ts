export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "writer_manual": "Writer",
    "email_settings": "Email Settings" ,
    "list_settings": "List Settings" ,
    "payment_settings": "Payment Settings" ,
    "telegram_settings": "Telegram Settings" ,
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
    "plugins": "Plugins",
    "obsidian_plugin": "Obsidian Plugin",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "writer_manual": "作者手册",
    "email_settings": "邮件设置" ,
    "list_settings": "列表设置" ,
    "payment_settings": "支付设置" ,
    "telegram_settings": "Telegram 设置" ,
    "faq": "常见问题",
    "troubleshooting": "故障排除",
    "plugins": "插件",
    "obsidian_plugin": "Obsidian 插件",
  },
  "ja": {
    "home": "ホーム",
    "tutorial": "チュートリアル",
    "writer_manual": "作者マニュアル",
    "email_settings": "メール設定" ,
    "list_settings": "リスト設定" ,
    "payment_settings": "支払い設定" ,
    "telegram_settings": "Telegram設定" ,
    "faq": "よくある質問",
    "troubleshooting": "トラブルシューティング",
    "plugins": "プラグイン",
    "obsidian_plugin": "Obsidian プラグイン",
  }
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
