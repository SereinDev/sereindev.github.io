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
        link: { type: 'generated-index' },
        items: [
          'development/plugins/plugin_info',
          'development/plugins/tree',
          'development/plugins/tutorials',
          {
            type: 'category',
            label: '.NET',
            collapsible: false,

            link: { type: 'doc', id: 'development/plugins/net/index' },
            items: [
              'development/plugins/net/injection',
              'development/plugins/net/packages',
            ],
          },
          {
            type: 'category',
            label: 'JavaScript',
            collapsible: false,
            link: { id: 'development/plugins/js/index', type: 'doc' },
            items: ['development/plugins/js/net'],
          },
          {
            type: 'category',
            label: 'References',
            items: [
              'development/plugins/references/events',
              'development/plugins/references/metadata',
              'development/plugins/references/output',
              'development/plugins/references/path',
              'development/plugins/references/servers',
              'development/plugins/references/connection',
              'development/plugins/references/permission_group',
              'development/plugins/references/storages',
              'development/plugins/references/timer',
              'development/plugins/references/exports_imports',
            ],
          },
        ],
      },
      {
        type: 'category',
        label: '网页接口',
        link: { id: 'development/webapi/index', type: 'doc' },
        items: [
          'development/webapi/root',
          'development/webapi/metadata',
          {
            type: 'category',
            label: '连接',
            items: ['development/webapi/connection/info'],
          },
          {
            type: 'category',
            label: '硬件信息',
            link: { id: 'development/webapi/hardware/index', type: 'doc' },
            items: [
              'development/webapi/hardware/batteries',
              'development/webapi/hardware/bios',
              'development/webapi/hardware/cpus',
              'development/webapi/hardware/drives',
              'development/webapi/hardware/keyboards',
              'development/webapi/hardware/memory',
              'development/webapi/hardware/memory_status',
              'development/webapi/hardware/monitors',
              'development/webapi/hardware/motherboards',
              'development/webapi/hardware/mouses',
              'development/webapi/hardware/os',
              'development/webapi/hardware/printers',
              'development/webapi/hardware/soundDevices',
              'development/webapi/hardware/system',
            ],
          },
          {
            type: 'category',
            label: '服务器',
            items: [
              'development/webapi/servers/infos',
              'development/webapi/servers/info',
              'development/webapi/servers/create',
              'development/webapi/servers/edit',
              'development/webapi/servers/delete',
              'development/webapi/servers/start',
              'development/webapi/servers/stop',
              'development/webapi/servers/terminate',
              'development/webapi/servers/input_get',
              'development/webapi/servers/input_post',
            ],
          },
          {
            type: 'category',
            label: '设置',
            items: [
              'development/webapi/setting/get',
              'development/webapi/setting/update',
            ],
          },
          {
            type: 'category',
            label: 'WebSocket',
            link: { type: 'doc', id: 'development/webapi/ws/index' },
            items: ['development/webapi/ws/data'],
          },
        ],
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
      'guidance/permission_group',
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
          'tutorial/advanced/pty',
          'tutorial/advanced/build',
          'tutorial/advanced/write_a_js_plugin',
          'tutorial/advanced/write_a_net_plugin',
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
        items: [
          'tutorial/migration/from_v1',
          {
            type: 'category',
            label: '迁移工具(v1->v2)',
            items: [
              {
                type: 'autogenerated',
                dirName: 'tutorial/migration/v2',
              },
            ],
          },
        ],
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
