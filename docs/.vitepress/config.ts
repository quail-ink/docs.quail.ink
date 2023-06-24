import { defineConfig } from 'vitepress'
import { t } from "../lang/messages"

const genNav = () => {
  // @TODO: support multi-language
  let ret:any = [];
  for (const lang of ['en']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret = [
      { text: t(lang, 'home'), link: '/' },
      { text: t(lang, "writer_manual"), link: `${prefix}/writer-manual/index` }
    ]
  }
  return ret;
}

const genI18nSidebar = () => {
  const ret = {};
  for (const lang of ['en', 'zh', 'ja']) {
    const prefix = lang === 'en' ? '' : '/' + lang;
    ret[`${prefix}/manual/`] = [
      {
        text: t(lang, 'references'),
        items: [
          { text: t(lang, 'essential'), link: `${prefix}/writer-manual/essential` },
        ]
      },
    ]
  }
  return ret;
}

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
    // logo: { light: '/logo-with-text.svg', dark: 'logo-with-text-dark.svg', alt: 'Pando Proto' },
    siteTitle: "Quail Doc",

    // editLink: {
    //   pattern: 'https://github.com/pandodao/docs.pando.im/edit/master/docs/:path'
    // },

    // https://vitepress.dev/reference/default-theme-config
    nav: genNav(),

    sidebar: genI18nSidebar(),

    socialLinks: [
      { icon: 'github', link: 'https://github.com/pandodao/docs.pando.im' }
    ],

    footer: {
      copyright: 'Copyright © present <a href="https://quail.ink" title="A newsletter service">Quail.ink</a>',
    }
  }
})
