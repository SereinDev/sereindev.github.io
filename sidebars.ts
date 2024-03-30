import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  development: [
    {
      type: 'category',
      label: '插件开发',
      collapsible: false,
      items: ['index'],
    },
  ],

  guidance: [
    {
      type: 'category',
      label: '指南',
      collapsible: false,
      items: ['index'],
    },
  ],

  tutorial: ['index'],

  version: [
    {
      type: 'category',
      label: '版本记录',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'version/category',
      },
      items: [
        'version/v1.3.5',
        'version/v1.3.4.1',
        'version/v1.3.4',
        'version/v1.3.3',
        'version/v1.3.2.1',
        'version/v1.3.2',
        'version/v1.3.1',
        {
          type: 'link',
          href: 'https://github.com/Zaitonn/Serein/releases',
          label: '远古版本',
        },
      ],
    },
  ],
};

export default sidebars;
