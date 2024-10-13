import type * as Preset from '@docusaurus/preset-classic';
import type { Options, ThemeConfig } from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Serein',
  tagline: '一个简约、多功能、高度自定义的服务器管理面板软件',
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
              label: '2.0',
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

    imageZoom: {
      options: {
        margin: 50,
        background: 'var(--ifm-background-surface-color)',
      },
    },

    announcementBar: {
      content: '🚧此文档尚未完工🚧',
      textColor: 'var(--ifm-color-primary-contrast-foreground)',
      backgroundColor: 'var(--ifm-background-surface-color)',
      id: '20240331',
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
              to: 'https://github.com/SereinDev/Serein',
            },
          ],
        },
        {
          title: '发布',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/SereinDev/Serein/releases/latest',
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
      ],
    } satisfies Preset.ThemeConfig,

    metadata: [
      {
        name: 'keywords',
        content:
          '面板, 服务器, 我的世界, Minecraft, BDS, Java, 基岩版, 开服, 机器人, 简单, 易用',
      },
    ],
  } satisfies ThemeConfig,

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en', 'zh'],
      },
    ],
  ],

  plugins: ['plugin-image-zoom'],
};

export default config;
