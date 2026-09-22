// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zhouzhou 的站点',
  tagline: '记录 · 折腾 · 随手写点东西',
  favicon: 'img/favicon.ico',

  // Production url of the site.
  // Assumed GitHub Pages project page: https://<org>.github.io/<repo>/
  // If you later bind a custom domain, set url to it and change baseUrl back to '/'.
  url: 'https://zhouzhouj.github.io',
  // For GitHub Pages deployment the baseUrl is '/<projectName>/'
  baseUrl: '/my-website/',

  // GitHub Pages deployment config.
  organizationName: 'zhouzhouj', // Usually your GitHub org/user name.
  projectName: 'my-website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // The site content is written in Chinese, so the default locale is zh-Hans.
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // "Edit this page" links point to this repository.
          editUrl: 'https://github.com/zhouzhouj/my-website/tree/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/zhouzhouj/my-website/tree/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'zhouzhou',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {
            type: 'docSidebar',
            sidebarId: 'LifeSidebar',
            position: 'left',
            label: 'Life',
          },
          {
            type: 'docSidebar',
            sidebarId: 'dddSidebar',
            position: 'left',
            label: 'ddd',
          },
          {
            to: '/blog',
            label: 'Blog',
            position: 'left',
          },
          {
            href: 'https://github.com/zhouzhouj/my-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/tutorial/intro',
              },
              {
                label: 'Life',
                to: '/docs/Life/intro',
              },
              {
                label: 'ddd',
                to: '/docs/ddd/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/zhouzhouj/my-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} zhouzhou. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
