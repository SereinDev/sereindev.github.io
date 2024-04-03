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
      items: ['guidance/index'],
    },
  ],

  tutorial: [
    {
      type: 'category',
      label: '教程',
      collapsible: false,
      items: ['index'],
    },
  ],
};

export default sidebars;
