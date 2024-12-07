import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';
import type { SidebarConfig } from '@docusaurus/plugin-content-docs/src/sidebars/types';

const development: SidebarConfig = [
  {
    type: 'category',
    label: '开发',
    collapsible: false,
    link: { type: 'doc', id: 'development/index' },
    items: [
      {
        type: 'category',
        label: '插件',
        link: { type: 'doc', id: 'development/plugins/index' },
        items: [
          'development/plugins/plugin_info',
          'development/plugins/path',
          'development/plugins/metadata',
          'development/plugins/output',
          'development/plugins/servers',
          'development/plugins/connection',
          'development/plugins/permission_group',
          'development/plugins/storages',
          'development/plugins/timer',
          'development/plugins/exports_imports',
          {
            type: 'category',
            label: 'NET',
            link: { type: 'doc', id: 'development/plugins/net/index' },
            items: [
              'development/plugins/net/tutorial',
              'development/plugins/net/injection',
              'development/plugins/net/events',
              'development/plugins/net/packages',
            ],
          },
          {
            type: 'category',
            label: 'JavaScript',
            link: { id: 'development/plugins/js/index', type: 'doc' },
            items: ['development/plugins/js/net'],
          },
        ],
      },
      {
        type: 'category',
        label: 'API',
        link: { id: 'development/api/index', type: 'doc' },
        items: [
          'development/api/root',
          'development/api/metadata',
          {
            type: 'category',
            label: '连接',
            items: ['development/api/connection/info'],
          },
          {
            type: 'category',
            label: '硬件信息',
            link: { id: 'development/api/hardware/index', type: 'doc' },
            items: [
              'development/api/hardware/batteries',
              'development/api/hardware/bios',
              'development/api/hardware/cpus',
              'development/api/hardware/drives',
              'development/api/hardware/keyboards',
              'development/api/hardware/memory',
              'development/api/hardware/memory_status',
              'development/api/hardware/monitors',
              'development/api/hardware/motherboards',
              'development/api/hardware/mouses',
              'development/api/hardware/os',
              'development/api/hardware/printers',
              'development/api/hardware/soundDevices',
              'development/api/hardware/system',
            ],
          },
          {
            type: 'category',
            label: '服务器',
            items: [
              'development/api/servers/infos',
              'development/api/servers/info',
              'development/api/servers/create',
              'development/api/servers/edit',
              'development/api/servers/delete',
              'development/api/servers/start',
              'development/api/servers/stop',
              'development/api/servers/terminate',
              'development/api/servers/input_get',
              'development/api/servers/input_post',
            ],
          },
          {
            type: 'category',
            label: '设置',
            items: [
              'development/api/setting/get',
              'development/api/setting/update',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: 'WebSocket',
        link: { type: 'doc', id: 'development/ws/index' },
        items: ['development/ws/data'],
      },
    ],
  },
];

const guidance: SidebarConfig = [
  'index',
  {
    type: 'category',
    label: '指南',
    collapsible: false,
    items: [
      'guidance/command',
      'guidance/variables',
      'guidance/match',
      'guidance/schedule',
      'guidance/servers',
      'guidance/plugins',
    ],
  },
];

const more: SidebarConfig = [
  'more/contribute',
  'more/donate',
  'more/history',
  'more/agreement',
  'more/about',
];

const tutorial: SidebarConfig = [
  {
    type: 'category',
    label: '教程',
    collapsible: false,
    link: { type: 'doc', id: 'tutorial/index' },
    items: [
      {
        type: 'category',
        label: '入门',
        link: { type: 'generated-index' },
        items: [
          'tutorial/rookie/get_started',
          'tutorial/rookie/choose',
          'tutorial/rookie/add_server',
          'tutorial/rookie/edit_server',
          'tutorial/rookie/config_connection',
        ],
      },
      {
        type: 'category',
        label: '进阶',
        link: { type: 'generated-index' },
        items: [
          'tutorial/advanced/commandline_args',
          'tutorial/advanced/build',
        ],
      },
      ,
      {
        type: 'category',
        link: { type: 'generated-index' },
        label: '常见问题',
        items: [{ type: 'autogenerated', dirName: 'tutorial/qa' }],
      },
      {
        type: 'category',
        label: '迁移',
        items: [{ type: 'autogenerated', dirName: 'tutorial/migration' }],
      },
    ],
  },
];

export default {
  development,
  guidance,
  tutorial,
  more,
} satisfies SidebarsConfig;
