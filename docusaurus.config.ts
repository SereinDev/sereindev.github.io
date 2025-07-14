import type * as Preset from '@docusaurus/preset-classic';
import type { Options, ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Serein',
  tagline: '一款支持多服务器统一管理、群服互通、网页远程控制、插件扩展等功能，专为游戏服务器设计的自动化管理工具',
  favicon: 'logo.png',

  url: 'https://sereindev.github.io',
  baseUrl: '/',

  organizationName: 'SereinDev',
  projectName: 'Serein',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',

  markdown: {
    format: 'detect',
    mermaid: true,
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: 'sidebars.ts',
          editUrl:
            'https://github.com/SereinDev/sereindev.github.io/edit/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

          versions: {
            current: {
              label: '2.1.0',
              noIndex: true,
            },
          },
          lastVersion: 'current',
        },

        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        autoCollapseCategories: true,
      },
    },

    announcementBar: {
      content:
        'v2.0正式版已发布✨ <a href="https://github.com/SereinDev/Serein/releases/latest">点我下载</a>',
      textColor: 'var(--ifm-color-primary-contrast-foreground)',
      backgroundColor: 'var(--ifm-background-surface-color)',
      id: '202501',
    },

    algolia: {
      appId: '9JV37DHKB8',
      apiKey: '5e34f354e8d57d9a7e97e77ef0e21a8c',
      indexName: 'sereindevio',
      contextualSearch: true,
    },

    image: 'logo.png',

    navbar: {
      hideOnScroll: true,
      title: 'Serein',
      logo: {
        alt: 'Logo',
        src: 'logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'guidance',
          label: '指南',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorial',
          label: '教程',
        },
        {
          type: 'docSidebar',
          sidebarId: 'development',
          label: '开发',
        },
        {
          type: 'docSidebar',
          sidebarId: 'more',
          label: '更多',
        },
        {
          label: '社区',
          href: 'https://sereincommunity.github.io/',
        },
        {
          type: 'docsVersionDropdown',
          label: '版本',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Serein',
          items: [
            {
              label: '仓库',
              href: 'https://github.com/SereinDev/Serein',
            },
            {
              label: '讨论区',
              href: 'https://github.com/orgs/SereinDev/discussions',
            },
            {
              label: 'Codacy',
              href: 'https://app.codacy.com/gh/SereinDev/Serein/dashboard',
            },
          ],
        },
        {
          title: '发布',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/SereinDev/Serein/releases/latest',
            },
            {
              label: 'MineBBS',
              href: 'https://www.minebbs.com/resources/serein.4169/',
            },
          ],
        },
      ],
      copyright: 'Copyright © 2022 Zaitonn. All Rights Reserved.',
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'batch',
        'csharp',
        'log',
        'http',
        'json',
        'regex',
        'typescript',
        'bash',
      ],
    } satisfies Preset.ThemeConfig,

    metadata: [
      {
        name: 'keywords',
        content: [
          '面板',
          '服务器',
          '我的世界',
          'Minecraft',
          'BDS',
          'Java',
          '基岩版',
          '开服',
          '简单',
          '易用',
        ].join(', '),
      },
    ],
  } satisfies ThemeConfig,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: ['@docusaurus/theme-mermaid'],
};

export default config;
