module.exports = {
  title: 'VARLET UTE',
  logo: './logo.svg',
  useMobile: true,
  pc: {
    title: {
      'zh-CN': 'VARLET UI 主题编辑工具',
      'en-US': 'VARLET UI theme editor',
    },
    indexPage: {
      description: {
        'zh-CN': 'Varlet UI theme editor 是一个基于 VARLET 开发的主题编辑工具,\n由社区团队维护',
        'en-US':
          'Varlet UI theme editor is a theme editing tool developed based on VARLET,\nMaintained by the community team',
      },
      features: [
        {
          name: {
            'zh-CN': '全组件支持',
            'en-US': 'Full component support',
          },
          description: {
            'zh-CN': '提供所有 VARLET 组件的主题编辑',
            'en-US': 'Provides theme editing for all VARLET components',
          },
        },
        {
          name: {
            'zh-CN': '支持亮色和暗色两种主题',
            'en-US': 'Support both light and dark themes',
          },
          description: {
            'zh-CN': '内置亮色和暗色两种主题的预设，支持切换预设进行编辑和导出',
            'en-US': 'Built-in presets for light and dark themes, support switching presets for editing and exporting',
          },
        },
        {
          name: {
            'zh-CN': '主题文件十分轻量',
            'en-US': 'Theme files are very lightweight',
          },
          description: {
            'zh-CN': '只导出一个包含主题补丁的 javascript 文件，十分轻量',
            'en-US': 'Only export a javascript file of the theme patch, very lightweight',
          },
        },
        {
          name: {
            'zh-CN': '使用 VARLET CLI 构建',
            'en-US': 'Use VARLET CLI build',
          },
          description: {
            'zh-CN': '使用 VARLET CLI 构建，与 VARLET 官方文档的交互体验高度一致',
            'en-US':
              'Built using VARLET CLI, the interactive experience is consistent with the official VARLET documentation',
          },
        },
        {
          name: {
            'zh-CN': '国际化',
            'en-US': 'Locale',
          },
          description: {
            'zh-CN': '支持中文和英文两种语言',
            'en-US': 'Support Chinese and English two languages',
          },
        },
        {
          name: {
            'zh-CN': '国人开发',
            'en-US': 'Developed by Chinese',
          },
          description: {
            'zh-CN': '由国人开发，完善的中英文文档和后勤保障',
            'en-US': 'Complete Chinese and English documentation and logistics support',
          },
        },
      ],
      contributors: {
        label: {
          'zh-CN': '贡献者',
          'en-US': 'Contributors',
        },
        link: 'https://github.com/sdhushu/varlet-ute/graphs/contributors',
        image: 'https://contrib.rocks/image?repo=sdhushu/varlet-ute',
      },
      license: {
        'zh-CN': '主题编辑基于 MIT 协议，您可以自由的使用和分享',
        'en-US': 'Theme editing tool under the MIT License, You can use and share freely.',
      },
      copyright: {
        'zh-CN': 'Copyright © 2022 varletjs 组织成员以及 Varlet UI theme editor 的贡献者们',
        'en-US': 'Copyright © 2022 varletjs member and Varlet UI theme editor contributors.',
      },
    },
    header: {
      versions: null,
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      playground: null,
      github: 'https://github.com/varletjs/varlet-ute',
    },
    menu: [
      {
        text: {
          'zh-CN': '开发指南',
          'en-US': 'Developer guide',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': '公共样式',
          'en-US': 'Common Style',
        },
        doc: 'common',
        type: 2,
      },
      {
        text: {
          'zh-CN': '基础组件',
          'en-US': 'Basic Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Button 按钮',
          'en-US': 'Button',
        },
        doc: 'button',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Breadcrumbs 面包屑',
          'en-US': 'Breadcrumbs',
        },
        doc: 'breadcrumbs',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Cell 单元格',
          'en-US': 'Cell',
        },
        doc: 'cell',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Icon 图标',
          'en-US': 'Icon',
        },
        doc: 'icon',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Loading 加载',
          'en-US': 'Loading',
        },
        doc: 'loading',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Chip 纸片',
          'en-US': 'Chip',
        },
        doc: 'chip',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Badge 徽标',
          'en-US': 'Badge',
        },
        doc: 'badge',
        type: 2,
      },
      {
        text: {
          'zh-CN': '展示组件',
          'en-US': 'Display Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Skeleton 骨架屏',
          'en-US': 'Skeleton',
        },
        doc: 'skeleton',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Collapse 拓展面板',
          'en-US': 'Collapse',
        },
        doc: 'collapse',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Progress 进度条',
          'en-US': 'Progress',
        },
        doc: 'progress',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'List 无限滚动列表',
          'en-US': 'List',
        },
        doc: 'list',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Swipe 轮播',
          'en-US': 'Swipe',
        },
        doc: 'swipe',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Steps 步骤条',
          'en-US': 'Steps',
        },
        doc: 'steps',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'ImagePreview 图片预览',
          'en-US': 'ImagePreview',
        },
        doc: 'image-preview',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Card 卡片',
          'en-US': 'Card',
        },
        doc: 'card',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Result 结果',
          'en-US': 'Result',
        },
        doc: 'result',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Divider 分割线',
          'en-US': 'Divider',
        },
        doc: 'divider',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Table 表格',
          'en-US': 'Table',
        },
        doc: 'table',
        type: 2,
      },
      {
        text: {
          'zh-CN': '导航组件',
          'en-US': 'Navigation Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Tabs 选项卡',
          'en-US': 'Tabs',
        },
        doc: 'tabs',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'IndexBar 索引栏',
          'en-US': 'IndexBar',
        },
        doc: 'index-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'AppBar 导航栏',
          'en-US': 'AppBar',
        },
        doc: 'app-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'BottomNavigation 底部导航栏',
          'en-US': 'BottomNavigation',
        },
        doc: 'bottom-navigation',
        type: 2,
      },
      {
        text: {
          'zh-CN': '功能指令',
          'en-US': 'Functional Directives',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Ripple 水波指令',
          'en-US': 'Ripple',
        },
        doc: 'ripple',
        type: 2,
      },
      {
        text: {
          'zh-CN': '反馈组件',
          'en-US': 'Action Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Snackbar 消息条',
          'en-US': 'Snackbar',
        },
        doc: 'snackbar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'ActionSheet 动作面板',
          'en-US': 'ActionSheet',
        },
        doc: 'action-sheet',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Dialog 对话框',
          'en-US': 'Dialog',
        },
        doc: 'dialog',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'PullRefresh 下拉刷新',
          'en-US': 'PullRefresh',
        },
        doc: 'pull-refresh',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Overlay 遮罩层',
          'en-US': 'Overlay',
        },
        doc: 'overlay',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Popup 弹出层',
          'en-US': 'Popup',
        },
        doc: 'popup',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Pagination 分页',
          'en-US': 'Pagination',
        },
        doc: 'pagination',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Menu 菜单',
          'en-US': 'Menu',
        },
        doc: 'menu',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Tooltip 提示',
          'en-US': 'Tooltip',
        },
        doc: 'tooltip',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'BackTop 回到顶部',
          'en-US': 'BackTop',
        },
        doc: 'back-top',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'LoadingBar 加载条',
          'en-US': 'LoadingBar',
        },
        doc: 'loading-bar',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Picker 多列选择器',
          'en-US': 'Picker',
        },
        doc: 'picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'DatePicker 日期选择器',
          'en-US': 'DatePicker',
        },
        doc: 'date-picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'TimePicker 时间选择器',
          'en-US': 'TimePicker',
        },
        doc: 'time-picker',
        type: 2,
      },
      {
        text: {
          'zh-CN': '表单组件',
          'en-US': 'Form Components',
        },
        type: 1,
      },
      {
        text: {
          'zh-CN': 'Form 表单',
          'en-US': 'Form',
        },
        doc: 'form',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Input 输入框',
          'en-US': 'Input',
        },
        doc: 'input',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Select 选择框',
          'en-US': 'Select',
        },
        doc: 'select',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Radio 单选框',
          'en-US': 'Radio',
        },
        doc: 'radio-group',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Checkbox 复选框',
          'en-US': 'Checkbox',
        },
        doc: 'checkbox-group',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Counter 计数器',
          'en-US': 'Counter',
        },
        doc: 'counter',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Switch 开关',
          'en-US': 'Switch',
        },
        doc: 'switch',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Slider 滑块',
          'en-US': 'Slider',
        },
        doc: 'slider',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Rate 评分',
          'en-US': 'Rate',
        },
        doc: 'rate',
        type: 2,
      },
      {
        text: {
          'zh-CN': 'Uploader 文件上传',
          'en-US': 'Uploader',
        },
        doc: 'uploader',
        type: 2,
      },
    ],
  },
  mobile: {
    redirect: '/home',
    title: {
      'zh-CN': 'Varlet UI 主题编辑工具',
      'en-US': 'Varlet UI theme editing tool',
    },
    header: {
      i18n: {
        'zh-CN': '中文',
        'en-US': 'English',
      },
      github: 'https://github.com/varletjs/varlet-ute',
    },
  },
  highlight: {
    style: null,
  },
}
