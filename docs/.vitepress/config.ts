import { defineConfig } from 'vitepress'
import { t } from "../lang/messages"

const genNav = () => {
  // @TODO: support multi-language
  let ret:any = [];
  for (const lang of ['en']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret = [
      { text: t(lang, 'home'), link: '/' },
      { text: t(lang, "writer_manual"), link: `${prefix}/writer/index` }
    ]
  }
  return ret;
}

const genI18nSidebar = () => {
  const ret = {};
  for (const lang of ['en', 'zh', 'ja']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret[`${prefix}/writer/`] = [
      {
        text: t(lang, 'list_settings'),
        items: [
          { text: t(lang, 'payment_settings'), link: `${prefix}/writer/payment-settings` },
          { text: t(lang, 'telegram_settings'), link: `${prefix}/writer/telegram-settings` },
        ]
      },
      {
        text: t(lang, 'plugins'),
        items: [
          { text: t(lang, 'obsidian_plugin'), link: `${prefix}/writer/obsidian-plugin` },
        ]
      },
    ]
  }
  return ret;
}

const year = new Date().getFullYear();

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "Quail.ink Documentation",
  description: "The official documentation for Quail.ink",
  appearance: false,

  locales: {
    root: {
      label: 'English',
      lang: 'en'
    },
    zh: {
      label: '简体中文',
      lang: 'zh',
    },
    ja: {
      label: '日本語',
      lang: 'ja',
    }
  },

  themeConfig: {
    logo: { light: '/logo-with-text.svg', dark: 'logo-with-text-dark.svg', alt: 'Quail' },

    siteTitle: false,
    // https://vitepress.dev/reference/default-theme-config
    nav: genNav(),

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lyricat/docs.quail.ink' }
    ],

    footer: {
      copyright: `©${year} <a href="https://quail.ink" title="A newsletter service">Quail.ink</a>`,
    }
  }
})