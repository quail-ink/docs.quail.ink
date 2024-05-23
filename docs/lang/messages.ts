export const messages = {
  "en": {
    "home": "Home",
    "tutorial": "Tutorial",
    "writer_manual": "Writer",
    "compose_and_deliver": "Compose and Deliver",
    "compose_online": "Compose Online" ,
    "email_settings": "Email Settings" ,
    "list_settings": "List Settings" ,
    "payment_settings": "Payment Settings" ,
    "channel_settings": "Channel Settings" ,
    "domain_settings": "Domain Settings" ,
    "widget_settings": "Widget Settings" ,
    "markdown_syntax": "Markdown Syntax",
    "migration": "Migration",
    "other_topics": "Other Topics",
    "faq": "FAQ",
    "troubleshooting": "Troubleshooting",
    "plugins": "Plugins",
    "obsidian_plugin": "Obsidian Plugin",
    "ai": "AI features",
  },
  "zh": {
    "home": "首页",
    "tutorial": "教程",
    "writer_manual": "作者手册",
    "compose_and_deliver": "撰写与推送",
    "compose_online": "在线撰写" ,
    "email_settings": "邮件设置" ,
    "list_settings": "列表设置" ,
    "payment_settings": "支付设置" ,
    "channel_settings": "频道设置" ,
    "domain_settings": "域名设置" ,
    "widget_settings": "Widget 设置" ,
    "markdown_syntax": "Markdown 语法",
    "migration": "迁移",
    "other_topics": "其他主题",
    "faq": "常见问题",
    "troubleshooting": "故障排除",
    "plugins": "插件",
    "obsidian_plugin": "Obsidian 插件",
    "ai": "AI 功能",
  },
}

export const t = (lang, key: string) => {
  if (lang === '') lang = 'en'
  return messages[lang][key] || messages["en"][key];
}
