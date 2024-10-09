// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

function getSiteTagline() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "ja": return "Tomo の ゲーム開発記、GB Studio チュートリアル、プラグイン、リソース";
    default: return "Tomo\'s Game Dev, GB Studio Tutorial, Plugins and Resources";
  }
}

function getSiteTitle() {
  switch(process.env.DOCUSAURUS_CURRENT_LOCALE) {
    case "ja": return "ドットン博士とビットンのゲーム開発ラボ";
    default: return "Dr. Dotton & Bitton's Game Dev Lab";
  }
}

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: getSiteTitle(),
  tagline: getSiteTagline(),
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://tomo666.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/gamedevlab/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tomo666', // Usually your GitHub org/user name.
  projectName: 'gamedevlab', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ja'],
    path: 'i18n',
    localeConfigs: {
      en: {
        label: "English",
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      ja: {
        label: "日本語",
        direction: 'ltr',
        htmlLang: 'ja-JP',
        calendar: 'gregory',
        path: 'ja',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/', // Serve the docs at the site's root
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
        /*
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        */
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  /* Enable Image Zoom plugin: https://www.npmjs.com/package/docusaurus-plugin-image-zoom*/
  plugins: [
    'docusaurus-plugin-image-zoom',
    ['@docusaurus/plugin-google-gtag',
    {
      trackingID: 'G-SVYT50VSNN',
      anonymizeIP: true,
    }],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    (
      {
      /*
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },*/
      // Replace with your project's social card
      //image: 'img/docusaurus-social-card.jpg',
      navbar: {
        style: 'dark',
        title: 'Game Dev Lab',
        logo: {
          alt: 'Logo',
          src: 'img/Mugcup_x2.png',
        },
        items: [
          {
            type: 'dropdown',
            label: 'GB Studio',
            position: 'left',
            items: [
              {
                type: 'docSidebar',
                sidebarId: 'gbsTutorialsSidebar',
                label: 'Tutorials (Japanese)',
              },
              {
                type: 'docSidebar',
                sidebarId: 'gbsPluginsSidebar',
                label: 'Custom Plugins',
              },
            ]
          },
          /*
          {
            type: 'docSidebar',
            sidebarId: 'gbsPluginsSidebar',
            label: 'Custom Plugins',
            position: 'left',
          },*/
          //{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://twitter.com/indiegdevstdio',
            label: 'Twitter X',
            position: 'right',
          },
          {
            href: 'https://github.com/tomo666/gb-studio-xv-plugins',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'GBS Tutorials (Japanese)',
                to: '/gbs_tutorials/intro',
              },
              {
                label: 'GBS Custom Plugins',
                to: '/gbs_plugins/intro',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              {
                label: 'Twitter (tomo@indiegdevstdio)',
                href: 'https://twitter.com/indiegdevstdio',
              },
              {
                label: 'GitHub (tomo666)',
                href: 'https://github.com/tomo666',
              },
            ],
          },
          {
            title: 'About',
            items: [
              {
                label: 'Privacy Policy',
                to: '/about/privacy',
              },
              {
                label: 'Copyright Notice',
                to: '/about/copyright',
              },
            ],
          },
          /*
          {
            title: 'Resources',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'Links',
            items: [
              //{
              //  label: 'Blog',
              //  to: '/blog',
              //},
              {
                label: 'Twitter (tomo@indiegdevstdio)',
                href: 'https://twitter.com/indiegdevstdio',
              },
              {
                label: 'GitHub (tomo666)',
                href: 'https://github.com/tomo666',
              },
            ],
          },
          */
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tomo@indiegdevstdio.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown img.zoomImg',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      },
    }
  ),
};

export default config;
