import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

export default {
  development: [
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
              link: { type: 'doc', id: 'development/plugins/net/index' },
              items: [
                'development/plugins/net/injection',
                'development/plugins/net/packages',
              ],
            },
            {
              type: 'category',
              label: 'JavaScript',
              link: { id: 'development/plugins/js/index', type: 'doc' },
              items: [
                'development/plugins/js/helper_lib',
                'development/plugins/js/clr',
                'development/plugins/js/modules',
                'development/plugins/js/built_in_modules',
              ],
            },
            {
              type: 'category',
              label: 'References',
              items: [
                'development/plugins/references/events',
                'development/plugins/references/app',
                'development/plugins/references/output',
                'development/plugins/references/path',
                'development/plugins/references/servers',
                'development/plugins/references/connection',
                'development/plugins/references/permission_group',
                'development/plugins/references/storages',
                'development/plugins/references/timer',
                'development/plugins/references/exports_imports',
                'development/plugins/references/others',
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
  ],
  guidance: [
    'index',
    {
      type: 'category',
      label: '指南',
      collapsible: false,
      items: [
        'guidance/servers',
        'guidance/match',
        'guidance/schedule',
        'guidance/plugins',
        'guidance/command',
        'guidance/variables',
        'guidance/permission_group',
      ],
    },
  ],
  tutorial: [
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
            'tutorial/rookie/uninstall',
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
            'tutorial/migration/from_v2.0',
            {
              type: 'category',
              label: '从 v1.x 迁移',
              link: { type: 'doc', id: 'tutorial/migration/from_v1' },
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
  ],
  more: [
    'more/contribute',
    'more/donate',
    'more/history',
    'more/agreement',
    'more/about',
  ],
} satisfies SidebarsConfig;
